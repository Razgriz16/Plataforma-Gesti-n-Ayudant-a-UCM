import express from "express";
import { crearPostulacionEstudiante, obtenerEstudiantePorReq, obtenerResultados} from "../controllers/estudiante2Controller.js";
import validateToken from "./validate-token.js";
const router = express.Router() 

//router.get('/',validateToken, obtenerEstudiantes)
router.get('/:rut_estudiante', obtenerEstudiantePorReq)
router.post('/:rut_estudiante', crearPostulacionEstudiante)
router.get('/:rut_estudiante/resultado', obtenerResultados);



export default router