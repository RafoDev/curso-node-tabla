const { crearArchivo } = require('./helpers/multiplicar');
const { b, l, h } = require('./config/yargs');

console.clear();
crearArchivo(b, l, h)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err));

