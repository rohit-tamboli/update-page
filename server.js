import express from "express";
import { createServer as createViteServer } from "vite";
import { MongoClient } from "mongodb";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/update_db";
const client = new MongoClient(MONGODB_URI);

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }

  const db = client.db();
  const usersCollection = db.collection("users");

  const app = express();
  const PORT = 5173;

  app.use(express.json());

  // API routes
  app.post("/api/register", async (req, res) => {
    const { fullName, email, phone, role } = req.body;

    if (!fullName || !email || !phone || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      // Check if email exists
      const existingUser = await usersCollection.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "Email already exists" });
      }

      const result = await usersCollection.insertOne({
        fullName,
        email,
        phone,
        role,
        createdAt: new Date(),
      });
      
      res.json({ success: true, userId: result.insertedId });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/users", async (req, res) => {
    const users = await usersCollection.find().sort({ createdAt: -1 }).toArray();
    res.json(users);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
