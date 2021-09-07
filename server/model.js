const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  imgUrl: { 
    type: String,
    required: true 
  },
  likes: {
    type: Number,
    required: true
  },
  comments: {
    type: Array,
  }
}, {timestamps: true});


const Post = mongoose.model('Post', postSchema);

module.exports = Post;
