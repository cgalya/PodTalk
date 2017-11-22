const router = require("express").Router();
const podcastRoutes = require("./podcasts");

router.use("/podcasts", podcastRoutes);

module.exports = router;