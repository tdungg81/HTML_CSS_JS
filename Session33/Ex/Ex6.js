const weatherData = {
  "Ho Chi Minh": {
    temperature: 32,
    condition: "Sunny",
    humidity: 75,
    windSpeed: 7
  },
  "Da Nang": {
    temperature: 28,
    condition: "Cloudy",
    humidity: 80,
    windSpeed: 10
  },
  "Ha Noi": {
    temperature: 20,
    condition: "Rainy",
    humidity: 85,
    windSpeed: 5
  }
};

function displayWeather(city) {
    const weather = weatherData[city];
    document.getElementById('location').textContent = city;
    document.getElementById('temperature').textContent = `${weather.temperature}°C`;
    document.getElementById('condition').textContent = weather.condition;
    document.getElementById('humidity').textContent = `Độ ẩm: ${weather.humidity}%`;
    document.getElementById('windSpeed').textContent = `Tốc độ gió: ${weather.windSpeed} km/h`;
}

displayWeather("Ho Chi Minh");
function updateWeather() {
    const city = document.getElementById('city-select').value;
    displayWeather(city);
}