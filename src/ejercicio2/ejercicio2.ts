// Imports yargs
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
// Import exit
import { exit } from 'process';
import { constants, access } from 'fs';
import { spawn } from 'child_process';

// Funciones
/**
 * Función para saber si la opción insertada por el usuario es correcta.
 * @param opcion Opción insertada por el usuario.
 * @returns Verdadero o falso en función de si la opción es verdadera.
 */
function OpcionCorrecta(opcion: string): boolean {
  if (opcion === ("lineas" || "palabras" || "caracteres" || "lineas&palabras" || "lineas&caracteres" || "palabras&caracteres" || "lineas&palabras&caracteres")) {
    return true;
  } else {
    return false;
  }
}

/**
 * Función para obtener el número de líneas, palabras y/o caracteres.
 * @param ruta Ruta del fichero a analizar.
 * @param opcion Opcion insertada por el usuario.
 * @returns Número de lineas, palabras y/o caracteres en función de la opción del usuario.
 */
function ObtencionNumero(ruta: string, opcion: string) {
  const wc = spawn('wc', [ruta]); 
  let salidawc = '';
  wc.stdout.on('data', (piece) => salidawc += piece);
  wc.on('close', () => {
    const resultado = salidawc.split(/\s+/);
    if (opcion === "lineas") {
      return (resultado[1] + 1);
    } else if (opcion === "palabras") {
      return resultado[2];
    } else if (opcion === "caracteres") {
      return resultado[3];
    } else if (opcion === "lineas&palabras") {
      return (resultado[1] + 1 + resultado[2]);
    } else if (opcion === "lineas&caracteres") {
      return (resultado[1] + 1 + resultado[3]);
    } else if (opcion === "palabras&caracteres") {
      return (resultado[2] + resultado[3]);
    } else {
      return (resultado[1] + 1 + resultado[2] + resultado[3]);
    }
  });
}

// Comandos
/**
 * Commando `count` utilizado para contar el numero de lineas, palabras y/o caracteres de un fichero.
 */
yargs(hideBin(process.argv))
  .command('count', 'Cuenta el número de líneas, palabras y/o caracteres de un fichero de texto', {
    ruta: {
      description: 'Ruta en la que se encuentra el fichero',
      type: 'string',
      demandOption: true
    },
    opcion: {
      description: 'Opción que desea visualizar el usuario',
      type: 'string',
      demandOption: true
    }
  }, (argv) => {
    if (OpcionCorrecta(argv.opcion)) {
      access(argv.ruta, constants.F_OK, (err) => {
        if (err) {
          console.log(`El fichero ${argv.ruta} no existe.`)
          exit(0);
        } else {
          const resultado = ObtencionNumero(argv.ruta, argv.opcion);
          console.log(`El resultado del análisis del archivo ${argv.ruta} de la opcion ${argv.opcion} es ${resultado}`);
          exit(0);
        }
      });
    } else {
      console.log(`La opción ${argv.opcion} no es válida, pruebe de nuevo sabiendo lo siguiente:`)
      console.log("- Número de líneas: lineas\n- Número de palabras: palabras\n- Número de caracteres: caracteres")
      console.log("- Número de líneas y de palabras: lineas&palabras\n- Número de líneas y de caracteres: lineas&caracteres\n- Número de palabras y de caracteres: palabras&caracteres")
      exit(0);
    }
  })
  .help()
  .argv;