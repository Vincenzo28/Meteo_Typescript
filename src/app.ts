document.querySelector<HTMLButtonElement>('button')?.addEventListener('click', addWeatherData);

function addWeatherData(e: any) {
    let input = document.querySelector<HTMLInputElement>("input")
    const weather =  new Weather(input.value)
    const ui = new UI ();
    if (input.value != "") {
        weather.getWeather() 
    .then(data => { 
      console.log(data)
      ui.insertData(data)
      input.value = ''
      })
    .catch(error =>{
      console.log(error)
    })
    }else{
        alert("Scrivi qualcosa!")
        
    }
    e.preventDefault()
}