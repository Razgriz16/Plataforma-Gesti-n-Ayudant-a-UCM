import React from "react";
import "./estudiante.css";
import Navbar from "../../Componentes/Navbar";
import Footer from "../../Componentes/Footer";
import axios from 'axios'
import {useState, useEffect} from 'react'


const URI = 'http://localhost:8000/estudiante/'

const VistaEstudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([])
  useEffect( ()=>{
      getEstudiantes()
  },[])
  //PROCEDIMIENTO PARA MOSTRAR LOS ESTUDIANTES
  const getEstudiantes = async () =>{
      const res = await axios.get(URI)
      setEstudiantes(res.data)
  }
return (
    <>
      <Navbar />
      <div className="vista-estudiantes">
        <div className="contenido">
          {
            <p style={{ fontSize: "25px", textAlign: "center" }}>
              {" "}
              Bienvenido estudiante
            </p>
          }
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Rut</th>
                                <th>ID Carrera</th>
                                <th>ID Rol</th>
                                <th>ID Periodo</th>
                                <th>Nombres</th>
                                <th>Apellido Paterno</th>
                                <th>Apellido Materno</th>
                                <th>Correo Institucional</th>
                                <th>Contraseña</th>
                                <th>PPA</th>
                                <th>Año Ingreso</th>
                            </tr>
                        </thead>
                        <tbody>
                            { estudiantes.map ( (estudiante) => (
                                <tr key={ estudiante.rut_estudiante}>
                                    <td> { estudiante.rut_estudiante}</td>
                                    <td> { estudiante.id_carrera } </td>
                                    <td> { estudiante.id_rol } </td>
                                    <td> { estudiante.id_periodo } </td>
                                    <td> { estudiante.nombres_estudiante } </td>
                                    <td> { estudiante.apellido1_estudiante } </td>
                                    <td> { estudiante.apellido2_estudiante } </td>
                                    <td> { estudiante.correo_institucional_estudiante } </td>
                                    <td> { estudiante.contraseña_estudiante } </td>
                                    <td> { estudiante.ppa_estudiante } </td>
                                    <td> { estudiante.año_ingreso_estudiante } </td>
                                    
                                   
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>


        <Footer />
      </div>
    </>
  );
}

export default VistaEstudiantes;
