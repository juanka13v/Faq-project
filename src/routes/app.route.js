const express = require("express");
const router = express.Router();
const {
  renderHome,
  renderQuestions,
  renderQuestion,
  renderLenguages,
  renderTags
} = require("../controllers/app.controller");

router.get("/", renderHome)
router.get("/questions", renderQuestions)
router.get("/question/:id", renderQuestion)
router.get("/lenguages", renderLenguages)
router.get("/tags", renderTags)


module.exports = router;
