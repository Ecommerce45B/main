const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Productos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
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
    imagen: {
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
      defaultValue: true
    },
    idCategoria:{
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Categorias', 
        key: 'id'
      }
    },
    idMarca:{
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Marcas', 
        key: 'id'
      }
    },
    idFabricante:{
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Fabricantes', 
        key: 'id'
      }
    },
  });

};