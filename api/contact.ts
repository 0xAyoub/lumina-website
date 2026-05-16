import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = {
      ...req.body,
      _captcha: "false",
    };

    const response = await fetch(
      "https://formsubmit.co/ajax/ayoub@withluminalabs.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const text = await response.text();
    let data: unknown;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    if (!response.ok) {
      console.error("formsubmit upstream error", response.status, text);
      return res.status(502).json({ error: "Upstream error", status: response.status, detail: data });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error("contact handler error", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
