import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

const FormularioEstudiante = () => {
  const [nombreEstudiante, setNombreEstudiante] = useState('');
  const [rutEstudiante, setRutEstudiante] = useState('');
  const [carreraEstudiante, setCarreraEstudiante] = useState('');
  const [SeleccionarRamo, setSeleccionarRamo] = useState('');
  const [promedioRamo, setPromedioRamo] = useState('');
  const [ramos, setRamos] = useState([]);
  // Define los estados para idRamo, idPeriodo y horasSolicitudAyudantia
  const [idRamo, setIdRamo] = useState('');
  const [idPeriodo, setIdPeriodo] = useState('');
  const [horasSolicitudAyudantia, setHorasSolicitudAyudantia] = useState('');

  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/estudiante2/${username}`)
      .then((response) => {
        const data = response.data;
        console.log(response.data);
        setNombreEstudiante(data.estudiante.nombres_estudiante);
        setRutEstudiante(data.estudiante.rut_estudiante);
        setCarreraEstudiante(data.ramos[0].id_carrera);
        setRamos(data.ramos);
        setPromedioRamo(data.ramos[0].detalle_estudiante_ramos[0].nota_ramo);
      })
      .catch((error) => {
        console.error('Error al obtener los datos del servidor:', error);
      });
  }, []);

  const handleSelectChange = (selectedRamo) => {
    const selectedRamoData = ramos.find(ramo => ramo.nombre_ramo === selectedRamo);

    if (selectedRamoData) {
      // Obtén los valores de idRamo, idPeriodo y horasSolicitudAyudantia
      const idRamo = selectedRamoData.id_ramo;
      const idPeriodo = selectedRamoData.id_periodo;
      const horasSolicitudAyudantia = selectedRamoData.horas_ayudantia_ramo;

      setPromedioRamo(selectedRamoData.detalle_estudiante_ramos[0].nota_ramo);

      // Actualiza los estados
      setSeleccionarRamo(selectedRamo);
      setIdRamo(idRamo);
      setIdPeriodo(idPeriodo);
      setHorasSolicitudAyudantia(horasSolicitudAyudantia);
      
    } else {
      setPromedioRamo('');
      setIdRamo('');
      setIdPeriodo('');
      setHorasSolicitudAyudantia('');
      
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construye el objeto con los datos del formulario para enviar al backend
    const postData = {
      id_postulacion: username + Math.random() * 6612,
      rut_estudiante: rutEstudiante,
      ramo_seleccionado: SeleccionarRamo,
      promedio_ramo: promedioRamo,
      id_ramo: idRamo, // Utiliza el valor obtenido del ramo seleccionado
      id_periodo: idPeriodo, // Utiliza el valor obtenido del ramo seleccionado
      horas_solicitud_ayudantia: horasSolicitudAyudantia, // Utiliza el valor obtenido del ramo seleccionado
      // Agrega otras propiedades necesarias del formulario
    };

    axios.post(`http://localhost:8000/Estudiante2/${username}`, postData)
      .then((response) => {
        console.log(response.data);
        // Puedes manejar la respuesta del backend aquí, por ejemplo, mostrar un mensaje de éxito
        // Si el backend devuelve un mensaje de éxito, puedes redirigir al usuario a una página de confirmación o hacer lo que desees.
      })
      .catch((error) => {
        console.error('Error al crear la postulación:', error);
        // Puedes manejar errores aquí, como mostrar un mensaje de error
      });
      navigate('/estudiante/');
  };

  return (
    <div className="container">
      <h1>Postulación</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombreEstudiante}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rut">Rut</label>
          <input
            type="text"
            className="form-control"
            id="rut"
            value={rutEstudiante}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="carreraEstudiante">Carrera del Estudiante</label>
          <input
            type="text"
            className="form-control"
            id="carreraEstudiante"
            value={carreraEstudiante}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="carrera">Asignatura</label>
          <select
            className="form-control"
            id="carrera"
            value={SeleccionarRamo}
            onChange={(e) => handleSelectChange(e.target.value)}
          >
            <option value="">Asignaturas disponibles para Ayudantia</option>
            {ramos.map((ramo, index) => (
              <option key={index} value={ramo.nombre_ramo}>
                {ramo.nombre_ramo}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="promedioRamo">Promedio de Ramo</label>
          <input
            type="text"
            className="form-control"
            id="promedioRamo"
            value={promedioRamo}
            readOnly
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      
      
    </div>
  );
};

export default FormularioEstudiante;
