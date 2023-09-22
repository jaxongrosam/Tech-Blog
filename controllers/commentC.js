const { Comment } = require("../models");

const commentC = {
  addComment: async (req, res) => {
    try {
      const postId = req.params.id;
      const { text } = req.body;
      const newComment = await Comment.create({
        text,
        BlogPostId: postId,
      });
      res.redirect(`/post/${postId}`);
    } catch (error) {
      res.status(500).json({ error: "Error adding comment" });
    }
  },
};

module.exports = commentC;
