const Todo = require("../models/todoModel");

// @desc            Get All Todos
// @route           GET /api/v1/todos
exports.getAllTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find({});

    if (!allTodos) {
      throw new Error("Todos not available!");
    }

    res.status(200).json(allTodos);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// @desc            Create Todo
// @route           POST /api/v1/todos
exports.createTodo = async (req, res) => {
  // const { text } = req.body;
  const newTodo = new Todo({ text: req.body.text });
  const resDone = await newTodo.save();
  res.status(201).json(resDone);
};

// @desc            Update Todo
// @route           PUT /api/v1/todos/:id
exports.updateTodo = async (req, res) => {
  try {
    const todoExist = await Todo.findById(req.params.id);

    if (!todoExist) {
      throw new Error("Todo not found!");
    }

    todoExist.text = req.body.text;
    const todoUpdated = await todoExist.save();
    res.status(200).json(todoUpdated);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// @desc            Delete Todo
// @route           DELETE /api/v1/todos/:id
exports.deleteTodo = async (req, res) => {
  try {
    const todoExist = await Todo.findById(req.params.id);

    if (!todoExist) {
      res.status(404);
      throw new Error("Todo not found!");
    }

    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({});
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
