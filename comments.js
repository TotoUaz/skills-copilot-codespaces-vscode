//Create web server
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Post = require('../models/post');

//Save comment
router.post('/comment', (req, res, next) => {
  const comment = new Comment({
    content: req.body.content,
});
});
