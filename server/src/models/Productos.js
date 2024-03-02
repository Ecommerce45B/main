const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Productos = sequelize.define("Productos", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    especificaciones: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    nroserie: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    nromac: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    minimo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    preferencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    idCategoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idMarca: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idFabricante: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Productos;
};
