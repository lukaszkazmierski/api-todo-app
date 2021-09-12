const express = require("express");
const todosRoutes = express.Router();
const Todo = require("../entities/todo.js");
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
let TodoSchema = require("../schemas/todo.schema.ts");

todosRoutes.get('/',function (req, res) {
    res.status(400).json({
      message: "Select the appropriate subroute!",
    });
});

todosRoutes.post('/create',function (req, res) {
    const todo = TodoSchema(req.body);
      todo.save(function (err) {
        if (err) {
          res.status(400).json({
            statusCode: 400,
            error: err,
          });
          return;
        } else {
          res.status(200).json('Success');
        }
      });

    
});

todosRoutes.delete('/:id',function (req, res) {
  const { id } = req.params;
    TodoSchema.deleteOne({ "_id": id},function (err) {
      if (err) {
        res.status(400).json({
          statusCode: 400,
          error: err,
        });
        return;
      } else {
        res.status(200).json('Success');
      }
    }); 
});

todosRoutes.get('/get',function (req, res) {
  TodoSchema.find({},function (err, obj) {
    if (err) {
      res.status(402).json({
        statusCode: 402,
        error: err,
      });
      return;
    } else {
      res.status(200).json(obj);
    }
  }); 
});

todosRoutes.get('/getRand/:amount',function (req, res) {
  const { amount } = req.params;

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 2,
      min: 1
    },
    wordsPerSentence: {
      max: 4,
      min: 2
    }
  });

  const todos = [];

  for (let i = 0; i < amount; i++) {
    const randomNumber = Math.round(Math.random());
    const todo = new Todo(lorem.generateSentences(5), !!randomNumber);
    todos.push(todo.toJson());
  }

  res.status(200).json(todos);
});

todosRoutes.put('/update/:id',function (req, res) {
  const { id } = req.params;
  const updatedTodo = TodoSchema(req.body);
  TodoSchema.findOne({ "_id": id},function (err, todo) {
    if (err) {
      res.status(402).json({
        statusCode: 402,
        error: err,
      });
      return;
    } else {
      todo.name = updatedTodo.name;
      todo.isDone = updatedTodo.isDone;
      todo.save(function (err) {
        if (err) {
          res.status(410).json({
            failure: true,
            statusCode: 410,
            error: err,
          });
          return;
        } else {
          res.status(200).json("Updated was done successfully!");
        }
      });
    }
  }); 
});

module.exports =  todosRoutes;