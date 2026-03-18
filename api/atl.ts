export const config = {
  runtime: "edge",
};

export default async function handler() {
  try {
    const response = await fetch(
      "https://www.atl.com/wp-json/atl-security-wait-times/v1/wait-times",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
          "Accept": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("ATL API request failed");
    }

    const data = await response.json();

    return new Response(
      JSON.stringify({
        ok: true,
        source: "ATL",
        data,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Failed to fetch ATL data",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
