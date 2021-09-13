import { Router } from "express";

import TodoSchema from "../schemas/todo.schema";
import Todo from "../entities/todo";
import PropertyValidator from "../utils/property-validator";
import LoremIpsumGenerator from "../utils/lorem-ipsum-generator";
import ServerResponse from "../core/server/server-response";
import { CallbackError } from "mongoose";

const TodosRoutes = Router();

TodosRoutes.get("/", function (req, res) {
  res.status(400).json(
    new ServerResponse({
      statusCode: 400,
      message: "Select the appropriate subroute!",
    })
  );
});

TodosRoutes.get("/get", function (req, res) {
  
  TodoSchema.find({}, function (err: CallbackError, todos: any[]) {
    
    if (err) {
      res.status(402).json(
        new ServerResponse({
          statusCode: 402,
          message: err.toString(),
        })
      );
      return;
    } else {
      res.status(200).json(
        new ServerResponse({
          statusCode: 200,
          message: "The data was downloaded correctly",
          data: todos,
        })
      );
    }
  });
});

TodosRoutes.get("/getRand/:amount", function (req, res) {
  let amount = Number(req.params.amount);

  if (PropertyValidator.isValid(amount)) {
    const todos = [];
    for (let i = 0; i < amount; i++) {
      const randomNumber = Math.round(Math.random());
      const todo = new Todo({
        name: LoremIpsumGenerator.shortLorem.generateSentences(5),
        isDone: !!randomNumber,
      });
      todos.push(todo.toJson());
    }
    res.status(200).json(
      new ServerResponse({
        statusCode: 200,
        message: "The data was downloaded correctly",
        data: todos,
      })
    );
  } else {
    res.status(502).json(
      new ServerResponse({
        statusCode: 502,
        message: "The specified amount is not correct",
      })
    );
  }
});

TodosRoutes.post("/create", function (req, res) {
  const todo = new TodoSchema(req.body);

  if (PropertyValidator.isValid(todo)) {
    todo.save(function (err: CallbackError) {
      if (err) {
        res.status(400).json(
          new ServerResponse({
            statusCode: 400,
            message: err.toString(),
          })
        );
        return;
      } else {
        res
          .status(200)
          .json(new ServerResponse({ statusCode: 200, message: "Success" }));
      }
    });
  } else {
    res.status(422).json(
      new ServerResponse({
        statusCode: 422,
        message: "Incorrect data in the given body",
      })
    );
  }
});

TodosRoutes.put("/update/:id", function (req, res) {
  const id = req.params.id;

  const updatedTodo = new Todo({
    name: req.body.name,
    isDone: req.body.isDone,
  });

  if (PropertyValidator.isValid(updatedTodo)) {
    const updateQuery = { $set: updatedTodo.toMap() };
    TodoSchema.updateOne(
      { _id: id },
      updateQuery,
      null,
      function (err: CallbackError, updateRes) {
        if (err) {
          res.status(402).json(
            new ServerResponse({
              statusCode: 402,
              message: err.toString(),
            })
          );
        } else {
          res.status(200).json(
            new ServerResponse({
              statusCode: 200,
              message: "Updated was done successfully!",
            })
          );
        }
      }
    );
  } else {
    res.status(422).json(
      new ServerResponse({
        statusCode: 422,
        message: "Incorrect data in the given body",
      })
    );
  }
});

TodosRoutes.delete("/:id", function (req, res) {
  const { id } = req.params;
  if (PropertyValidator.isValid(id)) {
    const result = TodoSchema.deleteOne({ _id: id }, function (err: CallbackError) {
      if (err) {
        res.status(400).json(
          new ServerResponse({
            statusCode: 400,
            message: err.toString(),
          })
        );
        return;
      } else {
        res
          .status(200)
          .json(new ServerResponse({ statusCode: 200, message: "The item has been correctly deleted" }));
      }
    });
  } else {
    res.status(422).json(
      new ServerResponse({
        statusCode: 422,
        message: "Incorrect id",
      })
    );
  }
  
});

export default TodosRoutes;
