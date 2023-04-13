import net from 'net';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const client = net.connect({port: 60300});

let respuestaRecibida = '';
client.on('data', (dataChunk) => {
  respuestaRecibida += dataChunk;
});

client.on('end', () => {
  const mensaje = JSON.parse(respuestaRecibida);
  if (mensaje.tipo === 'respuesta') {
    console.log(`${mensaje.resultado}`);
  } else {
    console.log(`El tipo de mensaje ${mensaje.tipo} no es válido`);
  }
});

yargs(hideBin(process.argv))
  .command('command', 'Ejecución de un comando', {
    comando: {
      description: 'Comando',
      type: 'string',
      demandOption: true
    }
  }, (argv) => {
    const mensaje_comando = {'tipo': 'envio', 'mensaje': argv.comando};
    client.write(JSON.stringify(mensaje_comando));
  })
  .help()
  .argv;