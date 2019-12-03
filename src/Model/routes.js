const express = require("express");
const router = express.Router();
const Bus = require("./Bus");

// Gets all the posts
// router.get("/", async (req, res) => {
//   try {
//     const data = await Bus.find();
//     res.json(data);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// Get specific post
router.get("/:postId", async (req, res) => {
  console.log(req.params.postId);
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/specific", (req, res) => {
  res.send({ message:"We are on a specific post"});
});

// Submit posts
router.post("/", async (req, res) => {
  console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a post
router.put("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.params.title } }
    );
    console.log(req.body.title)
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;


