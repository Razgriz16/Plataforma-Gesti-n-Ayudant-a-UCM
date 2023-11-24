import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const URI = 'http://localhost:8000/admin/ramo/';

const CompShowRamo = () => {
  const [ramos, setRamos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Página actual
  const ramosPerPage = 10; // Cantidad de ramos por página

  useEffect(() => {
    getRamos();
  }, []);

  const getRamos = async () => {
    const res = await axios.get(URI);
    setRamos(res.data);
  };

  const deleteRamo = async (id_ramo) => {
    await axios.delete(`${URI}${id_ramo}`);
    getRamos();
  };

  // Calcular el índice de inicio y fin de la página actual
  const indexOfLastRamo = (currentPage + 1) * ramosPerPage;
  const indexOfFirstRamo = indexOfLastRamo - ramosPerPage;
  const currentRamos = ramos.slice(indexOfFirstRamo, indexOfLastRamo);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Link to={`/admin/crear_ramo`} className='btn btn-primary mb-3'>
            Crear
          </Link>
          <table className='table table-striped'>
            <thead className='table-primary'>
              <tr>
                <th>ID Ramo</th>
                <th>ID Carrera</th>
                <th>ID Periodo</th>
                <th>Nombre</th>
                <th>Horas Ayudantia</th>
                <th>Semestre</th>
                <th>Seccion</th>
                <th>Precodigo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentRamos.map((ramo) => (
                <tr key={ramo.id_ramo}>
                  <td>{ramo.id_ramo}</td>
                  <td>{ramo.id_carrera}</td>
                  <td>{ramo.id_periodo}</td>
                  <td>{ramo.nombre_ramo}</td>
                  <td>{ramo.horas_ayudantia_ramo}</td>
                  <td>{ramo.semestre_ramo}</td>
                  <td>{ramo.seccion_ramo}</td>
                  <td>{ramo.precod_ramo}</td>
                  <td>
                    <Link to={`/admin/editar_ramo/${ramo.id_ramo}`} className='btn btn-primary btn-sm me-2'>
                      Editar
                    </Link>
                    <button onClick={() => deleteRamo(ramo.id_ramo)} className='btn btn-danger btn-sm'>
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
            pageCount={Math.ceil(ramos.length / ramosPerPage)}
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

export default CompShowRamo;
