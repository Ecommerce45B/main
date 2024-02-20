const { Router } = require("express");
const { getCategoryHandler, newCategoryHandler, updateCategoryHandler, deleteCategoryHandler } = require('../handlers/categoryHandler');

const router = Router();

router.use("/"      , getCategoryHandler);
router.use("/new"   , newCategoryHandler);
router.use("/change", updateCategoryHandler);
router.use("/delete", deleteCategoryHandler);

module.exports = router;