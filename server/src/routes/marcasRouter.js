const { Router } = require("express");
const { getMarcasHandler, newMarcaHandler, updateMarcaHandler, deleteMarcaHandler } = require('../handlers/marcasHandler');

const router = Router();

router.use("/"      , getMarcasHandler);
router.use("/new"   , newMarcaHandler);
router.use("/change", updateMarcaHandler);
router.use("/delete", deleteMarcaHandler);

module.exports = router;