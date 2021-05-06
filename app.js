//const { boolean } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log(argv);

// console.log('base: yargs', argv.base);

// obteniendo datos desde linea de  || destructuración
// const [,, arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// const base = [];

crearArchivo(argv.base, argv.list, argv.until)
    .then( response => console.log(response, 'creadito') )
    .catch( error => console.log(error) );

