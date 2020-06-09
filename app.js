const { crearArchivo, listar } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv;
const colors = require('colors');

switch (argv._[0]) {
    case 'listar':
        listar(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
}