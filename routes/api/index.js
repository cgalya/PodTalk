const router = require("express").Router();
const podcastsRoutes = require("./podcasts");
const episodesRoutes = require ("./episodes");

router.use("/podcasts", podcastsRoutes);
router.use("/episodes", episodesRoutes);

module.exports = router;