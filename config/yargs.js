// *  Documentation for yargs
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        default: 1,
        describe: "Es la base de la tabla de multiplicar"                  
    })
    .option('u', {
        alias: 'until',
        type: 'number',
        default: 20,
        describe: "El número máximo hasta donde multiplica"
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: "muestra la tabla de multiplicar en consola"
    })
    .check( (argv, options) => {
        if( isNaN(argv.b) ){
            throw 'La base tiene que ser un número';
        }
        
        if( isNaN(argv.u) ){
            throw 'El número "hasta" debe ser un número';
        }
        
        return true;
    })
    .argv;

module.exports = argv;