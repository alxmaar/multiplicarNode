const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description: "Base de la tabla",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: false,
    default: false,
    description: "Listar las tablas",
  })
  .option("h", {
    alias: "limite",
    type: "number",
    demandOption: false,
    default: 10,
    description: "Limite de la tabla",
  })
  .check((argv, options) => {
    console.log(isNaN(argv.base));
    if (isNaN(argv.base)) {
      throw new Error("La base debe ser un numero");
    } else {
      return true;
    }
  }).argv;

  module.exports = {
    argv,
  }