/* global process */

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { message } = req.body || {};

    if (!message || message.trim().length === 0) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "Missing GEMINI_API_KEY",
      });
    }

    const portfolioContext = `
You are an AI assistant on Nguyen Anh Tuan's portfolio website.

About Nguyen Anh Tuan:
- Software Engineering graduate from FPT University.
- Looking for Backend Developer / Full-stack Developer opportunities.
- Strong in backend development, API design, database design, and system integration.
- Main stack: ASP.NET Core .NET 8, Entity Framework Core, RESTful APIs, SQL Server, PostgreSQL, MongoDB, JWT authentication, SignalR, React.js, Next.js, TypeScript, FastAPI, Docker, CI/CD, VPS deployment, Azure.
- Internship: Back-end Developer Intern at FPT Software on an online course selling platform.
- Projects:
  1. AESP - AI Speaking Practice Platform: AI scoring, placement testing, learning paths, PayOS, Cloudinary, FastAPI, SQL Server, React Native.
  2. AR Card Create Website: AR greeting card platform, QR/link sharing, ASP.NET Core, React.js, Gemini API, Cloudinary, PayOS.
  3. SBE - Used Sports Bicycle Exchange Platform: marketplace, online inspection, PayOS, GHN shipping, escrow, refund handling, RBAC.
  4. Ecommerce Tea Shop: responsive e-commerce frontend for an online tea shop.

Rules:
- Answer briefly and professionally.
- If the user asks about hiring, guide them to contact Tuan by email: tuannhatrang.contact@gmail.com.
- If the user asks technical questions about Tuan, answer based only on this context.
- Do not invent experience that is not listed.
- Keep answers short, friendly, and useful.
`;


const controller = new AbortController();

const timeoutId = setTimeout(() => {
  controller.abort();
}, 15000);

const geminiResponse = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    signal: controller.signal,
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `${portfolioContext}\n\nUser question: ${message}`,
            },
          ],
        },
      ],
    }),
  }
);

clearTimeout(timeoutId);

    const data = await geminiResponse.json();

    if (!geminiResponse.ok) {
      console.error("Gemini API error:", data);

      return res.status(geminiResponse.status).json({
        error: "Gemini API request failed",
        status: geminiResponse.status,
        details: data,
      });
    }

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I could not generate a response right now.";

    return res.status(200).json({
      reply,
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
}