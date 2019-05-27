const express = require("express");
const router = express.Router();

//@route  Get /api/users/test
//@access   public
//@description test users  route
router.get(`/test`, (req, res) => res.json({ msg: "users  Works" }));

module.exports = router;
