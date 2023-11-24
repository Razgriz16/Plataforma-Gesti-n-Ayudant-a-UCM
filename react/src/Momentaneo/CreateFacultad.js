import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/admin/facultad/'

const CompCreateFacultad = () => {
    const [id_facultad, setId_facultad] = useState('')
    const [nombre_facultad, setNombre_facultad] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault() //evitar submit formulario
        await axios.post(URI, {
            id_facultad: id_facultad, nombre_facultad: nombre_facultad
        })
        navigate('/admin/facultad')
    }


    return (
        <div className='form-container'>
            <div className='form'>
                <h2>Cree el nuevo facultad</h2>
                <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>ID</label>
                        <input
                            value={id_facultad}
                            onChange={(e) => setId_facultad(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input
                            value={nombre_facultad}
                            onChange={(e) => setNombre_facultad(e.target.value)}
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

export default CompCreateFacultad