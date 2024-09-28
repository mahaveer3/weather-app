const options = {
    method: 'GET',
    headers: {

        'X-RapidAPI-Key': 'a324360880msh63ed7ec8abd7131p15504bjsn34d8be6d4ec0',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            const sunriseTime = new Date(response.sunrise * 1000); // Convert Unix timestamp to milliseconds
            let sunriseHours = sunriseTime.getHours();
            const sunriseMinutes = sunriseTime.getMinutes();
            const sunriseAmpm = sunriseHours >= 12 ? 'PM' : 'AM';
            sunriseHours = sunriseHours % 12;
            sunriseHours = sunriseHours ? sunriseHours : 12; // Handle midnight (0 hours)
            const twelveHourSunrise = sunriseHours + ':' + (sunriseMinutes < 10 ? '0' : '') + sunriseMinutes + ' ' + sunriseAmpm;

            const sunsetTime = new Date(response.sunset * 1000); // Convert Unix timestamp to milliseconds
            let sunsetHours = sunsetTime.getHours();
            const sunsetMinutes = sunsetTime.getMinutes();
            const sunsetAmpm = sunsetHours >= 12 ? 'PM' : 'AM';
            sunsetHours = sunsetHours % 12;
            sunsetHours = sunsetHours ? sunsetHours : 12; // Handle midnight (0 hours)
            const twelveHourSunset = sunsetHours + ':' + (sunsetMinutes < 10 ? '0' : '') + sunsetMinutes + ' ' + sunsetAmpm;


            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speeds.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = twelveHourSunrise
            sunset.innerHTML = twelveHourSunset
            temp2.innerHTML = response.temp
            humidity2.innerHTML = response.humidity
            wind_speed2.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err))
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Chennai")

const getWeather2 = (city, cityNameElement, cloud_pct, feels_like, humidity, max_temp, min_temp, sunrise, sunset, temp, wind_degrees, wind_speed) => {
    cityNameElement.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            const sunriseTime = new Date(response.sunrise * 1000); // Convert Unix timestamp to milliseconds
            let sunriseHours = sunriseTime.getHours();
            const sunriseMinutes = sunriseTime.getMinutes();
            const sunriseAmpm = sunriseHours >= 12 ? 'PM' : 'AM';
            sunriseHours = sunriseHours % 12;
            sunriseHours = sunriseHours ? sunriseHours : 12; // Handle midnight (0 hours)
            const twelveHourSunrise = sunriseHours + ':' + (sunriseMinutes < 10 ? '0' : '') + sunriseMinutes + ' ' + sunriseAmpm;

            const sunsetTime = new Date(response.sunset * 1000); // Convert Unix timestamp to milliseconds
            let sunsetHours = sunsetTime.getHours();
            const sunsetMinutes = sunsetTime.getMinutes();
            const sunsetAmpm = sunsetHours >= 12 ? 'PM' : 'AM';
            sunsetHours = sunsetHours % 12;
            sunsetHours = sunsetHours ? sunsetHours : 12; // Handle midnight (0 hours)
            const twelveHourSunset = sunsetHours + ':' + (sunsetMinutes < 10 ? '0' : '') + sunsetMinutes + ' ' + sunsetAmpm;

            temp.innerHTML = response.temp
            cloud_pct.innerHTML = response.cloud_pct;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            max_temp.innerHTML = response.max_temp;
            min_temp.innerHTML = response.min_temp;
            sunrise.innerHTML = twelveHourSunrise;
            sunset.innerHTML = twelveHourSunset;
            temp.innerHTML = response.temp;
            wind_degrees.innerHTML = response.wind_degrees;
            wind_speed.innerHTML = response.wind_speed;
        })
        .catch(err => console.error(err));
};
getWeather2("Delhi", cityName1, cloud_pct_delhi, feels_like_delhi, humidity_delhi, max_temp_delhi, min_temp_delhi, sunrise_delhi, sunset_delhi, temp_delhi, wind_degrees_delhi, wind_speed_delhi)
getWeather2("Dubai", cityName2, cloud_pct_Dubai, feels_like_Dubai, humidity_Dubai, max_temp_Dubai, min_temp_Dubai, sunrise_Dubai, sunset_Dubai, temp_Dubai, wind_degrees_Dubai, wind_speed_Dubai);
getWeather2("Mumbai", cityName3, cloud_pct_mumbai, feels_like_mumbai, humidity_mumbai, max_temp_mumbai, min_temp_mumbai, sunrise_mumbai, sunset_mumbai, temp_mumbai, wind_degrees_mumbai, wind_speed_mumbai);
getWeather2("Shanghai", cityName4, cloud_pct_Shanghai, feels_like_Shanghai, humidity_Shanghai, max_temp_Shanghai, min_temp_Shanghai, sunrise_Shanghai, sunset_Shanghai, temp_Shanghai, wind_degrees_Shanghai, wind_speed_Shanghai);
getWeather2("France", cityName5, cloud_pct_France, feels_like_France, humidity_France, max_temp_France, min_temp_France, sunrise_France, sunset_France, temp_France, wind_degrees_France, wind_speed_France);