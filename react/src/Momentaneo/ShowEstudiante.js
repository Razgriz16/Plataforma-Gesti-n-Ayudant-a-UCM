import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from './Axios.js';
import { Link } from 'react-router-dom';


const URI = 'http://localhost:8000/admin/estudiante/';

const CompShowEstudiante = () => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [currentPage, setCurrentPage] = useState(0); // Página actual
    const studentsPerPage = 10; // Cantidad de estudiantes por página

    useEffect(() => {
        getEstudiantes();
    }, []);

    // PROCEDIMIENTO PARA MOSTRAR LOS ESTUDIANTES
    const getEstudiantes = async () => {
        const res = await axios.get(URI);
        setEstudiantes(res.data);
    };

    // PROCEDIMIENTO PARA BORRAR ESTUDIANTES
    const deleteEstudiante = async (rut_estudiante) => {
        await axios.delete(`/estudiante/${rut_estudiante}`);
        getEstudiantes();
    };

    // Calcular el índice de inicio y fin de la página actual
    const indexOfLastStudent = (currentPage + 1) * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = estudiantes.slice(indexOfFirstStudent, indexOfLastStudent);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to={`/admin/crear_estudiante`} class='btn btn-primary mb-3'>
                        Crear
                    </Link>
                    <table className='table table-striped'>
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
                                <th>Gestionar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentStudents.map((estudiante) => (
                                <tr key={estudiante.rut_estudiante}>
                                    <td>{estudiante.rut_estudiante}</td>
                                    <td>{estudiante.id_carrera}</td>
                                    <td>{estudiante.id_rol}</td>
                                    <td>{estudiante.id_periodo}</td>
                                    <td>{estudiante.nombres_estudiante}</td>
                                    <td>{estudiante.apellido1_estudiante}</td>
                                    <td>{estudiante.apellido2_estudiante}</td>
                                    <td>{estudiante.correo_institucional_estudiante}</td>
                                    <td>{estudiante.contraseña_estudiante}</td>
                                    <td>{estudiante.ppa_estudiante}</td>
                                    <td>{estudiante.año_ingreso_estudiante}</td>
                                    <td>
                                        <Link
                                            to={`/admin/editar_estudiante/${estudiante.rut_estudiante}`}
                                            class="btn btn-primary"
                                        >
                                            Editar
                                        </Link>
                                        <button
                                            onClick={() => deleteEstudiante(estudiante.rut_estudiante)}
                                            class="btn btn-danger"
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
                        pageCount={Math.ceil(estudiantes.length / studentsPerPage)}
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

export default CompShowEstudiante;
