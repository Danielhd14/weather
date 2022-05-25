let url = "https://api.openweathermap.org/data/2.5/weather?q=";
let apiKey = "e34bae7db1e26852bb5f4dd0f0c8d05b";
const option = {
    meathod : 'GET',
    header : {
        "Content-type" : 'application/json'
    }
}

let hold = document.getElementById('hold')
async function getWeather(city) {
    const response = await fetch(url + city + "&units=metric&appid=" + apiKey, option);
    const data = await response.json();
    console.log(data)
    hold.innerHTML = `
    <div class="info" id="info">
    <div class="headlines">
    <h1>Weather in ${data.name} at ${data.sys.country}</h1>
    <h2>At coordinate ${data.coord.lat} and ${data.coord.lon}</h2>   
</div>
<div class="headlines">
    <h3>It is ${data.main.temp} Degrees C</h3>
</div>
<div class="headlines">
    <h3>With Wind speed of ${data.wind.speed}</h3>
    <h3>Looks like we are going to have ${data.weather[0].description}</h3>
</div>
</div>
    `
}


