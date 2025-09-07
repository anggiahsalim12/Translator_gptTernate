export default function handler(req, res) {
  const apiKey = process.env.API_KEY; // Ambil API key dari Vercel
  res.status(200).json({ key: apiKey });
}