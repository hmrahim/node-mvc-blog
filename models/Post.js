const { Schema, model } = require("mongoose");

const Comment = require("./Comments");
const User = require("./User");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    tags: {
      type: [String],
      requied: true,
    },
    thumbnai: String,
    readtime: String,
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: User,
      },
    ],
    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: User,
      },
    ],
    comments: {
      type: Schema.Types.ObjectId,
      ref: Comment,
    },
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;
