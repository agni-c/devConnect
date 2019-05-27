const express = require("express");
const router = express.Router();

//@route  Get /api/posts/test
//@access   public
//@description test posts route
router.get(`/test`, (req, res) => res.json({ msg: "Posts Works" }));

module.exports = router;
