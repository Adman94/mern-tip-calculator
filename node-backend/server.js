import express from "express";
import cors from "cors";

const PORT = 9000;
const app = express(); // initialize express App
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, World" });
})

app.post("/api/v1/calculatetip", (req, res) => {
  const amount = parseInt(req.body.amount);
  const tip = parseInt(req.body.tip);

  const toBePayed = amount * (tip / 100) + amount;
  res.status(200).json({ toBePayed }); // toBePayed : 'toBePayed'
})

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
})