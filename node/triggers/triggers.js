import mysql from 'mysql'

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'mydb',
    user: 'root',
    password: 'admin'

});

conexion.connect(function(error){
    if(error){
        throw error;
        }else{
            console.log('conexion exitosa');
        }
});

const trigger_estudiantes = 
`
CREATE TRIGGER trigger_estudiantes_mayus_iniciales
BEFORE INSERT ON estudiante
FOR EACH ROW
BEGIN

SET NEW.nombres_estudiante = initcap(NEW.nombres_estudiante);

END;
`;

const trigger_ai_id_detalle_estudiante_ramo = `
  CREATE TRIGGER trigger_ai_detalle_estudiante_ramo
  BEFORE INSERT ON detalle_estudiante_ramo
  FOR EACH ROW
  BEGIN
    SET NEW.id_detalle_estudiante_ramo = COALESCE((SELECT MAX(id_detalle_estudiante_ramo) FROM detalle_estudiante_ramo), 0) + 1;
  END;
`;



const borrarLaWea = 
'DROP TRIGGER trigger_estudiantes_mayus_iniciales;';
//trigger_estudiantes

conexion.query(createTriggerQuery, 
    function(err){
  if (err) {
    console.error('Error al crear el trigger:', err);
  } else {
    console.log('Trigger con éxito');
  }

});

conexion.end();


