import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/admin/admin/'

const CompCreateAdmin = () => {
    const [rut_administrador, setRut_administrador] = useState('')
    const [id_rol, setId_rol] = useState('')
    const [correo_administrador, setCorreo_administrador] = useState('')
    const [contraseña_administrador, setContraseña_administrador] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault() //evitar submit formulario
        await axios.post(URI, {
            rut_administrador: rut_administrador, id_rol: id_rol, correo_administrador: correo_administrador, contraseña_administrador: contraseña_administrador
        })
        navigate('/admin/admin')
    }


    return (
        <div className='form-container'>
            <div className='form'>
                <h2>Cree el nuevo Admin</h2>
                <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Rut</label>
                        <input
                            value={rut_administrador}
                            onChange={(e) => setRut_administrador(e.target.value)}
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
                        <label className='form-label'>Correo</label>
                        <input
                            value={correo_administrador}
                            onChange={(e) => setCorreo_administrador(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Contraseña</label>
                        <input
                            value={contraseña_administrador}
                            onChange={(e) => setContraseña_administrador(e.target.value)}
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

export default CompCreateAdmin