# HelloWorld_Express

## En este tutorial crearemos un servidor básico "Hola Mundo" con Node js y Express js

## Yo trabajaré sobre una máquina virtual de Ubuntu (Ubuntu 20.04.2 LTS), pero usted puede hacerlo desde el sistema operativo que prefiera.

## Es importante tener instalado Node js 

### Si aún no lo tiene instalado puedes hacer click sobre los siguientes links
### [Ubuntu](https://www.youtube.com/watch?v=kH_Ywehewiw)
### [Mac OS](https://www.youtube.com/watch?v=oxFPiYWItR0)
### [Windows10](https://www.youtube.com/watch?v=v0x1Ku5Tgac)

## A continuación se presentan los pasos que debe seguir para realizar este servidor.

1.- Crear una carpeta en su escritorio llamada "HolaMundo"

![](/img/cap1.png)

2.- Una vez dentro de su carpeta "HolaMundo" ejecutaremos el comando 
### npm init -y

Estos nos ayudará a inicializar el proyecto con npm, que es el administrador de paquetes de Node js
Luego de ejecutarlo se mostrará lo siguiente.

![](/img/cap2.png)

3.- Ahora toca instalar Express js como dependencia de desarrollo, esto se logra con el comando
### npm install express --save-dev

Si todo marcha bien estará visualizando lo siguiente.

![](/img/cap3.png)

4.- ¡Vamos al código! En su editor de código fuente preferido abrira el folder/carpeta "HolaMundo"

Notara que dentro de su carpeta se encuentran 2 archivos .json y una carpeta node_modules, esto se debe a los comandos que ingresamos anteriormente y es para que Node js y Express Js puedan funcionar

![](/img/cap4.png)

5.- Dentro de nuestra carpeta "HolaMundo" crearemos el archivo 
### server.js

![](/img/cap5.png)

6.- Ya creado nuestro server.js haremos uso de nuestra dependencia express y del siguiente código:

    const express = require("express")

    const app = express()

    //Esta función flecha nos indica que cuando se ingrese al puerto 3000
    // (sin ruta alguna) nos mandará una respuesta
    app.get("/", (req,res) => {
    res.end("Hola Mundo!")
    })

    app.listen(3000, () => {
    //Es importante llamar al método listen ya que
    //recibe el puerto donde el servidor debe comunicarse
    //La dirección a la cual debemos ingresar es: localhost:3000
    console.log("El servidor fue creado exitosamente");
    })

7.- Ahora, lo único que nos resta es correr el comando
### node server.js

Si en nuestra terminal vemos el mensaje "El servidor fue creado exitosamente"
Quiere decir que hicimos todo bien y podemos abrir la dirección localhost:3000 desde nuestro navegador preferido

![](/img/cap6.png)






