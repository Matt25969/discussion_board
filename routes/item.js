const express = require("express");
const router = express.Router();

let array = [];

// @route   GET item/test
// @desc    Tests route
// @access  Public
router.get("/test", (req, res) => {
  res.json({
    message: "Item"
  });
});

// @route   GET item/all
// @desc    Get all items
// @access  Public

router.get("/all", (req, res) => {
    res.send(array);
});

// @route   POST item/createItem
// @desc    Create an Item
// @access  Public
router.post("/createItem", (req, res) => {

    const newItem = {
      username: req.body.username,
      content: req.body.content
    };

  array.push(newItem);

  res.send("Success");

});

// @route   PUT item/updateItem
// @desc    Update first Item
// @access  Public
router.put("/updateItem", (req,res) => {

  const newItem = {
    username: req.body.username,
    content: req.body.content
  };

  array[0] = newItem;

  res.send("Success");

});

// @route   DELETE item/deleteItem
// @desc    Delete first Item
// @access  Public
router.delete("/deleteItem", (req,res) => {

  array.splice(0,1);

  res.send("Success");

});

module.exports = router;
