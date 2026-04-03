interface Env {
  CV_DOWNLOADS: KVNamespace;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { env } = context;

  try {
    const data = await env.CV_DOWNLOADS.get("coffee_hive_state");
    return new Response(data || "null", {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("null", {
      headers: { "Content-Type": "application/json" },
    });
  }
};
