const express = require('express');
const rutaProductos = require('./routes/productos.routes');
const PORT = 8000;
const app = express();

app.use(express.json());

app.use("/productos", rutaProductos);

app.listen(PORT, () =>{
    console.log(`El servidor esta corriendo en el puerto: ${PORT}`)
})