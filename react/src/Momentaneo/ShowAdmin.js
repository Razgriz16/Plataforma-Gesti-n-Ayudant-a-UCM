import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const URI = 'http://localhost:8000/admin/admin/';

const CompShowAdmin = () => {
  const [administradores, setAdministradores] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Página actual
  const administradoresPerPage = 10; // Cantidad de administradores por página

  useEffect(() => {
    getAdministradores();
  }, []);

  const getAdministradores = async () => {
    const res = await axios.get(URI);
    setAdministradores(res.data);
  };

  const deleteAdministrador = async (rut_administrador) => {
    await axios.delete(`${URI}${rut_administrador}`);
    getAdministradores();
  };

  // Calcular el índice de inicio y fin de la página actual
  const indexOfLastAdministrador = (currentPage + 1) * administradoresPerPage;
  const indexOfFirstAdministrador = indexOfLastAdministrador - administradoresPerPage;
  const currentAdministradores = administradores.slice(indexOfFirstAdministrador, indexOfLastAdministrador);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Link to={`/admin/crear_administrador`} className='btn btn-primary mb-3'>
            Crear
          </Link>
          <table className='table table-striped'>
            <thead className='table-primary'>
              <tr>
                <th>Rut</th>
                <th>ID Rol</th>
                <th>Correo</th>
                <th>Contraseña</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentAdministradores.map((administrador) => (
                <tr key={administrador.rut_administrador}>
                  <td>{administrador.rut_administrador}</td>
                  <td>{administrador.id_rol}</td>
                  <td>{administrador.correo_administrador}</td>
                  <td>{administrador.contraseña_administrador}</td>
                  <td>
                    <Link
                      to={`/admin/editar_administrador/${administrador.rut_administrador}`}
                      className='btn btn-primary btn-sm me-2'
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteAdministrador(administrador.rut_administrador)}
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
            pageCount={Math.ceil(administradores.length / administradoresPerPage)}
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

export default CompShowAdmin;
