const { Router } = require("express");
const { getFabricantesHandler, newFabricanteHandler, updateFabricanteHandler, deleteFabricanteHandler } = require('../handlers/fabricantesHandler');

const router = Router();

router.use("/"      , getFabricantesHandler);
router.use("/new"   , newFabricanteHandler);
router.use("/change", updateFabricanteHandler);
router.use("/delete", deleteFabricanteHandler);

module.exports = router;