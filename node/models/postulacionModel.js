//importa la conexion
import db from "../database/db.js";
//importa sequalize
import { DataTypes } from "sequelize";

const postulacionModel = db.define("postulacion", {
    id_postulacion: { type: DataTypes.INTEGER, primaryKey: true },
    rut_estudiante: { type: DataTypes.INTEGER },
    id_ramo: { type: DataTypes.INTEGER },
    id_periodo: { type: DataTypes.INTEGER },
    estado_postulacion: { type: DataTypes.STRING },
    horas_solicitud_ayudantia: { type: DataTypes.INTEGER },
  },
  {
    freezeTableName: true, // Evita que Sequelize pluralice el nombre de la tabla
    timestamps: false,
  }
);

export default postulacionModel;
