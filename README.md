# Weather App 🌤️

Basic Node.js and Vanilla JavaScript project. Users can search for any city to get real time weather data.

---

## 🚀 Features

- Search for current weather by city name  
- Real-time data from [WeatherAPI.com](https://www.weatherapi.com/)  
- Server-side API request (keeps API key safe)  
- Lightweight, responsive front-end

---

## 🧱 Technologies Used

- **Node.js** + **Express**
- **Axios** for HTTP requests
- **dotenv** for environment variables keeps API KEY safe
- **HTML / CSS / JavaScript (vanilla)**

---

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/efeozyurek/weather-app.git
cd weather-app
```

---

### 2. Install dependencies
```bash
npm install
```

---

### 3. Add your API Key

- Create a .env file in the project root:
```bash
WEATHER_API_KEY = YOUR_API_KEY_HERE
```
---

### 4. Start the server

```bash
node server.js
```

---

### 5. Open in your browser

```bash
https://localhost:3000
```

---

<h3>📁 Project Structure</h3>

```bash
weather-app/
├── public/
│   ├── index.html
│   └── script.js
├── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

<h3>🛡️ Notes</h3>

- **.env file is ignored by Git (see .gitignore)**

- **Do not share your API key publicly**

- **You can change the weather API to any other weather API by editing server.js**

---

📜 License
MIT License - free to use, modify, and distribute.#