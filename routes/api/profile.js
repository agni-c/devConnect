const express = require("express");
const router = express.Router();

//@route  Get /api/profile/test
//@access   public
//@description test profile route
router.get(`/test`, (req, res) => res.json({ msg: "Profile  Works" }));

module.exports = router;
