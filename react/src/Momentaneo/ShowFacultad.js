import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const URI = 'http://localhost:8000/admin/facultad/';

const CompShowFacultad = () => {
  const [facultades, setFacultades] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Página actual
  const facultadesPerPage = 10; // Cantidad de facultades por página

  useEffect(() => {
    getFacultades();
  }, []);

  const getFacultades = async () => {
    const res = await axios.get(URI);
    setFacultades(res.data);
  };

  const deleteFacultad = async (id_facultad) => {
    await axios.delete(`${URI}${id_facultad}`);
    getFacultades();
  };

  // Calcular el índice de inicio y fin de la página actual
  const indexOfLastFacultad = (currentPage + 1) * facultadesPerPage;
  const indexOfFirstFacultad = indexOfLastFacultad - facultadesPerPage;
  const currentFacultades = facultades.slice(indexOfFirstFacultad, indexOfLastFacultad);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Link to={`/admin/crear_facultad`} className='btn btn-primary mb-3'>
            Crear
          </Link>
          <table className='table table-striped'>
            <thead className='table-primary'>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentFacultades.map((facultad) => (
                <tr key={facultad.id_facultad}>
                  <td>{facultad.id_facultad}</td>
                  <td>{facultad.nombre_facultad}</td>
                  <td>
                    <Link
                      to={`/admin/editar_facultad/${facultad.id_facultad}`}
                      className='btn btn-primary btn-sm me-2'
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteFacultad(facultad.id_facultad)}
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
            pageCount={Math.ceil(facultades.length / facultadesPerPage)}
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

export default CompShowFacultad;
