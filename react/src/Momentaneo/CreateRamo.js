import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/admin/ramo/'

const CompCreateRamo = () => {
    const [id_ramo, setId_ramo] = useState('')
    const [id_carrera, setId_carrera] = useState('')
    const [id_periodo, setId_periodo] = useState('')
    const [nombre_ramo, setNombre_ramo] = useState('')
    const [horas_ayudantia_ramo, setHoras_ayudantia_ramo] = useState('')
    const [semestre_ramo, setSemestre_ramo] = useState('')
    const [seccion_ramo, setSeccion_ramo] = useState('')
    const [precod_ramo, setPrecod_ramo] = useState('')
    const navigate = useNavigate()


    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault() //evitar submit formulario
        await axios.post(URI, {
            id_ramo: id_ramo, id_carrera: id_carrera, id_periodo: id_periodo, nombre_ramo: nombre_ramo, horas_ayudantia_ramo: horas_ayudantia_ramo, semestre_ramo: semestre_ramo, seccion_ramo: seccion_ramo, precod_ramo: precod_ramo
        })
        navigate('/admin/ramo')
    }


    return (
        <div className='form-container'>
            <div className='form'>
                <h2>Crear el nuevo ramo</h2>
                <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Id</label>
                        <input
                            value={id_ramo}
                            onChange={(e) => setId_ramo(e.target.value)}
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
                        <label className='form-label'>ID Periodo</label>
                        <input
                            value={id_periodo}
                            onChange={(e) => setId_periodo(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input
                            value={nombre_ramo}
                            onChange={(e) => setNombre_ramo(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'> Horas Ayudantia</label>
                        <input
                            value={horas_ayudantia_ramo}
                            onChange={(e) => setHoras_ayudantia_ramo(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Semestre</label>
                        <input
                            value={semestre_ramo}
                            onChange={(e) => setSemestre_ramo(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'> Seccion</label>
                        <input
                            value={seccion_ramo}
                            onChange={(e) => setSeccion_ramo(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Precodigo</label>
                        <input
                            value={precod_ramo}
                            onChange={(e) => setPrecod_ramo(e.target.value)}
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

export default CompCreateRamo