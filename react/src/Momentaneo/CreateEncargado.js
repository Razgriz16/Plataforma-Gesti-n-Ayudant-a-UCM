import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/admin/encargado/'

const CompCreateEncargado = () => {
    const [rut_evaluador, setRut_evaluador] = useState('')
    const [id_facultad, setId_facultad] = useState('')
    const [id_rol, setId_rol] = useState('')
    const [nombre_evaluador, setNombre_evaluador] = useState('')
    const [apellido1_evaluador, setApellido1_evaluador] = useState('')
    const [apellido2_evaluador, setApellido2_evaluador] = useState('')
    const [contraseña_evaluador, setContraseña_evaluador] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault() //evitar submit formulario
        await axios.post(URI, {
            rut_evaluador: rut_evaluador, id_facultad: id_facultad, id_rol: id_rol, nombre_evaluador: nombre_evaluador, apellido1_evaluador: apellido1_evaluador, apellido2_evaluador: apellido2_evaluador, contraseña_evaluador: contraseña_evaluador
        })
        navigate('/admin/encargado')
    }


    return (
        <div className='form-container'>
            <div className='form'>
                <h2>Cree el nuevo Encargado</h2>
                <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Rut</label>
                        <input
                            value={rut_evaluador}
                            onChange={(e) => setRut_evaluador(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>ID Facultad</label>
                        <input
                            value={id_facultad}
                            onChange={(e) => setId_facultad(e.target.value)}
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
                        <label className='form-label'>Nombre</label>
                        <input
                            value={nombre_evaluador}
                            onChange={(e) => setNombre_evaluador(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Apellido Paterno</label>
                        <input
                            value={apellido1_evaluador}
                            onChange={(e) => setApellido1_evaluador(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Apellido Materno</label>
                        <input
                            value={apellido2_evaluador}
                            onChange={(e) => setApellido2_evaluador(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Contraseña</label>
                        <input
                            value={contraseña_evaluador}
                            onChange={(e) => setContraseña_evaluador(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <button type='submit' className='btn btn-primary'>store</button>
                </form>
            </div>
        </div>

    )
}

export default CompCreateEncargado