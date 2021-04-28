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