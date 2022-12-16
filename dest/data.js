"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Weather {
    constructor(city) {
        this.city = city;
        this.apiKey = "792db72a2cd98b5238c8611733df4eeb";
    }
    getWeather() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&lang=it`);
                if (response.ok) {
                    const data = yield response.json();
                    console.log(response.status);
                    return data;
                }
                else {
                    alert("La città inserita non è stata trovata!");
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    changeCity(city) {
        this.city = city;
    }
}
