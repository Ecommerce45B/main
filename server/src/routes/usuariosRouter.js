const { Router } = require('express')
const { 
  getUsuariosHandler,
  getUsuariosByIdHandler,
  getUsuariosByEmailHandler,
  postNewUsuarioHandler,
  changeUsuarioHandler,
  deleteUsuarioHandler,
  getUsuariosByNombreHandler,
} = require('../handlers/usuariosHandler')

const usuariosRouter = Router()

usuariosRouter.get("/"             , getUsuariosHandler)
usuariosRouter.get("/:id"          , getUsuariosByIdHandler)
usuariosRouter.get('/name/:nombre' , getUsuariosByNombreHandler);
usuariosRouter.get('/email/:email' , getUsuariosByEmailHandler);
usuariosRouter.post("/new"         , postNewUsuarioHandler)
usuariosRouter.put("/change/ "     , changeUsuarioHandler)
usuariosRouter.delete("/delete/"   , deleteUsuarioHandler)

module.exports = usuariosRouter