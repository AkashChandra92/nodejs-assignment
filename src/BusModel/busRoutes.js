const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const Bus = require("./Bus");
const Entity = mongoose.model('testBus', Bus);

// Gets all data about the bus from the database
router.get("/bus", async (req, res) => {
  try {
    const data = await Bus.find();
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get specific data from the database. This route is made to for future implementation.
router.get("bus/:busId", async (req, res) => {
  console.log(req.params.busId);
  try {
    const post = await Post.findById(req.params.busId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// Sample route to check if the conenction is working
router.get("/specific", (req, res) => {
  res.send({ message:"We are on a specific post"});
  console.log("We are on a specific post")
});

// Submit posts
router.post("/bus", async (req, res) => {
  // console.log(req.body);
  Entity.create({
    time: req.body.time,
    energy : req.body.energy,
    gps : req.body.gps,
    odo: req.body.odo,
    speed : req.body.speed,
    soc : req.body.soc

  }).then(bus => {
    console.log("Data added")
    res.send(bus);
  });
});

// Delete data from the database. This route is created for future implementation.
router.delete("/:busId", async (req, res) => {
  try {
    const removedBus = await Bus.remove({ _id: req.params.busId });
    res.json(removedBus);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update data in the database. This route is created for future implementation.
router.put("/:busId", async (req, res) => {
  try {
    const updatedBus = await Bus.updateOne(
      { _id: req.params.BusId },
      { $set: { title: req.params.title } }
    );
    console.log(req.body.title)
    res.json(updatedBus);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;


