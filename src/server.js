require("express-async-errors");

const AppError = require("./utils/AppError");
//importar o express
const express = require("express");

const routes = require("./routes");

//inicializar o express
const app = express();
app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {
  //Erro do lado do Cliente
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  //Erro do lado do Servidor
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

// uma constante com o numero da porta "endereço" que a API vai ficar observando
const PORT = 3333;
app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));
