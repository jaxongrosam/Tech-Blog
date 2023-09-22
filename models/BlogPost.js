const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

class BlogPost extends Model {}

BlogPost.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "BlogPost",
  }
);

module.exports = BlogPost;
