import axios from 'axios'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const URI = 'http://localhost:8000/admin/carrera/'

const CompEditCarrera = () =>{
    const [id_carrera, setId_carrera] = useState('')
    const [id_facultad, setId_facultad] = useState('')
    const [id_periodo, setId_periodo] = useState('')
    const [nombre_carrera, setNombre_carrera] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar

    const update = async (e) => {
        e.preventDefault() //evitar submit formulario
        await axios.put(URI+id,{
            id_carrera:id_carrera, id_facultad:id_facultad, id_periodo:id_periodo, nombre_carrera:nombre_carrera
        })
            navigate('/admin/carrera')
    } 
    useEffect( ()=>{
        getCarreraById()
    },[])

    const getCarreraById = async () => {
        const res = await axios.get(URI+id)
        setId_carrera(res.data.id_carrera)
        setId_facultad(res.data.id_facultad)
        setId_periodo(res.data.id_periodo)
        setNombre_carrera(res.data.nombre_carrera)
    }
    return (
        <div className='form-container'>
            <div className='form'>
            <h2>Edita al carrera</h2> 
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Id</label>
                    <input
                        value={id_carrera}
                        onChange={(e)=> setId_carrera(e.target.value)}
                        type='text'
                        className='form-contfacultad'  
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>ID Facultad</label>
                    <input
                        value={id_facultad}
                        onChange={(e)=> setId_facultad(e.target.value)}
                        type='text'
                        className='form-contfacultad'  
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>ID Periodo</label>
                    <input
                        value={id_periodo}
                        onChange={(e)=> setId_periodo(e.target.value)}
                        type='text'
                        className='form-contfacultad'  
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={nombre_carrera}
                        onChange={(e)=> setNombre_carrera(e.target.value)}
                        type='text'
                        className='form-contfacultad'  
                    />
                </div>
                
                <button type='submit' className='btn btn-primary'>update</button>
            </form>
        </div>
</div>
    )
}

export default CompEditCarrera