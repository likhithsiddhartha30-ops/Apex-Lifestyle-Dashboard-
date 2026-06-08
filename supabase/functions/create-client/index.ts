import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const body = await req.json();
    const { type, name, password, goal, start_date, specialty, joined_date } = body;
    // Normalise email to lowercase so the stored row matches the auth account
    // (Supabase Auth lowercases emails), keeping role detection reliable.
    const email = (body.email || "").trim().toLowerCase();

    // ── Reset password for an existing user ──────────────────────────────────
    if (type === "reset-password") {
      if (!email || !password) {
        return new Response(
          JSON.stringify({ error: "Email and password are required." }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
        );
      }
      const { data: { users }, error: listErr } = await supabaseAdmin.auth.admin.listUsers({ perPage: 1000 });
      if (listErr) {
        return new Response(
          JSON.stringify({ error: listErr.message }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
        );
      }
      const user = users.find((u) => u.email === email);
      if (!user) {
        return new Response(
          JSON.stringify({ error: "No user found with that email." }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 404 }
        );
      }
      const { error: updateErr } = await supabaseAdmin.auth.admin.updateUserById(user.id, { password });
      if (updateErr) {
        return new Response(
          JSON.stringify({ error: updateErr.message }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
        );
      }
      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
      );
    }

    // ── Create new user ───────────────────────────────────────────────────────
    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ error: "Name, email and password are required." }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    // Create auth user
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name: name },
    });

    if (authError) {
      return new Response(
        JSON.stringify({ error: authError.message }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    // Insert into the correct table based on type
    const isCoach  = type === "coach";
    const table    = isCoach ? "coaches" : "clients";
    const rowData  = isCoach
      ? { name, email, specialty: specialty || null, joined_date: joined_date || null }
      : { name, email, goal: goal || null, start_date: start_date || null };

    const { data: record, error: insertError } = await supabaseAdmin
      .from(table)
      .insert(rowData)
      .select()
      .single();

    if (insertError) {
      // Roll back auth user if DB insert fails
      await supabaseAdmin.auth.admin.deleteUser(authData.user.id);
      return new Response(
        JSON.stringify({ error: insertError.message }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    return new Response(
      JSON.stringify({ record }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: String(err) }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
