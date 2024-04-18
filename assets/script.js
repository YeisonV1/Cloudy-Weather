const currentWeather = document.querySelector('.current-weather');
const searchBtn = document.querySelector('.search-button');
const cityName = document.querySelector('.cityInput');

const apiKey = "6rXOHDD7F6q4caofrNRupTDblaCplunU";


const getCityWeather = () => {

    const city = cityName.value;

    
    if(!city) return;


    const apiUrl = `https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${apiKey}`;
    
    fetch(apiUrl).then(res => res.json()).then(data => {
        console.log(data);
        // weatherDataDisplay(data);
    }).catch(() => {
        alert("no");
    });
}

function weatherDataDisplay(data){
    
    

        currentWeather.textContent = "";
        currentWeather.style.display = "flex";

        const cityName = document.createElement("h3");
        const tempWeather = document.createElement("p");
        const humidityWeather = document.createElement("p");


        cityName.textContent = city;
        tempWeather.textContent = `${((temp - 273.15)* 9/5 + 32).toFixed(1)}°F`;
        humidityWeather.textContent = `Humidity: ${humidity}%`;

        cityName.classList.add("cityName");
        tempWeather.classList.add("tempWeather");
        humidityWeather.classList.add("humidityWeather");

        currentWeather.appendChild(cityName);
        currentWeather.appendChild(tempWeather);
        currentWeather.appendChild(humidityWeather);


        return;
}

searchBtn.addEventListener("click", getCityWeather);
