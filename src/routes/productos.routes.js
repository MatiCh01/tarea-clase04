const {Router} = require('express');
const rutaProductos = Router();

rutaProductos.get('/productos', (req,res) => {
    res.send([]);
})

modules.exports = rutaProductos;