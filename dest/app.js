"use strict";
var _a;
(_a = document.querySelector('button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', addWeatherData);
function addWeatherData(e) {
    let input = document.querySelector("input");
    const weather = new Weather(input.value);
    const ui = new UI();
    if (input.value != "") {
        weather.getWeather()
            .then(data => {
            console.log(data);
            ui.insertData(data);
            input.value = '';
        })
            .catch(error => {
            console.log(error);
        });
    }
    else {
        alert("Scrivi qualcosa!");
    }
    e.preventDefault();
}
