const express = require("express");
const router = express.Router();

//Post model
const Post = require("../../models/Post");

//@route GET api/posts
//@desc Get all posts
//@access Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts));
});

//@route POST api/posts
//@desc Create a post
//@access Public
router.post("/", (req, res) => {
  const newPost = new Post({
    name: req.body.name
  });

  newPost.save().then(post => res.json(post));
});

//@route DEL api/posts
//@desc Delete a post
//@access Public
router.delete("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => post.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
