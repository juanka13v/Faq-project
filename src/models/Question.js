const { Schema, model } = require("mongoose");

const QuestionModel = new Schema({
  question: {
    type: String,
    require: [true, "Field question is required"],
  },
  simple_answer: {
    type: String,
    require: [true, "Field simple_answer is required"],
  },
  detailed_answer: {
    type: String,
    require: [true, "Field detailed_answer is required"],
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
  lenguage: {
    type: Schema.Types.ObjectId,
  },
  code: {
    type: String,
  },
});

module.exports = model("Question", QuestionModel);
