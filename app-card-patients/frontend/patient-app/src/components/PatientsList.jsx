
import React, { useState, useEffect } from 'react';
import PatientCard from './PatientCard';
import './PatientsList.css';

function PatientsList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/patients')
      .then(response => response.json())
      .then(data => setPatients(data))
      .catch(error => console.error('Error fetching patients:', error));
  }, []);


  const deletePatient = async (id) => {
    try {
      await fetch(`http://localhost:3000/patients/${id}`, { method: 'DELETE' });
      setPatients(patients.filter(patient => patient.id !== id));
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  const editPatient = async (id) => {
    // Aquí puedes implementar la lógica para editar un paciente
    console.log(`Editar paciente con ID ${id}`);
  };


  return (
    <div className="patients-list">
      {patients.map(patient => (
        <PatientCard 
        key={patient.id} 
        patient={patient}   
        onDelete={deletePatient}
        onEdit={editPatient}/>
      ))}
    </div>
  );
}

export default PatientsList;
