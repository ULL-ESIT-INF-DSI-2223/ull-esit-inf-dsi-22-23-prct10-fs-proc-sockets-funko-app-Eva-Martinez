[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/NApXvVde)

### Informe realizado por Eva Martínez Bencomo

En este informe se redactan las pautas seguidas para la realización de la práctica 9 de la asignatura *Desarrollo de Sistemas Informáticos*.

# Actividades Previas

En primer lugar se procedió a la aceptación de la tarea en el *GitHub Classroom*, seguida de la lectura de la información a cerca de la clase *EventEmitter* del módulo **Events**, del módulo *fs* pero con su **API asíncrona**, del módulo *child_process* y del módulo *net*. Por otra parte como se muestra a continuación nos encontramos con tres *badges* los cuales representan el éxito los **Tests** realizados, la herramienta **Coveralls** y **Sonar-Cloud**.

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct10-fs-proc-sockets-funko-app-Eva-Martinez/actions/workflows/tests.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct10-fs-proc-sockets-funko-app-Eva-Martinez/actions/workflows/tests.yml)
[![Coveralls](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct10-fs-proc-sockets-funko-app-Eva-Martinez/actions/workflows/coveralls.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct10-fs-proc-sockets-funko-app-Eva-Martinez/actions/workflows/coveralls.yml)
[![Sonar-Cloud](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct10-fs-proc-sockets-funko-app-Eva-Martinez/actions/workflows/sonarcloud.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct10-fs-proc-sockets-funko-app-Eva-Martinez/actions/workflows/sonarcloud.yml)

# Ejercicios

## Ejercicio 1

Con respecto a este ejercicio se ejecute el programa para así comprender su funcionalidad, la cual es observar un archivo insertado por el usuario através de la línea de comando. Si el usuario no insertan un tercer parámetro, que corresponde con el archivo, imprime por pantalla `Please, specify a file`; si el fichero insertado no existe imprime `File ${filename} does not exist` donde *filename* corresponde con el valor insertado por el usuario; y por último si existe el fichero se muestra el mensaje `Starting to watch file ${filename}` seguido de la observación de dicho fichero y la impresión del mensaje `File ${filename} is no longer watched` a pesar de que se sigue observando el mismo. Esto se debe a que si se modifica el fichero imprimirá `File ${filename} has been modified somehow` a pesar de indicar previamente que el fichero no se observa más. Para finalizar este ejercicio se procederá a responder las preguntas planteadas:

- ¿Qué hace la función `access`? $\rightarrow$ Esta función se usa para comprobar los permisos de un archivo en específico, en este caso comprueba si un fichero existe en el directorio actual. Para ello posee tres parámetros, el primero es el fichero el cual comprobar si existe, a constinuación está el parámetro **modo** que es un entero opcional que especifica las comprobaciones de accesibilidad que se realizarán, y por último un *callback*, que es una función de devolución de llamada que se invoca con un posible argumento de error, es decir, si no existe el fichero pasado este retornará un objeto **Error**. 
- ¿Para qué sirve el objeto `constants`? $\rightarrow$ Este objeto es un objeto constante del módulo *fs*, específicamente es un módulo de definición constante de uso común, en este caso se utiliza para la obtención de la constante `F_OK` cuyo valor es utilizado para la comprobación de la existencia del fichero insertado por el usuario: `const constants.F_OK = 0;`

## Ejercicio 2

Se ha realizado el mismo con la creación de una aplicación donde el usuario inserta por comando el fichero que desea analizar y la opcion de la cual mostrar el número de la misma:

- lineas: Muestra el número de líneas.
- palabras: Muestra el número de palabras.
- caracteres: Muestra el número de caracteres.
- lineas&palabras: Muestra el número de líneas y de palabras.
- lineas&caracteres: Muestra el número de líneas y de caracteres.
- palabras&caracteres: Muestra el número de palabras y de caracteres.
- lineas&palabras&caracteres: Muestra el número de líneas, de palabras y de caracteres.

Para ello se programó el comando *count* con las dos opciones indicadas y se creacron dos funciones, *OpcionCorrecta(opcion)*, la cual comprueba que el usuario haya insertado la opcion correcta, y *ObtencionNumero(ruta, opcion)*, la cual indica la ruta del archivo que se analizará y obtendran la opción insertada por el usuario.

## Conclusión

Debido a la falta de tiempo no se pudieron realizar pruebas ni el ejercicio 3, pero a pesar de ello se programaron las github actions. 

