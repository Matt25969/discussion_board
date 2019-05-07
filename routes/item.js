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

});

module.exports = router;
