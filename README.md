# 🌤️ Weather App

A clean, minimal weather application that fetches real-time weather data by city name using the **OpenWeatherMap API**.

---

## 🚀 Features

- 🔍 **City Search** — Enter any city name to get current weather conditions
- 🌡️ **Temperature Display** — Shows temperature in Fahrenheit
- 💧 **Humidity** — Displays the current humidity percentage
- 🌥️ **Weather Description** — Human-readable weather conditions (e.g. *overcast clouds*)
- 😎 **Weather Emoji** — Dynamic emoji that reflects the current weather (sun, snow, storm, etc.)
- ⚠️ **Error Handling** — Friendly messages when a city isn't found or the request fails

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| **HTML** | App structure |
| **CSS** | Styling & responsive layout |
| **JavaScript (ES Modules)** | App logic & API calls |
| **OpenWeatherMap API** | Live weather data |
| **Webpack** | Module bundling |
| **Webpack Dev Server** | Local development with hot reload |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/weather-app.git

# Navigate into the project
cd weather-app

# Install dependencies
npm install
```

---

## ▶️ Usage

```bash
# Start the development server
npx webpack serve

# Build for production
npx webpack
```

Then open your browser and go to `http://localhost:8080` 🌐

---

## 🌦️ Weather Emoji Guide

| Emoji | Condition |
|-------|-----------|
| ☀️ | Clear sky |
| ☁️ | Cloudy |
| ⛈️ | Thunderstorm / Rain / Drizzle |
| ❄️ | Snow |
| ❓ | Unknown condition |

---

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── index.html      # App HTML template
│   ├── index.js        # Main JavaScript logic
│   └── styles.css      # App styles
├── webpack.config.js   # Webpack configuration
└── package.json        # Project metadata & scripts
```

---

## 🔑 API Key

This app uses the [OpenWeatherMap API](https://openweathermap.org/api). The API key is currently hardcoded in `src/index.js`. For production use, it's recommended to store it in a `.env` file and access it via environment variables.

---

## 📄 License

This project is licensed under the **ISC License**.

---

> Built with ☕ and ❤️ — stay weather-aware!
