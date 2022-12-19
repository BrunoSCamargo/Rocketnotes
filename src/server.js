//importar o express
const express = require('express');

const routes = require("./routes");

//inicializar o express
const app = express();
app.use(express.json());

app.use(routes);

// uma constante com o numero da porta "endereço" que a API vai ficar observando 
const PORT = 3333;
app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));