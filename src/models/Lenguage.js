const { Schema, model } = require("mongoose");

const LenguageModel = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  icon: {
    type: String,
  },
});

module.exports = model("Lenguage", LenguageModel);
