const router = require("express").Router();
const podcasts = require("./podcasts");
const auth = require("./auth");

router.use("/", podcasts_db);
router.use("/auth", auth);

module.exports = router;