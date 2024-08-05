import express from "express";
import { config } from "dotenv";

// Load environment variables from the config file
config();

const app = express();
import userRoutes from "./routes/userRoutes.js"; // Adjust path as needed
const port = process.env.PORT || 3000; // Provide a default port
// Middleware to parse JSON bodies
app.use(express.json());
// Define the root route
app.get("/", (req, res) => {
  console.log("Hello, world");
  res.send("Hello, world");
});
// Use user routes
app.use("/api/users", userRoutes);
// Start the server
app.listen(port, () => {
  console.log(`---> Server running on port ${port} <---`);
});
