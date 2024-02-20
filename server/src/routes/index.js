const { Router }        = require("express");
const productsRouter    = require('./productsRouter');
const categoryRouter    = require('./categoryRouter');
const marcasRouter      = require('./marcasRouter');
const fabricantesRouter = require('./fabricantesRouter');

const router = Router();

router.use('/productos'  , productsRouter);
router.use('/categorias' , categoryRouter);
router.use('/marcas'     , marcasRouter);
router.use('/fabricantes', fabricantesRouter);

module.exports = router;