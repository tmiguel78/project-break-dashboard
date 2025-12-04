// URL de la API (Madrid) https://api.weatherapi.com/v1/forecast.json?key=f7719a92581b4893bf4110639250312&q=Madrid&days=1&aqi=no&alerts=no

// NECESITO: Ciudad: location.name
//          Pais: location.country
// El estado del clima. current.condition.text
//
// Imagen: current.condition.icon y 
// grados celsius (current.condition.temp_c) de nuestra ciudad.
// Precipitaciones (current.condition.precip_mm), 
// humedad (current.condition.humidity) y 
// viento km/h (current.condition.gust_kph)
// La previsión por horas en el día en el que estamos. Con su 
// hora forecast.forecastday[0].hour[i].time_epoch (o este ultimo: time)
// imagen:  forecast.forecastday[0].hour[i].condition.icon
// grados celsius: forecast.forecastday[0].hour[i].temp_c


const currentWeather  = document.getElementById('currentWeather');
const forecastWeather = document.getElementById('forecastWeather');

const getWeather = async () =>{
    try {
        const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=f7719a92581b4893bf4110639250312&q=Madrid&days=1&aqi=no&alerts=no')
        if(!response.ok) {
            throw new Error('Error en la petición' + response.status) 
        }
        const data = await response.json()
        return data
    } 
    catch (error) {
        console.log(error)
    }
};

// Datos tiempo actual

const template = (data) => {
   
    const   city            = data.location.name,
            country         = data.location.country,
            condition       = data.current.condition.text,
            imagen          = data.current.condition.icon,
            grados_celsius  = data.current.temp_c,
            precipitaciones = data.current.precip_mm,
            humedad         = data.current.humidity,
            viento          = data.current.gust_kph
    currentWeather.innerHTML = `
        <h2>${city}, ${country}</h2>
        <h2>${condition}</h2>
        <img src="${imagen}" alt="${condition}" id="imagen_actual"/>
        <p>${grados_celsius} <img src="../assets/termometro.png" alt="Termómetro" /></p>
        <ul>
            <li class="datos_secundarios">Precipitaciones: ${precipitaciones} mm</li>
            <li class="datos_secundarios">Humedad: ${humedad} %</li>
            <li class="datos_secundarios">Velocidad del viento: ${viento} km/h</li>
        </ul>
    `
    return data
};

// Datos de la previsión (hora, imagen, grados centigrados).

const templateForecast = (data) => {
       
    const arrForecast     = data.forecast.forecastday[0]
    const arrHoraForecast = data.forecast.forecastday[0].hour
    
    for (let hora of arrHoraForecast) {
        
        const horaForecast = hora.time.split(" ")[1]
        const imgForecast  = hora.condition.icon
        const tempForecast = hora.temp_c
        
        forecastWeather.innerHTML += `
        <li>
            <h3>${horaForecast}</h3>
            <img src="https:${imgForecast}" alt="Imagen predicción" />
            <p>${tempForecast}ºC</p>
        </li>
        `
    }   
};

getWeather().then(template).then(templateForecast)
