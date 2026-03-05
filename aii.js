const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// NEVER expose API key in frontend
const genAI = new GoogleGenerativeAI("AIzaSyAxS-KiVLqi6isSAxRbWCglwq1OSgYsJ9I");
const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash" });

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.query;

    const result = await model.generateContent(userMessage);
    const reply = result.response.candidates[0].content.parts[0].text

    res.json({ reply });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

//SERVER FOR THE AI