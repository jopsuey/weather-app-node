//Consumo de API rest con Axios y promesas

const axios = require('axios');

const getLatitudLongitude = async (loc) => {

    //codifica parametros de url. en caso de espacios en blancos etc.
    const encodedUrl = encodeURI(loc);

    //crea instancia con axios con url y api key en header
    const instance = axios.create({
        baseURL: `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${encodedUrl}`,
        //timeout: 1000,
        headers: {'x-rapidapi-key': 'c62ca2d172msh8fc410f42fa59d3p18b658jsnebcf1b5ab8c4'}
    });

    //ejecuta promesa
    const resp = await instance.get();

    if( resp.data.location.length === 0 ){
        throw new Error(`No hay resultados para ${ loc }`)
    }

    const { lat, lon, name  } = resp.data.location;

    // const location = resp.data.location.name;
    // const lat = resp.data.location.lat;
    // const lon = resp.data.location.lon;

    // instance.get().then((res) => {
    //     console.log(res.data.location);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });

    return { 
        name,       
        lat,
        lon
    }
}

module.exports = {
    getLatitudLongitude
}