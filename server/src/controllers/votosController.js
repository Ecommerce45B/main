require('dotenv').config();
const { USER, PASSWORD, HOST, PORT, BDD } = process.env
const { Sequelize } = require('sequelize');
const {Votos} = require('../config/bd')
const url=`http://localhost:3001/votes`;
const sequelize = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`, { logging: false, native: false }
)

const getVotoUsuarioId = async(idUsuario)=>{
    const votosDB = await Votos.findAll({
        where: { idUsuario: idUsuario }
    });
    return votosDB;
}

const getVotoProductosById = async(idProducto)=>{
    const votosDB = await Votos.findAll({
        attributes: ['comentario'],
        where: { idProducto: idProducto }
    });
    const promedio = await Votos.findAll({
        attributes: [[sequelize.fn('AVG', sequelize.col('voto')), 'promedio']],
        where: { idProducto: idProducto }
    });
    const count = await Votos.count({
        where: { idProducto: idProducto }
    });
    promedio.push({count: count})
    return promedio.concat(votosDB);
}

const postNewVoto = async(idProducto, idUsuario, voto, comentario)=>{
    const newVoto = await Votos.create(
        {idProducto, idUsuario, voto, comentario})
    const promedio = await Votos.findAll({
        attributes: [[sequelize.fn('AVG', sequelize.col('voto')), 'promedio']],
        where: { idProducto: idProducto }
    });
    const count = await Votos.count({
        where: { idProducto: idProducto }
    });
    promedio.push({count: count})
    return promedio.concat(newVoto);
}

module.exports = {
    getVotoUsuarioId,
    getVotoProductosById,
    postNewVoto
}