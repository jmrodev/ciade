
// App.jsx
import React from 'react';
import PatientsList from './components/PatientsList.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Lista de Pacientes</h1>
      <PatientsList />
    </div>
  );
}

export default App;
