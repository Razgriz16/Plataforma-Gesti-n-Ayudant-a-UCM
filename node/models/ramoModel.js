//importa la conexion
import db from "../database/db.js";
//importa sequalize
import { DataTypes } from "sequelize";

const ramoModel = db.define(
  "ramo",
  {
    id_ramo: { type: DataTypes.STRING, primaryKey: true },
    id_carrera: { type: DataTypes.INTEGER },
    id_periodo: { type: DataTypes.INTEGER },
    nombre_ramo: { type: DataTypes.STRING },
    horas_ayudantia_ramo: { type: DataTypes.INTEGER },
    semestre_ramo: { type: DataTypes.INTEGER },
    seccion_ramo: { type: DataTypes.INTEGER },
    precod_ramo: { type: DataTypes.STRING },
    ayudantia_ramo: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true, // Evita que Sequelize pluralice el nombre de la tabla
    timestamps: false,
  }
);
export default ramoModel;
