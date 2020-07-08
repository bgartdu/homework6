let cities = {
    "Denver": { lat: 39.74, lon: -104.99},
    "Aberdeen": { lat:57, lon:2},
    "Adelaide": { lat:-34, lon:2},
    "Algiers": { lat:36, lon:2},
    "Amsterdam": { lat:52, lon:2},
    "Ankara": { lat:39, lon:2},
    "Asunción": { lat:-25, lon:2},
    "Athens": { lat:37, lon:2},
    "Auckland Zealand": { lat:-36, lon:2},
    "Bangkok": { lat:13, lon:2  },
    "Barcelona": { lat:41, lon:2},
    "Beijing": { lat:39, lon:2},
    "Belém": { lat:-1, lon:2},
    "Belfast Ireland": { lat:54, lon:2},
    "Belgrade": { lat:44, lon:2},
    "Berlin": { lat:52, lon:2},
    "Birmingham": { lat:52, lon:2},
    "Bogotá": { lat:4, lon:2},
    "Bombay": { lat:19, lon:2},
    "Bordeaux": { lat:44, lon:2},
    "Bremen": { lat:53, lon:2},
    "Brisbane": { lat:-27, lon:2},
    "Bristol": { lat:51, lon:2},
    "Brussels": { lat:50, lon:2},
    "Bucharest": { lat:44, lon:2},
    "Budapest": { lat:47, lon:2},
    "Buenos Aires": { lat:-34, lon:2},
    "Cairo": { lat:30, lon:2},
    "Calcutta": { lat:22, lon:2},
    "Canton": { lat:23, lon:2},
    "Cape Town Africa": { lat:-33, lon:2},
    "Caracas": { lat:10, lon:2},
    "Cayenne Guiana": { lat:4, lon:2},
    "Chihuahua": { lat:28, lon:2},
    "Chongqing": { lat:29, lon:2},
    "Copenhagen": { lat:55, lon:2},
    "Córdoba": { lat:-31, lon:2},
    "Dakar": { lat:14, lon:2},
    "Darwin": { lat:-12, lon:2},
    "Djibouti": { lat:11, lon:2},
    "Dublin": { lat:53, lon:2},
    "Durban Africa": { lat:-29, lon:2},
    "Edinburgh": { lat:55, lon:2},
    "Frankfurt": { lat:50, lon:2},
    "Georgetown": { lat:6, lon:2},
    "Glasgow": { lat:55, lon:2},
    "Guatemala City": { lat:14, lon:2},
    "Guayaquil": { lat:-2, lon:2},
    "Hamburg": { lat:53, lon:2},
    "Hammerfest": { lat:70, lon:2},
    "Havana": { lat:23, lon:2},
    "Helsinki": { lat:60, lon:2},
    "Hobart": { lat:-42, lon:2},
    "Hong Kong": { lat:22, lon:2},
    "Iquique": { lat:-20, lon:2},
    "Irkutsk": { lat:52, lon:2},
    "Jakarta": { lat:-6, lon:2  },
    "Johannesburg Africa": { lat:-26, lon:2},
    "Kingston": { lat:17, lon:2},
    "Kinshasa": { lat:-4, lon:2},
    "Kuala Lumpur": { lat:3, lon:2},
    "La Paz": { lat:-16, lon:2},
    "Leeds": { lat:53, lon:2},
    "Lima": { lat:-12, lon:2},
    "Lisbon": { lat:38, lon:2},
    "Liverpool": { lat:53, lon:2},
    "London": { lat:51, lon:2},
    "Lyons": { lat:45, lon:2},
    "Madrid": { lat:40, lon:2},
    "Manchester": { lat:53, lon:2},
    "Manila": { lat:14, lon:2},
    "Marseilles": { lat:43, lon:2},
    "Mazatlán": { lat:23, lon:2},
    "Mecca Arabia": { lat:21, lon:2},
    "Melbourne": { lat:-37, lon:2},
    "Mexico City": { lat:19, lon:2},
    "Milan": { lat:45, lon:2},
    "Montevideo": { lat:-34, lon:2},
    "Moscow": { lat:55, lon:2},
    "Munich": { lat:48, lon:2},
    "Nagasaki": { lat:32, lon:2},
    "Nagoya": { lat:35, lon:2},
    "Nairobi": { lat:-1, lon:2},
    "Nanjing (Nanking)": { lat:32, lon:2},
    "Naples": { lat:40, lon:2},
    "New Delhi": { lat:28, lon:2},
    "Newcastle-on-Tyne": { lat:54, lon:2},
    "Odessa": { lat:46, lon:2},
    "Osaka": { lat:34, lon:2},
    "Oslo": { lat:59, lon:2},
    "Panama City": { lat:8, lon:2},
    "Paramaribo": { lat:5, lon:2},
    "Paris": { lat:48, lon:2},
    "Perth": { lat:-31, lon:2},
    "Plymouth": { lat:50, lon:2},
    "Port Moresby New Guinea": { lat:-9, lon:2},
    "Prague Republic": { lat:50, lon:2},
    "Rangoon": { lat:16, lon:2},
    "Reykjavík": { lat:64, lon:2},
    "Rio de Janeiro": { lat:-22, lon:2},
    "Rome": { lat:41, lon:2},
    "Salvador": { lat:-12, lon:2},
    "Santiago": { lat:-33, lon:2},
    "St. Petersburg": { lat:59, lon:2},
    "São Paulo": { lat:-23, lon:2},
    "Shanghai": { lat:31, lon:2},
    "Singapore": { lat:1, lon:2},
    "Sofia": { lat:42, lon:2},
    "Stockholm": { lat:59, lon:2},
    "Sydney": { lat:-34, lon:2},
    "Tananarive": { lat:-18, lon:2},
    "Teheran": { lat:35, lon:2},
    "Tokyo": { lat:35, lon:2},
    "Tripoli": { lat:32, lon:2},
    "Venice": { lat:45, lon:2},
    "Veracruz": { lat:19, lon:2},
    "Vienna": { lat:48, lon:2},
    "Vladivostok": { lat:43, lon:2},
    "Warsaw": { lat:52, lon:2},
    "Wellington Zealand": { lat:-41, lon:2},
    "Zürich": { lat:47, lon:2}
}

const part ="hourly"

function getIcon(code) {
    return `http://openweathermap.org/img/wn/${code}@2x.png`
}

function kelvinToF(k) {
    return 1.8 * (k - 273) + 32.0;
}

function makeCity(cityName){
	const div =$("<div class='col s12'>");
	const name =$("<h5 class='city'>");
	name.text(cityName);
	div.append(name);

	return div;
}

function makeDayCard(day) {
    const div = $("<div class= 'col s2 card'>")
    const top = $("<h5>");

	div.append(top);
	const time = moment(day.dt*1000).format("MM/DD/YYYY");
    top.text(time) // like "Date Mon Jan 19 1970 02:15:28 GMT-0700 (Mountain Standard Time)"

    const icon = $("<img>");
    icon.attr("src", getIcon(day.weather[0].icon));
    top.append(icon);

    const temp = $("<div>");
    temp.text("Temp: " + kelvinToF(day.temp.day).toFixed(2) + "F");
    div.append(temp);

    const humidity = $("<div>");
    humidity.text("Humidity: " + day.humidity + "%");
    div.append(humidity);


    return div;
}

function cityClicked(event) {
	const cityName = $(event.target).text()
	const city = cities[cityName];
	if (city) {
		request(city.lat, city.lon);
		$("#dailyForecast").text(cityName + " " + moment().format("MM/DD/YYYY"))
	} else {
		$("#dailyForecast").text(`city ${cityName} does not exist.`);
	}
}

function updateCityList() {
	$("#cityList").empty();
	const match =$("#citySearch").val().toLowerCase();

	for (var cityName in cities) {
		let addIt = true;
		if (match.length > 0) {
			if(!cityName.toLowerCase().includes(match)) {
				addIt = false;
			}
		}
		if (addIt){
			const element = makeCity(cityName);
			$("#cityList").append(element);
		}
	}
	$(".city").click(cityClicked);
}

function request(lat, lon) {
    
    
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${openWeatherMapKey}`
    
    $.get(url, function( data ) {
        // handle response
        console.log(data);

        const daily = data.daily
        const today = daily[0];
        $("#temp").text( kelvinToF(today.temp.day).toFixed(2) + "F"); 
        $("#humidity").text(today.humidity + "%"); 
        $("#wind").text(today.wind_speed + " MPH"); 
		$("#uvIndex").text(today.uvi); 
		
		$("#dailyIcon").attr("src", getIcon(today.weather[0].icon))

		$("#fiveDay").empty();
		for (let i = 0; i < 5; i++) {
			const dayCard = makeDayCard(daily[i+1]);
			$("#fiveDay").append(dayCard);
		}
    })
    
}

$(document).ready(function() {
	$("#citySearch").keyup(updateCityList);

	updateCityList();
})
