import type { Express } from "express";
import { createServer, type Server } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { storage } from "./storage";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COFFEE_STATE_FILE = path.resolve(__dirname, "..", "tmp", "coffee-hive-state.json");

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve Coffee Hive Simulator as a standalone page
  app.get("/coffee", (_req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "client", "public", "coffee.html"));
  });

  // Save coffee simulator state to file
  app.post("/api/coffee/save", (req, res) => {
    const dir = path.dirname(COFFEE_STATE_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(COFFEE_STATE_FILE, JSON.stringify(req.body, null, 2));
    res.json({ ok: true });
  });

  // Load coffee simulator state from file
  app.get("/api/coffee/load", (_req, res) => {
    if (!fs.existsSync(COFFEE_STATE_FILE)) return res.json(null);
    const data = JSON.parse(fs.readFileSync(COFFEE_STATE_FILE, "utf-8"));
    res.json(data);
  });

  const httpServer = createServer(app);

  return httpServer;
}
