const express = require("express");
const cors = require("cors");
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const result = await axios.put(
        'https://api.chatengine.io/users/',
        {
            username: username,
            secret: username,
            first_name: username
        },
        {
            headers: { "private-key": process.env.CHAT_ENGINE_KEY}
        }
    );

    return res.status(result.status).json(result.data);
  } catch(e) {
    return res.status(500).json(e)
  }
//   return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);