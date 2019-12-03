const express = require("express");
const router = express.Router();
const Bus = require("./Bus");

// Gets all data of bus
router.get("/bus", async (req, res) => {
  try {
    const data = await Bus.find();
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get specific post
router.get("bus/:busId", async (req, res) => {
  console.log(req.params.busId);
  try {
    const post = await Post.findById(req.params.busId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/specific", (req, res) => {
  res.send({ message:"We are on a specific post"});
  console.log("We are on a specific post")
});

// Submit posts
router.post("/bus", async (req, res) => {
  console.log(req.body);
  const bus = new Bus({
    time: req.body.time,
    energy : req.body.enerygy,
    gps : req.body.gps,
    odo: req.body.odo,
    speed : req.body.speed,
    soc : req.body.soc

  });

  try {
    const savedBus = await bus.save();
    res.json(savedBus);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete post
router.delete("/:busId", async (req, res) => {
  try {
    const removedBus = await Bus.remove({ _id: req.params.busId });
    res.json(removedBus);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a post
router.put("/:busId", async (req, res) => {
  try {
    const updatedBus = await Bus.updateOne(
      { _id: req.params.BusId },
      { $set: { title: req.params.title } }
    );
    console.log(req.body.title)
    res.json(updatedBu);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;


