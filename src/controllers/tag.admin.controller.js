const Tag = require("../models/Tag");
const { StatusCodes } = require("http-status-codes");

const renderTags = async (req, res, next) => {
  const tags = await Tag.find({});

  res
    .status(StatusCodes.OK)
    .render("pages/admin/tags/tags", { title: "all tags", tags });
};

const renderTag = async (req, res, next) => {
  const tagId = req.params.id;

  const tag = await Tag.findById(tagId);

  res
    .status(StatusCodes.OK)
    .render("pages/admin/tags/tag", { title: "tag", tag });
};

const renderCreateTag = async (req, res, next) => {
  res
    .status(StatusCodes.OK)
    .render("pages/admin/tags/create", { title: "create tag" });
};
const renderEditTag = async (req, res, next) => {
  const tagId = req.params.id;

  const tag = await Tag.findById(tagId);

  res
    .status(StatusCodes.OK)
    .render("pages/admin/tags/edit-tag", { title: "edit tag", tag });
};
const createTag = async (req, res, next) => {
  const tagId = req.params.id;

  const tag = new Tag(req.body);

  await tag.save();

  res.redirect("/admin/tags");
};
const updateTag = async (req, res, next) => {
  const tagId = req.params.id;
  const update = req.body;

  await Tag.findByIdAndUpdate(tagId, update);

  res.redirect("/admin/tags");
};
const deleteTag = async (req, res, next) => {
  const tagId = req.params.id;

  await Tag.findByIdAndDelete(tagId);

  res.redirect("/admin/tags");
};

module.exports = {
  renderTag,
  renderTags,
  renderCreateTag,
  renderEditTag,
  createTag,
  updateTag,
  deleteTag,
};
