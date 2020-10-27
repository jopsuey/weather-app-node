//Consumo de API rest con Axios y promesas

const axios = require('axios');

const getWeather = async (lat, lon) => {

    const apiKey = '5aececc3be3c614e3bbba758d8fc5d52';

    //ejecuta promesa
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getWeather
}