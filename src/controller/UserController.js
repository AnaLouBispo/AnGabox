const User = require("../models/User");
const Post = require("../models/Post");
const UserController = {
  create: async (req, res) => {
    try {
      const { userName, email, age } = req.body;
      const user = await User.create({
        userName,
        email,
        age,
      });
      return res.status(200).json({
        msg: "User Created ;D",
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Error :|",
      });
    }
  },
  createPost: async (req, res) => {
    try {
      const { id } = req.params;
      const idUser = await User.findById(id); 
      const { title, content, rating, movieTitle, director } = req.body;
      const post = await Post.create({
        title,
        content,
        rating,
        movieTitle,
        director,
      });
      return res.status(200).json({
        msg: "Post Created ;D",
        post,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Error :|",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await User.find();
      return res.status(200).json({
        msg: "All Users :3",
        users,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Error :|",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({
          msg: "User not found :(",
        });
      }
      return res.status(200).json({
        msg: "User found",
        user,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Error :|",
      });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { userName, email, age } = req.body;
      const user = User.findById(id);
      if (!user) {
        return res.status(404).json({
          msg: "User not found :(",
        });
      }
      await User.findByIdAndUpdate(id, {
        userName,
        email,
        idade,
      });
      return res.status(200).json({
        msg: "User updated",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Error :|",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const user = User.findById(id);
      if (!user) {
        return res.status(404).json({
          msg: "User not found",
        });
      }
      await User.findByIdAndDelete(id);
      return res.status(200).json({
        msg: "User deleted",
      });
    } catch (error) {}
  },
};
module.exports = UserController;
