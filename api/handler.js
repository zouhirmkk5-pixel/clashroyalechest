import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function handler(req, res) {
  const ua = (req.headers['user-agent'] || '').toLowerCase();
  const query = req.query?.stage || '';

  if (ua.includes("tiktok") && query !== "browser") {
    res.sendFile(path.join(__dirname, "../public/tiktok-only.html"));
  } else {
    res.sendFile(path.join(__dirname, "../public/leading.html"));
  }
}
