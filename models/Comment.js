const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

class Comment extends Model {}

Comment.init(
  {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Comment",
  }
);

module.exports = Comment;
