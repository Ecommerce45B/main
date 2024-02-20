const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('Marcas', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        descripcion: {
            type: DataTypes.STRING(200),
            allowNull: false,
            unique: true
        },
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        }
    })
}