// server.js (minimal + verbose, two endpoints)
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json({ limit: "200kb" }));

// Console-log every request so we SEE activity
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Ensure logs dir exists
const logsDir = path.join(__dirname, "logs");
fs.mkdirSync(logsDir, { recursive: true });

// Log files
const rosenFile   = path.join(logsDir, "rosenkrans.ndjson");
const ortodoksFile = path.join(logsDir, "ortodoks.ndjson");

console.log("▶ Log directory:", logsDir);
console.log("▶ Ros’en log file:", rosenFile);
console.log("▶ Ortodoks log file:", ortodoksFile);

// Helper to append a batch
function appendBatch(logFile, entries, req, res) {
  const clientInfo = { ip: req.ip, ua: req.get("user-agent") || "" };
  const lines = entries.map(e => JSON.stringify({ ...e, _client: clientInfo }));
  fs.appendFile(logFile, lines.join("\n") + "\n", (err) => {
    if (err) {
      console.error("Failed to write logs:", err);
      return res.status(500).json({ error: "failed_to_write" });
    }
    return res.status(204).end();
  });
}

// --- Rosenkrans routes ---
app.get("/api/rosenkrans/logs", (req, res) => res.status(405).send("Use POST"));
app.head("/api/rosenkrans/logs", (req, res) => res.status(405).end());
app.options("/api/rosenkrans/logs", (req, res) => res.set("Allow", "POST").status(204).end());

app.post("/api/rosenkrans/logs", (req, res) => {
  const { entries } = req.body || {};
  if (!Array.isArray(entries) || entries.length === 0) {
    return res.status(400).json({ error: "entries must be a non-empty array" });
  }
  appendBatch(rosenFile, entries, req, res);
});

// --- Ortodoks routes ---
app.get("/api/ortodoks/logs", (req, res) => res.status(405).send("Use POST"));
app.head("/api/ortodoks/logs", (req, res) => res.status(405).end());
app.options("/api/ortodoks/logs", (req, res) => res.set("Allow", "POST").status(204).end());

app.post("/api/ortodoks/logs", (req, res) => {
  const { entries } = req.body || {};
  if (!Array.isArray(entries) || entries.length === 0) {
    return res.status(400).json({ error: "entries must be a non-empty array" });
  }
  appendBatch(ortodoksFile, entries, req, res);
});

// Final catch-all 404 (so nothing hangs)
app.use((req, res) => res.status(404).send("Not found"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Log server listening on port", PORT);
});
