export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      const videoUrl =
        "https://storage.googleapis.com/davidmansionvideos/video.mp4";
      res.status(200).json({ url: videoUrl });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch video URL" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
