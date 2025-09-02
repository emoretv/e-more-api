import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Load videos from JSON file
const loadVideos = () => {
  const data = fs.readFileSync("./videos.json");
  return JSON.parse(data);
};

app.get("/videos", (req, res) => {
  const videos = loadVideos();
  res.json(videos);
});

app.listen(PORT, () => {
  console.log(`✅ API running at http://localhost:${PORT}/videos`);
});
