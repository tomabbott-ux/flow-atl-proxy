export const runtime = "nodejs";

export async function GET() {
  const url = "https://www.atl.com/times/";

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15",
      },
      cache: "no-store",
    });

    const html = await res.text();

    return new Response(
      JSON.stringify({
        ok: true,
        html: html,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "failed to fetch ATL",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
