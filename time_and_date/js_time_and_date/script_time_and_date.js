// Probar new Date(). Tiene varios métodos que nos ayudará a obtener lo que necesitamos:
//   - Hora, minutos y segundos
//   - Día, mes y año
// Sintaxis de MDN: new Date(year, monthIndex, day, hours, minutes, seconds)
// setInterval para que se actualice cada segundo (1000ms).



const timeDateArea = document.getElementById('timeDate');
const timeArea = document.getElementById('timeArea');
const dateArea = document.getElementById('dateArea');
const sentenceArea = document.getElementById('sentenceArea');

// Función para actualizar la hora cada segundo.

function updateTimeDate () {
    setInterval(() => {
        
        const today = new Date();

        let year  = today.getFullYear(),
        month     = today.getMonth() + 1,
        day       = today.getUTCDay(),
        hour      = today.getHours(),
        minute    = today.getMinutes(),
        second    = today.getSeconds()
        
    // Condicionales para las frases según la hora del día
        hour < 7 ?                 sentenceArea.textContent = 'Es hora de descansar. Apaga y sigue mañana.' : null
        hour >= 7  && hour < 12 ?  sentenceArea.textContent = 'Buenos días, desayuna fuerte y a darle al código.' : null
        hour >= 12 && hour < 14 ?  sentenceArea.textContent = 'Echa un rato más pero no olvides comer.' : null
        hour >= 14 && hour < 16 ?  sentenceArea.textContent = 'Espero que estés comiendo o hayas comido.' : null
        hour >= 16 && hour < 18 ?  sentenceArea.textContent = 'Buenas tardes, el último empujón.' : null
        hour >= 18 && hour < 22 ?  sentenceArea.textContent = 'Esto ya son horas extras, ... piensa en parar pronto.' : null
        hour >= 22 && hour <= 23 ? sentenceArea.textContent = 'Buenas noches, es hora de pensar en parar y descansar.' : null

    // Condicionales para poner un 0 delante si el número es menor que 10
        hour < 10 ? hour     = '0' + today.getHours() : null
        minute < 10 ? minute = '0' + today.getMinutes() : null
        second < 10 ? second = '0' + today.getSeconds() : null
        day < 10 ? day       = '0' + today.getUTCDay() : null
        month < 10 ? month   = '0' + today.getUTCMonth() +1 : null

    const timeTogether = `${hour}:${minute}:${second}`;
    const dateTogether = `${day}/${month}/${year}`;

    timeArea.innerHTML = timeTogether;
    dateArea.innerHTML = dateTogether;

},1000)
};

updateTimeDate();

