const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('PedidoProducto', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idPedido: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idProducto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    })
}