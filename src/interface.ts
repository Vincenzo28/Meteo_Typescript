class UI{
    degree: HTMLElement | null;
    city: HTMLElement | null;
    umidity: HTMLElement | null;
    description: HTMLElement | null;
    sunrise: HTMLElement | null;
    sunset: HTMLElement | null;
    constructor(){
        this.degree = document.getElementById('degree');
        this.city = document.getElementById('city');
        this.umidity = document.getElementById('umidity');
        this.description = document.getElementById('description');
        this.sunrise = document.getElementById('sunrise');
        this.sunset = document.getElementById('sunset');
    }

    insertData(data:any){
        this.umidity.textContent = `Umidità: ${data.main.humidity}%`
        this.degree.textContent = `${Math.round(data.main.temp - 273.15)}°`
        this.city.textContent = `${data.name}`
        this.description.textContent = `${data.weather[0].description}`
        this.sunrise.textContent = `Alba: ${new Date(data.sys.sunrise * 1000).getHours()}:${new Date(data.sys.sunrise * 1000).getMinutes()}`
        this.sunset.textContent = `Tramonto: ${new Date(data.sys.sunset * 1000).getHours()}:${new Date(data.sys.sunset * 1000).getMinutes()}`
    }

}