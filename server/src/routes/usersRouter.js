const { Router } = require("express");
const {
  getUsuariosHandler,
  getUsuariosByIdHandler,
  getUsuariosByNombreHandler,
  getUsuariosByEmailHandler,
  postNewUsuarioHandler,
  changeUsuarioHandler,
  deleteUsuarioHandler,
  enviarMensajeHandler,
  enviarNotificacionHandler,
} = require("../handlers/usersHandler");

const usersRouter = Router();

usersRouter.get("/", getUsuariosHandler);
usersRouter.get("/:id", getUsuariosByIdHandler);
usersRouter.get("/nombre/:nombre", getUsuariosByNombreHandler);
usersRouter.get("/email/:email", getUsuariosByEmailHandler);
usersRouter.post("/new", postNewUsuarioHandler);
usersRouter.put("/change/:id", changeUsuarioHandler);
usersRouter.delete("/delete/", deleteUsuarioHandler);
usersRouter.post("/enviar-mensaje", enviarMensajeHandler);
usersRouter.post("/enviar-notificacion", enviarNotificacionHandler);

module.exports = usersRouter;
