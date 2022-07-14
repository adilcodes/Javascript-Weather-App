let weatherDetails = {
    apiKey: "5884d91e78e0f214cecf8396181e75f1",
    fetchData: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=metric&appid="
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayData(data))
        .catch(() => alert("Enter The Correct City Name"));
    },
    displayData: function(data){
        const {name} = data;
        const {description, icon} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerHTML = `Weather In ${name}`;
        document.querySelector(".temp").innerHTML = `${temp}°C`;
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").innerHTML = `Humidity: ${humidity}%`;
        document.querySelector(".speed").innerHTML = `Wind Speed: ${speed} km/h`;
        document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}@4x.png` 
    },
}

// By default Weather Results
weatherDetails.fetchData("Faisalabad");
// By default Weather Results

let searchBar = document.querySelector("#searchBar");
let searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", () => {
    weatherDetails.fetchData(searchBar.value);
});

searchBar.addEventListener("keyup", (event) => {
    if(event.key == "Enter"){
        weatherDetails.fetchData(searchBar.value);
    }
});