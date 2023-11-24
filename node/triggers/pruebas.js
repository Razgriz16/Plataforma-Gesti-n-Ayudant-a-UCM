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









/*
const trigger_evaluador = //Juan Perez gutierrez
 CREATE TRIGGER trigger_evaluador_mayus_iniciales
 BEFORE INSERT ON evaluador
 FOR EACH ROW
 BEGIN

 SET NEW.nombre_evaluador = CONCAT(UPPER(SUBSTR((NEW.nombre_evaluador), 1, 1)), LOWER(SUBSTR((NEW.nombre_evaluador), 2)));
 SET NEW.apellido1_evaluador = CONCAT(UPPER(SUBSTR((NEW.apellido1_evaluador), 1, 1)), LOWER(SUBSTR((NEW.apellido1_evaluador), 2)));
 SET NEW.apellido2_evaluador = CONCAT(UPPER(SUBSTR((NEW.apellido2_evaluador), 1, 1)), LOWER(SUBSTR((NEW.apellido2_evaluador), 2)));

 END;
;
*/

/*
const trigger_estudiantes = 
`
 CREATE TRIGGER trigger_estudiantes_mayus_iniciales
 BEFORE INSERT ON estudiante
 FOR EACH ROW
 BEGIN

  SET NEW.nombres_estudiante = CONCAT(CONCAT(UPPER(SUBSTR(NEW.nombres_estudiante, 1, 1)), LOWER(SUBSTR(NEW.nombres_estudiante, 2, LOCATE(" ", NEW.nombres_estudiante)-1))), CONCAT(UPPER(SUBSTR(NEW.nombres_estudiante, LOCATE(" ", NEW.nombres_estudiante), 2)), LOWER(SUBSTR(NEW.nombres_estudiante, LOCATE(" ", NEW.nombres_estudiante)+2))));
  SET NEW.apellido1_estudiante = CONCAT(UPPER(SUBSTR((NEW.apellido1_estudiante), 1, 1)), LOWER(SUBSTR((NEW.apellido1_estudiante), 2)));
  SET NEW.apellido2_estudiante = CONCAT(UPPER(SUBSTR((NEW.apellido2_estudiante), 1, 1)), LOWER(SUBSTR((NEW.apellido2_estudiante), 2)));
  SET NEW.correo_institucional_estudiante = LOWER(NEW.correo_institucional_estudiante);

END;
`;
*/




const trigger_estudiantes = //juanPerezGutierrez
`
CREATE TRIGGER trigger_estudiantes_mayus_iniciales
BEFORE INSERT ON estudiante
FOR EACH ROW
BEGIN

SET NEW.nombres_estudiante = LOWER(NEW.nombres_estudiante);

WHILE LOCATE(" ", NEW.nombres_estudiante) > 0 DO


SET NEW.nombres_estudiante = CONCAT(concat(SUBSTR(NEW.nombres_estudiante, 1, LOCATE(" ", NEW.nombres_estudiante) - 1), " "), UPPER(SUBSTR(NEW.nombres_estudiante, LOCATE(" ", NEW.nombres_estudiante) + 1, 1)),SUBSTR(NEW.nombres_estudiante, LOCATE(" ", NEW.nombres_estudiante) + 2, LENGTH(NEW.nombres_estudiante) - LOCATE(" ", NEW.nombres_estudiante) - 1));

END WHILE;

END;
`
;

/*
CONCAT(
    SUBSTR("juan perez", 1, LOCATE(" ", "juan perez") - 1),
    UPPER(SUBSTR("juan perez", LOCATE(" ", "juan perez") + 1, 1)),
    SUBSTR("juan perez", LOCATE(" ", "juan perez") + 2, LENGTH("juan perez") - LOCATE(" ", "juan perez") - 1)
*/



const borrarLaWea = 
'DROP TRIGGER trigger_estudiantes_mayus_iniciales_prueba;';
//trigger_estudiantes

conexion.query(trigger_estudiantes, 

    function(err){
  if (err) {
    console.error('Error al crear el trigger:', err);
  } else {
    console.log('Trigger con éxito');
  }

});




conexion.end();