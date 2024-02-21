import express from 'express';
import createError from 'http-errors';
import path from 'path';

import patientRoutes from './patient.js';


// Crear una instancia del enrutador de Express
const router = express.Router();
router.use(express.json());

// Rutas de pacientes
router.use('/patients', patientRoutes);

// Definir una ruta para el índice
router.get('/', (req, res) => {
  res.send('¡Bienvenido al índice de prueba!');
});



router.get('/error', function(req, res, next) {
    // Genera un error para demostración
    next(createError(500, 'Este es un error de demostración'));
});

// Exportar el enrutador para que pueda ser utilizado por otros módulos
export default router;
