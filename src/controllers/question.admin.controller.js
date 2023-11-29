const Question = require("../models/Question.js");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} = require("../errors");

const showAllQuestions = async (req, res, next) => {
  const questions = await Question.find({});

  res
    .status(StatusCodes.OK)
    .render("pages/admin/questions", { title: "questions", questions });
};

const showQuestion = async (req, res) => {
  const questionId = req.params.id;

  const question = await Question.findById(questionId);

  res.status(StatusCodes.OK).render("pages/admin/question", {
    title: "question",
    question
  });
};

const showCreateQuestion = async (req, res) => {
  res.status(StatusCodes.OK).render("pages/admin/create-question", { title: "create" });
};

const createQuestion = async (req, res, next) => {
  const body = req.body;

  const question = new Question(body);
  await question.save();

  res.redirect("/admin/questions");
};

const showUpdateQuestion = async (req, res) => {
  const questionId = req.params.id;

  const question = await Question.findById(questionId);

  res
    .status(StatusCodes.OK)
    .render("pages/admin/edit-question", { title: "update", question });
};

const updateQuestion = async (req, res) => {
  const questionId = req.params.id;
  const update = req.body;

  await Question.findByIdAndUpdate(questionId, update);

  res.redirect("/admin/questions");
};

const deleteQuestion = async (req, res) => {
  const questionId = req.params.id;

  await Question.findByIdAndDelete(questionId)

  res.redirect("/admin/questions")
};

module.exports = {
  showAllQuestions,
  showQuestion,
  showCreateQuestion,
  showUpdateQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
