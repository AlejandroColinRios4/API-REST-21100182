const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const port = 3000;
const cliente = require ('./router/cliente')
const provedoores = require ('./router/proveedores')


app.use(express.json());

//Middleware
app.use((req, res, next)=>{
    console.log(`[${new Date().toISOString()}]${req.method}${req.url}`);
    next();
})

app.use('/Clientes',cliente);
app.use('/provedores',provedoores);

app.get('/comprobar', (req, res) => {
  res.send('API ACTIVADA');
});



app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
