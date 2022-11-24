const express = require('express');
const app = express();
const port = 3030;
const path = require('path')

/* rutas */
app.get('/',(req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/login',(req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/registro',(req,res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));
app.get('/detalle',(req,res) => res.sendFile(path.join(__dirname, 'views','detalle-producto.html')));
app.get('/carrito',(req,res) => res.sendFile(path.join(__dirname,'views','carrito.html')));
app.get('*',(req,res) => res.sendFile(path.join(__dirname, 'views', '404.html')))


app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`))