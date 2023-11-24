import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URI = 'http://localhost:8000/admin/facultad/'

const CompEditFacultad = () => {
    const [id_facultad, setId_facultad] = useState('')
    const [nombre_facultad, setNombre_facultad] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    //procedimiento para actualizar

    const update = async (e) => {
        e.preventDefault() //evitar submit formulario
        await axios.put(URI + id, {
            id_facultad: id_facultad, nombre_facultad: nombre_facultad
        })
        navigate('/admin/facultad')
    }
    useEffect(() => {
        getFacultadById()
    }, [])

    const getFacultadById = async () => {
        const res = await axios.get(URI + id)
        setId_facultad(res.data.id_facultad)
        setNombre_facultad(res.data.nombre_facultad)
    }
    return (
        <div className='form-container'>
            <div className='form'>
                <h2>Edita a facultad</h2>
                <form onSubmit={update}>
                    <div className='mb-3'>
                        <label className='form-label'>Id</label>
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

                    <button type='submit' className='btn btn-primary'>update</button>
                </form>
            </div>
        </div>

    )
}

export default CompEditFacultad