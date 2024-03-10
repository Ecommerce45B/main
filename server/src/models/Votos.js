const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('Votos', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idUsuario:{ 
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idProducto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        voto: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comentario: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}
