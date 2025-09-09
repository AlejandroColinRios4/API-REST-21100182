const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const cors = require('cors');
const router = express.Router();
const morgan = require('morgan')
const port = 3000;
const cliente = require('./router/cliente')
const proveedores = require('./router/cliente')
 

app.use(express.json());
app.use(cors());

//Middleware Morgan para guardar logs en archivo
//var accessLogStream = fs.createWriteStream(__dirname + 'access.log',{flags: 'a'})
//app.use(morgan('combined',{stream: accessLogStream}))

//Middleware morgan logs en consola
app.use(morgan('combined'));

//Middleware
app.use((req, res, next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
})

app.use('/Clientes',cliente);
app.use('/proveedores',proveedores);

app.get('/comprobar', (req, res) => {
  res.send('API ACTIVADA');
});



app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
