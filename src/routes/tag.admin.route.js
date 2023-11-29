const express = require("express");
const router = express.Router();
const {
  renderTags,
  renderTag,
  renderEditTag,
  renderCreateTag,
  createTag,
  updateTag,
  deleteTag,
} = require("../controllers/tag.admin.controller");

router.route("/tags").get(renderTags).post(createTag);

router.route("/tags/create").get(renderCreateTag);
router.route("/tags/edit/:id").get(renderEditTag);

router.route("/tag/:id").get(renderTag).put(updateTag).delete(deleteTag);

module.exports = router;
