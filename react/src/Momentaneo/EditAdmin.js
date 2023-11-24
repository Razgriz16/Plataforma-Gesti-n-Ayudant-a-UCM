import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URI = 'http://localhost:8000/admin/admin/'

const CompEditAdmin = () => {
    const [rut_administrador, setRut_administrador] = useState('')
    const [id_rol, setId_rol] = useState('')
    const [correo_administrador, setCorreo_administrador] = useState('')
    const [contraseña_administrador, setContraseña_administrador] = useState('')
    const navigate = useNavigate()
    const { id_administrador } = useParams()

    //procedimiento para actualizar

    const update = async (e) => {
        e.preventDefault() //evitar submit formulario
        await axios.put(URI + id_administrador, {
            rut_administrador: rut_administrador, id_rol: id_rol, correo_administrador: correo_administrador, contraseña_administrador: contraseña_administrador
        })
        navigate('/admin/admin')
    }
    useEffect(() => {
        getAdministradorByRut()
    }, [])

    const getAdministradorByRut = async () => {
        const res = await axios.get(URI + id_administrador)
        setRut_administrador(res.data.rut_administrador)
        setId_rol(res.data.id_rol)
        setCorreo_administrador(res.data.correo_administrador)
        setContraseña_administrador(res.data.contraseña_administrador)

    }
    return (
        <div className='form-container'>
            <div className='form'>
                <h2>Edita al administrador</h2>
                <form onSubmit={update}>
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

                    <button type='submit' className='btn btn-primary'>update</button>
                </form>
            </div>
        </div>

    )
}

export default CompEditAdmin