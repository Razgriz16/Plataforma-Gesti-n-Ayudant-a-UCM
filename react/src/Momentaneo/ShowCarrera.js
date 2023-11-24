import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const URI = 'http://localhost:8000/admin/carrera/';

const CompShowCarrera = () => {
  const [carreras, setCarreras] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Página actual
  const carrerasPerPage = 10; // Cantidad de carreras por página

  useEffect(() => {
    getCarreras();
  }, []);

  const getCarreras = async () => {
    const res = await axios.get(URI);
    setCarreras(res.data);
  };

  const deleteCarrera = async (id_carrera) => {
    await axios.delete(`${URI}${id_carrera}`);
    getCarreras();
  };

  // Calcular el índice de inicio y fin de la página actual
  const indexOfLastCarrera = (currentPage + 1) * carrerasPerPage;
  const indexOfFirstCarrera = indexOfLastCarrera - carrerasPerPage;
  const currentCarreras = carreras.slice(indexOfFirstCarrera, indexOfLastCarrera);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Link to={`/admin/crear_carrera`} className='btn btn-primary mb-3'>
            Crear
          </Link>
          <table className='table table-striped'>
            <thead className='table-primary'>
              <tr>
                <th>ID</th>
                <th>ID Facultad</th>
                <th>ID Periodo</th>
                <th>Nombre</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentCarreras.map((carrera) => (
                <tr key={carrera.id_carrera}>
                  <td>{carrera.id_carrera}</td>
                  <td>{carrera.id_facultad}</td>
                  <td>{carrera.id_periodo}</td>
                  <td>{carrera.nombre_carrera}</td>
                  <td>
                    <Link
                      to={`/admin/editar_carrera/${carrera.id_carrera}`}
                      className='btn btn-primary btn-sm me-2'
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteCarrera(carrera.id_carrera)}
                      className='btn btn-danger btn-sm'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <ReactPaginate
            previousLabel={'Anterior'}
            nextLabel={'Siguiente'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={Math.ceil(carreras.length / carrerasPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={({ selected }) => setCurrentPage(selected)}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      </div>
    </div>
  );
};

export default CompShowCarrera;
