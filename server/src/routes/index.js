const { Router }        = require("express");
const productsRouter    = require('./productsRouter');
const categoryRouter    = require('./categoryRouter');
const marcasRouter      = require('./marcasRouter');
const fabricantesRouter = require('./fabricantesRouter');
const imagenesRouter    = require('./imagenesRouter');
const votosRouter       = require('./votosRouter');

const router = Router();

router.use('/productos'  , productsRouter);
router.use('/categorias' , categoryRouter);
router.use('/marcas'     , marcasRouter);
router.use('/fabricantes', fabricantesRouter);
router.use('/imagenes'   , imagenesRouter);
router.use('/votes'      , votosRouter);

module.exports = router;