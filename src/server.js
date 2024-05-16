// O servidor serve a aplicação que está em app.js

const app = require("./app");
const port = process.env.PORT // 3000;

// método para o servidor escutar na porta configurada

app.listen(port, () => {

    console.log(`Servidor está conectado na porta ${port}`);
});