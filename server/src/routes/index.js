const { Router }        = require("express");
const productsRouter    = require('./productsRouter');
const categoryRouter    = require('./categoryRouter');

const router = Router();

router.use('/products', productsRouter);
router.use('/categories', categoryRouter);

module.exports = router;