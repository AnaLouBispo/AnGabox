const { Router } = require("express");
const UserController = require("../controller/UserController");

const router = Router();
router.post("/post", UserController.createPost)
module.exports = router;