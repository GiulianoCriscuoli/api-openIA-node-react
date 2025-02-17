// O servidor serve a aplicação que está em app.js

const app  = require("./app");
const port = process.env.PORT || 3000;

// método para o servidor escutar na porta configurada

const cors = require("cors");

app.use(cors({
    origin: '*',  // In development, accept all origins
    methods: ['GET', 'POST', 'OPTIONS'],  // Add OPTIONS
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Handle preflight requests
app.options('*', cors());

app.listen(port, () => {
    console.log(`Servidor está conectado na porta ${port}`);
});