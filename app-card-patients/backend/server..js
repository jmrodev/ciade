import { fileURLToPath } from "url";
import { dirname } from "path";
import express from "express";
import createError from "http-errors";
import path from "path";
import cors from "cors";
import indexRouter from "./routes/index.js";
import patientRoutes from "./routes/patient.js";
//import { __dirname } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);

// Configurar el resto de tu aplicación Express aquí

// Middleware para manejar errores 404
app.use(function(req, res, next) {
    next(createError(404));
});

// Middleware para manejar errores
app.use(function(err, req, res, next) {
    // Configurar el código de estado
    res.status(err.status || 500);

    // Verificar si el error es un error 500
    if (err.status === 500) {
        // Renderizar una página de error HTML específica para el error 500
        res.sendFile(path.join(__dirname, 'views', 'error500.html'));
    } else {
        // Renderizar una página de error HTML genérica para otros tipos de errores
        res.sendFile(path.join(__dirname, 'views', 'error.html'));
    }
});




const PORT = process.env.PORT || 3000; // Define el puerto en el que el servidor escuchará las solicitudes

app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});

export default app;
