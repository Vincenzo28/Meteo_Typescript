interface myApiData {
  name: string;
}

class Weather {
  city: string;
  apiKey: string;
  constructor(city: string) {
    this.city = city;
    this.apiKey = "792db72a2cd98b5238c8611733df4eeb";
  }
  async getWeather() {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&lang=it`
      );
      if (response.ok) {
        const data: myApiData = await response.json();
        console.log(response.status);
        return data;
      } else {
        alert("La città inserita non è stata trovata!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  changeCity(city: string) {
    this.city = city;
  }
}
