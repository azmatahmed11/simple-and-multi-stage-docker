const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const LABEL = process.env.IMAGE_LABEL || "unknown-image";

// static files (CSS, images)
app.use(express.static(path.join(__dirname, "public")));

// simple route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// API endpoint for testing
app.get("/api/hello", (req, res) => {
  res.json({ message: `Hello from ${LABEL} container!` });
});

app.listen(PORT, () => {
  console.log(`✅ App running on http://localhost:${PORT} (label=${LABEL})`);
});
