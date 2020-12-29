const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require("path");

router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports = router;