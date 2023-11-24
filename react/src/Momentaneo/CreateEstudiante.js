import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Forms.css'

const URI = 'http://localhost:8000/admin/estudiante/'

const CompCreateEstudiante = () => {
    const [rut_estudiante, setRut_estudiante] = useState('')
    const [id_carrera, setId_carrera] = useState('')
    const [id_rol, setId_rol] = useState('')
    const [id_periodo, setId_periodo] = useState('')
    const [nombres_estudiante, setNombres_estudiante] = useState('')
    const [apellido1_estudiante, setApellido1_estudiante] = useState('')
    const [apellido2_estudiante, setApellido2_estudiante] = useState('')
    const [correo_institucional_estudiante, setCorreo_institucional_estudiante] = useState('')
    const [contraseña_estudiante, setContraseña_estudiante] = useState('')
    const [ppa_estudiante, setPpa_estudiante] = useState('')
    const [año_ingreso_estudiante, setAño_ingreso_estudiante] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault() //evitar submit formulario
        await axios.post(URI, { rut_estudiante: rut_estudiante, id_carrera: id_carrera, id_rol: id_rol, id_periodo: id_periodo, nombres_estudiante: nombres_estudiante, apellido1_estudiante: apellido1_estudiante, apellido2_estudiante: apellido2_estudiante, correo_institucional_estudiante: correo_institucional_estudiante, contraseña_estudiante: contraseña_estudiante, ppa_estudiante: ppa_estudiante, año_ingreso_estudiante: año_ingreso_estudiante })
        navigate('/admin/estudiante')
    }


    return (
        <div className='form-container'>
            <div className='form'>
                <h2>Cree el nuevo estudiante</h2>
                <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Rut</label>
                        <input
                            value={rut_estudiante}
                            onChange={(e) => setRut_estudiante(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>ID Carrera</label>
                        <input
                            value={id_carrera}
                            onChange={(e) => setId_carrera(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>ID Rol</label>
                        <input
                            value={id_rol}
                            onChange={(e) => setId_rol(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>ID Periodo</label>
                        <input
                            value={id_periodo}
                            onChange={(e) => setId_periodo(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Nombres</label>
                        <input
                            value={nombres_estudiante}
                            onChange={(e) => setNombres_estudiante(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Apellido Paterno</label>
                        <input
                            value={apellido1_estudiante}
                            onChange={(e) => setApellido1_estudiante(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Apellido Materno</label>
                        <input
                            value={apellido2_estudiante}
                            onChange={(e) => setApellido2_estudiante(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Correo Institucional</label>
                        <input
                            value={correo_institucional_estudiante}
                            onChange={(e) => setCorreo_institucional_estudiante(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Contraseña</label>
                        <input
                            value={contraseña_estudiante}
                            onChange={(e) => setContraseña_estudiante(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>PPA</label>
                        <input
                            value={ppa_estudiante}
                            onChange={(e) => setPpa_estudiante(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Año Ingreso</label>
                        <input
                            value={año_ingreso_estudiante}
                            onChange={(e) => setAño_ingreso_estudiante(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <button type='submit' className='btn btn-primary'>Guardar</button>
                </form>
            </div>
        </div>

    )
}

export default CompCreateEstudiante