import express from "express";
import { v4 as uuidv4 } from 'uuid'; // Importa la función v4 de uuid para generar UUIDs
const router = express.Router();
import patients from "../data/patientsData.js";


// Obtener todos los pacientes
router.get("/", (req, res) => {
  res.json(patients);
});

// Obtener un paciente por su ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const patient = patients.find((p) => p.id === id);
  if (!patient) {
    return res.status(404).json({ message: "Paciente no encontrado" });
  }
  res.json(patient);
});

// Crear un nuevo paciente
router.post("/", (req, res) => {
  const { name, age, typedni, dni, address, city, phone } = req.body;
  const newPatient = { id: uuidv4(), name, age, typedni, dni, address, city, phone }; // Utiliza uuidv4() para generar un UUID
  patients.push(newPatient);
  res.status(201).json(newPatient);
});

// Actualizar un paciente existente por su ID
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { name, age, typedni, dni, address, city, phone} = req.body;
  const patientIndex = patients.findIndex((p) => p.id === id);
  if (patientIndex === -1) {
    return res.status(404).json({ message: "Paciente no encontrado" });
  }
  patients[patientIndex] = { id, name, age, typedni, dni, address, city, phone }; // Mantén el mismo ID al actualizar
  res.json(patients[patientIndex]);
});

// Eliminar un paciente por su ID
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const patientIndex = patients.findIndex((p) => p.id === id);
  if (patientIndex === -1) {
    return res.status(404).json({ message: "Paciente no encontrado" });
  }
  patients.splice(patientIndex, 1);
  res.json({ message: "Paciente eliminado satisfactoriamente" });
});



export default router;
