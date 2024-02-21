// PatientCard.jsx
import './PatientCard.css'; 
import React, { useState, useEffect } from 'react';
function PatientCard({ patient, onDelete, onEdit }) {
  const handleEdit = () => {
    if (onEdit) {
      onEdit(patient.id);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(patient.id);
    }
  };

  return (
    <div className="patient-card" onClick={handleEdit}>
      <h2>{patient.name}</h2>
      <p><strong>Edad:</strong> {patient.age}</p>
      <p><strong>DNI:</strong> {patient.typedni} {patient.dni}</p>
      <p><strong>Dirección:</strong> {patient.address}, {patient.city}</p>
      <p><strong>Teléfono:</strong> {patient.phone}</p>
      <button onClick={(e) => { e.stopPropagation(); handleDelete(); }}>Eliminar</button>
    </div>
  );
}

export default PatientCard;