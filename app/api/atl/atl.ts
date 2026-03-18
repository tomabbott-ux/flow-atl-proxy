export default async function handler(req: any, res: any) {
  try {
    const response = await fetch("https://www.atl.com/wp-json/atl-security-wait-times/v1/wait-times");

    const data = await response.json();

    res.status(200).json({
      ok: true,
      data
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: "Failed to fetch ATL data"
    });
  }
}
