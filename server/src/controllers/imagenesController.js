const { Imagenes } = require('../config/bd');

// VER IMAGENES POR PRODUCTO
const viewImagenes = async (id) => {
    try{
        const listImagen = await Imagenes.findAll( { where: { idProducto: id} } )
        return [...listImagen]
    } catch (error){
        return error.message
    }
}

// AÑADIR IMAGEN A PRODUCTO
const createImagen = async (idProducto, url) => {
    try{
        const newImagen = await Imagenes.create({
            url : url,
            idProducto : idProducto
        })
        return newImagen
    } catch (error){
        return error.message
    }
}


//BORRAR IMGEN DE PRODUCTO
const deleteImagen = async (id) => {
    const data = await Imagenes.findAll({ where: { id: id } })
    if (data.length === 0) {
        throw new Error(`El ID de la Imagen no existe ${id}`);
    }
    else {
        const delImagen = await Imagenes.destroy({ where: { id: id } })
    }
}

module.exports = {
    viewImagenes,
    createImagen,
    deleteImagen
}