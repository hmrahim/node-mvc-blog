const { Schema, model } = require("mongoose");

const Post = require("./Post");
const User = require("./User");

const profileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    name:{
      type: String,
      required: true,
      trim: true,

    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      maxlength: 500,
      trim: true,
    },
    profilepic: {
      type: String,
      trim: true,
    },
    links: {
      website: String,
      facebook: String,
      twitter: String,
      github: String,
    },
    bookmark: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  },
  {
    timestamps: true,
  }
);

const Profile = model("Profile", profileSchema);

module.exports = Profile;
