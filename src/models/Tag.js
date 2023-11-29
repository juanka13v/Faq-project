const { Schema, model } = require("mongoose");

const TagModel = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  color: {
    type: String,
  },
});

module.exports = model("Tag", TagModel);
