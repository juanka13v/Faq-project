const express = require("express");
const router = express.Router();
const {
  createQuestion,
  deleteQuestion,
  showAllQuestions,
  showQuestion,
  showCreateQuestion,
  showUpdateQuestion,
  updateQuestion,
} = require("../controllers/question.admin.controller");

router.route("/questions").get(showAllQuestions).post(createQuestion);

router.route("/questions/create").get(showCreateQuestion)
router.route("/questions/update/:id").get(showUpdateQuestion)

router
  .route("/question/:id")
  .get(showQuestion)
  .put(updateQuestion)
  .delete(deleteQuestion);

module.exports = router;
