import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/admin/carrera/'

const CompCreateCarrera = () => {
    const [id_carrera, setId_carrera] = useState('')
    const [id_facultad, setId_facultad] = useState('')
    const [id_periodo, setId_periodo] = useState('')
    const [nombre_carrera, setNombre_carrera] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault() //evitar submit formulario
        await axios.post(URI, {
            id_carrera: id_carrera, id_facultad: id_facultad, id_periodo: id_periodo, nombre_carrera: nombre_carrera
        })
        navigate('/admin/carrera')
    }


    return (
        <div className='form-container'>
            <div className='form'>
                <h2>Cree el nuevo carrera</h2>
                <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Id</label>
                        <input
                            value={id_carrera}
                            onChange={(e) => setId_carrera(e.target.value)}
                            type='text'
                            className='form-contfacultad'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>ID Facultad</label>
                        <input
                            value={id_facultad}
                            onChange={(e) => setId_facultad(e.target.value)}
                            type='text'
                            className='form-contfacultad'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>ID Periodo</label>
                        <input
                            value={id_periodo}
                            onChange={(e) => setId_periodo(e.target.value)}
                            type='text'
                            className='form-contfacultad'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input
                            value={nombre_carrera}
                            onChange={(e) => setNombre_carrera(e.target.value)}
                            type='text'
                            className='form-contfacultad'
                        />
                    </div>
                    <button type='submit' className='btn btn-primary'>store</button>
                </form>
            </div>
        </div>

    )
}

export default CompCreateCarrera