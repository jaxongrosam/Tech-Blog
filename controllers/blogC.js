const { BlogPost, Comment } = require("../models");

const blogC = {
  getHomepage: async (req, res) => {
    try {
      const blogPosts = await BlogPost.findAll();
      res.render("home", { blogPosts });
    } catch (error) {
      res.status(500).json({ error: "Error retrieving blog posts" });
    }
  },

  viewBlogPost: async (req, res) => {
    try {
      const postId = req.params.id;
      const blogPost = await BlogPost.findByPk(postId, {
        include: [{ model: Comment }],
      });
      res.render("post", { blogPost });
    } catch (error) {
      res.status(500).json({ error: "Error retrieving blog post" });
    }
  },
};

module.exports = blogC;
