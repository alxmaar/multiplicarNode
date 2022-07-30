const { boolean } = require("yargs");
const { CrearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs").argv;
 
console.clear();

console.log("base: yargs", argv.base);
CrearArchivo(argv.b, argv.l, argv.h)
  .then((archivo) => console.log(`Archivo Creado: ${archivo}`))
  .catch((err) => console.log(err));
