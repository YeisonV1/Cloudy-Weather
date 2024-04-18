const container = document.querySelector('.container');
const currentWeather= document.querySelector('.current-weather');
const search= document.getElementById('search-button');
const FiveDayWeather = document.querySelector('.container');
const cityName = document.querySelector('.cityInput');

const APIKey = '6rXOHDD7F6q4caofrNRupTDblaCplunU';


const getCityWeather = () =>{

    const city = cityName.value;

    if(!city)return;

    fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${APIKey}`)
    .then(response => response.json()).then(data => {
        console.log(data);
    }).catch(() => {
        alert("no");
    }) 
};  


search.addEventListener("click", getCityWeather);
