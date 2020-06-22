const router = require("express").Router();
const bookRoutes = require("./gbooks");

// Book routes
router.use("/gbooks", bookRoutes);

module.exports = router;