import React from 'react';
import './admin.css';
import Navbar from '../../Componentes/Navbar';
import Foooter from '../../Componentes/Footer';
import CompShowFacultad from '../../Momentaneo/ShowFacultad';

import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-o1L02cB2ErDPi8U+pMa6mmn+8b6sd3OI0CFrdj2IP1V8CA35GkhqrtrtBucg2gjG"
  crossorigin="anonymous"
/>


function Estd() {
    return (
        <div className="tabla-estudiantes">
            <Navbar/>
            <p className="text-center" style={{ fontSize: '25px', padding: '10px' }}>Bienvenido, Admin. Administre los datos.</p>

            <div className="container" style={{ marginBottom: '80px' }}>
                <h1>Tabla Facultad</h1>
                <CompShowFacultad></CompShowFacultad>
            </div>

            <Foooter />
        </div>
        
    );
}

export default Estd;
