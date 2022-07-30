const fs = require("fs");
const colors = require("colors");
const CrearArchivo = (base, listar,h) => {
  let salida = "";
  for (let i = 1; i <=h; i++) {
    salida += `${base} x ${i} = ${base * i} \n`;
  }
  if (listar) {
    console.log(salida.america);
  }
  fs.writeFileSync(`./salida/tabla${base}.txt`, salida);
  const archivo = `tabla${base}.txt`;
  console.log(archivo);
  const promesa = new Promise((resolve, reject) => {
    if (archivo) {
      resolve(archivo);
    } else {
      reject(`Error al crear el archivo`);
    }
  });
  return promesa;
};

module.exports = {
  CrearArchivo,
};
