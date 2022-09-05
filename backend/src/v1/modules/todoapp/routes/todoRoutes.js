const express = require("express");

const router = express.Router();

const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/totdoController");

// get all todos & create todo routes
router.route("/").get(getAllTodos).post(createTodo);

// update & delete todo routes
router.route("/:id").put(updateTodo).delete(deleteTodo);

module.exports = router;
