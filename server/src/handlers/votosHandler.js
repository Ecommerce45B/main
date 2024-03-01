const { 
    getVotoUsuarioId,
    getVotoProductosById,
    postNewVoto
} = require('../controllers/votosController');

const getVotosIdUsuarioHandler = async(req,res)=>{
    const {id} = req.params;
    console.log('req.params--> ', req.params);
    console.log("idUser--->", id);
    try {
        const response = await getVotoUsuarioId(id)
        res.status(200).json(response)
    }
    catch(error){
        console.log(error);
        res.status(400).send(`No se pudo recuperar información del voto del usuario con id--> ${id}`);
    }
}

const getVotoProductosHandler = async(req,res)=>{
    const {id} = req.params;
    try {
        const response = await getVotoProductosById(id)
        res.status(200).json(response)
    }
    catch(error){
        console.log(error);
        res.status(400).send(`No se pudo recuperar información del voto con id--> ${idProducto}`);
    }
}

const postNewVotosHandler = async(req,res)=>{
    const {idProducto, idUsuario, voto, comentario} = req.body;
    try{
        const newVoto = await postNewVoto(idProducto, idUsuario, voto, comentario)
        res.status(200).json(newVoto)
    }catch(error){
        console.log(error);
        res.status(400).send(`No se pudo crear el registro del voto`)
    }
}

module.exports = {
    getVotosIdUsuarioHandler,
    getVotoProductosHandler, 
    postNewVotosHandler,
}