

const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 3000;

// Public klasöründeki dosyaları (HTML, JS, CSS) sun
app.use(express.static("public"));
app.use(express.json());

app.post("/api/ai", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",//ilerde değiştirebiliriz
      {
        model: "gpt-4", // dilersen gpt-3.5-turbo da kullanabilirsin
        messages: [
          {
            role: "system",
            content: "Kullanıcının duygusunu analiz et ve kısa bir öneri ver.",
          },
          {
            role: "user",
            content: userMessage,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: Bearer ${process.env.OPENAI_API_KEY},
        },
      }
    );

    const aiMessage = response.data.choices[0].message.content;
    res.json({ reply: aiMessage });
  } catch (error) {
    console.error("OpenAI API hatası:", error.message);
    res.status(500).json({ error: "AI yanıtı alınamadı." });
  }
});

app.listen(PORT, () => {
  console.log(✅ Sunucu calisiyor: http://localhost:${PORT});
});