import net from 'net';
import { exec } from 'child_process';

const server = net.createServer((connection) => {
  console.log('Un cliente se ha conectado.');

  let resultado_comando;

  const timer = setTimeout(() => {
    connection.on('data', (comando) => {
      const mensaje_json = JSON.parse(comando.toString());
      resultado_comando = exec(mensaje_json.mensaje).stdout;
      const mensaje = {'tipo': 'respuesta', 'resultado': resultado_comando};
      connection.write(JSON.stringify(mensaje));
      connection.end();
    });
  }, 500);

  connection.on('end', () => {
    clearTimeout(timer);
  });

  connection.on('close', () => {
    console.log('Un cliente se ha desconectado.');
  });
});

server.listen(60300, () => {
  console.log('Esperando a que se conecten clientes.');
});