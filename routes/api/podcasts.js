const router = require("express").Router();
const podcastsController = require("../../controllers/podcastsController");

router.route("/search/:id").get(podcastsController.findAll);

module.exports = router;