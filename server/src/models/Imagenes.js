const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('Imagenes', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        url: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        idProducto:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
    })
}