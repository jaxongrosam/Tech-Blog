const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogC");

router.get("/", blogController.getHomepage);

router.get("/post/:id", blogController.viewBlogPost);

router.post("/post/:id/comment", blogController.addComment);

module.exports = router;
