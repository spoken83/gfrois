interface Env {
  RESEND_API_KEY: string;
  CV_DOWNLOADS: KVNamespace;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const { email } = await request.json<{ email?: string }>();
    const timestamp = new Date().toISOString();
    const ip = request.headers.get("cf-connecting-ip") || "unknown";

    // Store download record in KV
    const record = { email: email || null, timestamp, ip };
    const key = `download_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    await env.CV_DOWNLOADS.put(key, JSON.stringify(record), {
      expirationTtl: 60 * 60 * 24 * 365, // 1 year
    });

    // Send notification email via Resend
    if (env.RESEND_API_KEY && email) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "CV Downloads <onboarding@resend.dev>",
          to: "gordon.matthew@gmail.com",
          subject: `CV Downloaded by ${email}`,
          text: `Someone downloaded your CV!\n\nEmail: ${email}\nTime: ${timestamp}\nIP: ${ip}\n\nYou can reach out to them at ${email}.`,
        }),
      });
    } else if (env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "CV Downloads <onboarding@resend.dev>",
          to: "gordon.matthew@gmail.com",
          subject: "CV Downloaded (no email provided)",
          text: `Someone downloaded your CV without leaving an email.\n\nTime: ${timestamp}\nIP: ${ip}`,
        }),
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("CV download tracking error:", error);
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  }
};
