let cities = [
    {name: "Denver", lat: 39.74, lon: -104.99},
]

const part ="hourly"

function getIcon(code) {
    return `http://openweathermap.org/img/wn/${code}@2x.png`
}

function kelvinToF(k) {
    return 1.8 * (k - 273) + 32.0;
}

function makeDayCard(day) {
    const div = $("<div class= 'col s2 card'>")
    const top = $("<h5>");

    div.append(top);
    top.text( new Date(day.dt)) // like "Date Mon Jan 19 1970 02:15:28 GMT-0700 (Mountain Standard Time)"

    const icon = $("<img>");
    icon.attr("src", getIcon(day.weather[0].icon));
    top.append(icon);

    const temp = $("<div>");
    temp.text("Temp: " + kelvinToF(day.temp.day) + "F");
    div.append(temp);

    const humidity = $("<div>");
    humidity.text("Humidity: " + day.humidity);
    div.append(humidity);


    return div;
}

function request(lat, lon) {
    
    
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${openWeatherMapKey}`
    
    $.get(url, function( data ) {
        // handle response
        console.log(data);

        const daily = data.daily
        const today = daily[0];
        $("#temp").text( kelvinToF(today.temp.day) + "F"); 
        $("#humidity").text(today.humidity); 
        $("#wind").text(today.wind_speed); 
        $("#uvIndex").text(today.uvi); 
    })
    
}
