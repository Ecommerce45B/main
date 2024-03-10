const { DataTypes } = require("sequelize");

module.exports = (database) => {
    database.define('Fabricantes', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        descripcion: {
            type: DataTypes.STRING(500),
            allowNull: false,
            unique: true
        },
        logo:{
            type:  DataTypes.STRING(500)
        },
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        }
    })
}
