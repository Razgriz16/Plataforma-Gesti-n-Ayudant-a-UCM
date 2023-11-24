import React, { useState, useEffect } from "react";
import axios from "../../Momentaneo/Axios.js";
import "./index.css";

const CompShowEstudianteEncargado = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const username = localStorage.getItem("username");
  // const [aprobado_rechazo, setAprobadoRechazo] = useState(''); // Cambié el nombre de la constante
  // Función para obtener la lista de estudiantes
  const getEstudiantes = async () => {
    try {
      const res = await axios.get(`/encargado2/${username}`);
      if (Array.isArray(res.data)) {
        setEstudiantes(res.data);
        console.log(res.data);
      } else {
        console.error(res.data);
      }
    } catch (error) {
      console.error("Error al obtener estudiantes:", error);
    }
  };

  // Función para manejar el envío de datos
  const handlePostData = (postulacionId, periodoId, aprobadoRechazoValue) => {
    // setAprobadoRechazo(aprobadoRechazoValue); // Actualizar el valor de aprobado_rechazo

    const postData = {
      id_resultados: username + Math.random(),
      id_postulacion: postulacionId,
      id_periodo: periodoId,
      respuesta: aprobadoRechazoValue,
    };

    // Realizar la solicitud POST para guardar la información
    axios
      .post(`http://localhost:8000/Encargado2/${username}`, postData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al guardar postulación", error);
      });
  };

  // Usar useEffect para obtener la lista de estudiantes cuando cambia el nombre de usuario
  useEffect(() => {
    getEstudiantes();
  }, [username]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Rut</th>
                <th>Nombres</th>
                <th>Apellido</th>
                <th>Carrera</th>
                <th>Ramo</th>
                <th>PPA</th>
                <th>Gestionar</th>
              </tr>
            </thead>
            <tbody>
              {estudiantes.map((estudiante) => (
                <tr key={estudiante.rut_estudiante}>
                  <td>{estudiante.rut_estudiante}</td>
                  <td>{estudiante.nombres_estudiante}</td>
                  <td>{estudiante.apellido1_estudiante}</td>
                  <td>{estudiante.id_carrera}</td>
                  <td>{estudiante.postulaciones[0].id_ramo}</td>
                  <td>{estudiante.ppa_estudiante}</td>
                  <td className="contenedor-boton">
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        handlePostData(
                          estudiante.postulaciones[0].id_postulacion,
                          estudiante.postulaciones[0].id_periodo,
                          "aprobado" // Establecer "Aprobado"
                        )
                      }
                    >
                      Aceptar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        handlePostData(
                          estudiante.postulaciones[0].id_postulacion,
                          estudiante.postulaciones[0].id_periodo,
                          "rechazado" // Establecer "Rechazado"
                        )
                      }
                    >
                      Rechazar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompShowEstudianteEncargado;