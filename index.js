const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r=await axios.put(
        'https://api.chatengine.io/users/',
        {username:username,secret:username,first_name:username},
        {headers:{" private-key ":" 14605861-48a7-420b-aa03-f9b9b369cef4 "}}
    )
    return res.status(r.status).json(r.data)
  }catch(e){
    return res.status(e.response).json(e.response)
  }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);