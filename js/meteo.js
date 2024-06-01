document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '06fc910d66b18f75e9875f4161a2b397'; // clé API OpenWeatherMap
    const city = 'Antananarivo'; // Remplacez par la ville désirée
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    async function fetchWeather() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des données météo');
            }
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            console.error('Erreur:', error);
            document.getElementById('weather-content').innerHTML = '<p class="text-lg text-red-600">Erreur lors de la récupération des données météo</p>';
        }
    }

    function displayWeather(data) {
        const weatherContent = document.getElementById('weather-content');
        const weatherHTML = `
            <h3 class="text-2xl text-gray-900">${data.name}, ${data.sys.country}</h3>
            <p class="text-xl text-gray-700">${data.weather[0].description}</p>
            <p class="text-4xl text-gray-900">${data.main.temp}°C</p>
            <p class="text-lg text-gray-700">Humidité: ${data.main.humidity}%</p>
            <p class="text-lg text-gray-700">Vent: ${data.wind.speed} m/s</p>
        `;
        weatherContent.innerHTML = weatherHTML;
    }

    fetchWeather();
});
