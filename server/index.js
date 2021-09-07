let express = require('express')
let app = express()
var mongoose = require('mongoose')
var cors = require('cors')
const Post = require('./model')
const dbURI = 'mongodb://127.0.0.1:27017/instagram-clone'
mongoose
  .connect(dbURI)
  .then(() => {
    console.log('connected successfully')
  })
  .catch((err) => {
    console.log(err)
  })

  app.use(
    express.urlencoded({ extended: true }),
    express.json(),
    cors()
  );


  app.get('/', (req, res) => {
    Post.find()
    .then( result => {
      res.send(result);
    })
  })


  app.post('/post', (req, res) => {
    const post = new Post({
      title: req.body.title,
      author: req.body.author,
      avatar: req.body.avatar,
      imgUrl: req.body.imgUrl,
      likes: req.body.likes,
      comments: req.body.comments,
    });
    post.save()
      .then( result => {
        res.redirect('/');
      })
      .catch((err) => {
        console.log(err);
      })
  })

app.listen(3248)
