const { Marcas } = require('../config/bd');

// CREAR MARCA
const createMarcas = async (nombre, descripcion) => {
    try{
        const newMarca = await Marcas.create({
            nombre,
            descripcion
        })
        return newMarca
    } catch (error){
        return error.message
    }
}

//ACTUALIZAR MARCA
const updateMarcas = async (idMarca, nombre, descripcion) => {
    try {
        const existingMarca= await Marcas.findByPk(idMarca);

        if(!existingMarca) {
            throw new Error ('Marca inexistente')
        }

        const upMarca = await Marcas.update({ nombre: nombre, descripcion: descripcion }, { where: { id: idMarca } });
        return upMarca
    } catch(error) {
        return error.message
    }
}

//BORRAR MARCA
const deleteMarcas = async (id, sw) => {
    //si sw es true se borra el registro de la tabla, si es false se desactiva el registro y no se elimina
    const data = await Marcas.findAll({ where: { id: id } })
    if (data.length === 0) {
        throw new Error(`El ID de la Marca no existe ${id}`);
    }
    else {
        if (sw === 'true') {
            const Marcas = await Marcas.destroy({ where: { id: id } })
        }
        else {
            const Marcas = await Marcas.update({ estado: sw }, { where: { id: id } })
        }
    }
}

module.exports = {
    createMarcas,
    updateMarcas,
    deleteMarcas
}