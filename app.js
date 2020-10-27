const place = require('./place/place');
const weather = require('./weather/weather');

//importacion de paquete Yargs --lectura de argumentos desde consola
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        des: 'Direccion de la ciudad',
        demand: true
    }
}).argv;


// place.getLatitudLongitude(argv.direccion)
// .then( console.log );

// weather.getWeather(35, 139)
//     .then( console.log )
//     .catch(console.log);
 
// place.getLatitudLongitude(argv.direccion)
// .then( console.log );


const getInfo = async (location) => {
    try {
        const coordinates = await place.getLatitudLongitude(location);
        const temperature = await weather.getWeather(coordinates.lat, coordinates.lon);

        return `El clima en ${coordinates.name} es de ${temperature}`;
    } catch (error) {
        return `Error al determinar el clima de ${ location }`;
    }       
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
