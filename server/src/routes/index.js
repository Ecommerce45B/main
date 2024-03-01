const { Router }        = require("express");
const productsRouter    = require('./productsRouter');
const categoryRouter    = require('./categoryRouter');
const marcasRouter      = require('./marcasRouter');
const fabricantesRouter = require('./fabricantesRouter');
const imagenesRouter    = require('./imagenesRouter');
const votosRouter       = require('./votosRouter');
const usuariosRouter    = require('./usuariosRouter');
// const Pasarela          = require('./Pasarela')

const router = Router();

router.use('/productos'    , productsRouter);
router.use('/categorias'   , categoryRouter);
router.use('/marcas'       , marcasRouter);
router.use('/fabricantes'  , fabricantesRouter);
router.use('/imagenes'     , imagenesRouter);
router.use('/votos'        , votosRouter);
router.use('/usuarios'     , usuariosRouter);
// router.use('/'  , Pasarela)                       /* http://localhost:3001/CreateOrder/ */
// router.use('/'  , Pasarela)                 /* http://localhost:3001/Succes/ */
// router.use('/'  , Pasarela)                  /* http://localhost:3001/Webhook/ */

module.exports = router;