const { StatusCodes } = require("http-status-codes");
const Question = require("../models/Question");

const renderHome = async (req, res, next) => {
  res
    .status(StatusCodes.OK)
    .render("pages/index", { title: "Homepage || Faq" });
};

const renderQuestions = async (req, res, next) => {
  const questions = await Question.find({});

  res
    .status(StatusCodes.OK)
    .render("pages/questions", { title: "All Questions || Faq", questions });
};

const renderQuestion = async (req, res, next) => {
  const questionId = req.params.id;

  const question = await Question.findById(questionId);

  res
    .status(StatusCodes.OK)
    .render("pages/question", { title: "Question || Faq", question });
};

const renderLenguages = async (req, res, next) => {
  res
    .status(StatusCodes.OK)
    .render("pages/lenguages", { title: "Lenguages || Faq" });
};

const renderTags = async (req, res, next) => {
  res.status(StatusCodes.OK).render("pages/tags", { title: "Tags || Faq" });
};

module.exports = {
  renderHome,
  renderQuestions,
  renderQuestion,
  renderLenguages,
  renderTags,
};
