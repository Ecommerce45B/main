const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('CartProducts', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idCar: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      idUser: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      idProduct: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      cantidad:{
        type: DataTypes.INTEGER,
        allowNull: false
      }
    })
} 
