const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 0, list = false, h = 12) => {
  try {
    if (list) {
      console.log('======================================'.rainbow);
      console.log('             Tabla del:', base);
      console.log('======================================'.rainbow);
    }

    let salida = '';

    for (let i = 1; i <= h; i++)
      salida += `${base} x ${i} = ${i * base}\n`;

    list && console.log(salida);

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return (`tabla-${base}.txt`);
  } catch (err) {
    throw err;
  }
}

module.exports = {
  crearArchivo
}