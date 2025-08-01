require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();

const PORT = 3000
const apiKey = process.env.WEATHER_API_KEY

app.use(express.static(path.join(__dirname, "public")));

app.get("/weather", async (req, res) => {
  const city = req.query.city
  if (!city) return;

  try {
    const response = await axios.get ("https://api.weatherapi.com/v1/current.json", {
      params: {
        key: apiKey,
        q: city,
        
      }
    });

    res.json({
      city: response.data.location.name,
      temp: response.data.current.temp_c,
      condition: response.data.current.condition.text
    });

  }
  catch (error) {
    console.error ("error", error.message);
    res.status(500).json({error: "no data"});
  }
})


app.listen(PORT, () => {
  console.log(`Server is active on: http://localhost:${PORT}`);
});