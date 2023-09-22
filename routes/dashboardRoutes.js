const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogC");

router.get("/dashboard", blogController.getDashboard);

router.get("/dashboard/create", blogController.getCreatePostForm);
router.post("/dashboard/create", blogController.createBlogPost);

router.get("/dashboard/edit/:id", blogController.getEditPostForm);
router.put("/dashboard/edit/:id", blogController.editBlogPost);

router.delete("/dashboard/delete/:id", blogController.deleteBlogPost);

module.exports = router;
