const PropertyValidator = require("../utils/property-validator.ts");

const express = require("express");
const todosRoutes = express.Router();

let TodoSchema = require("../schemas/todo.schema.ts");

todosRoutes.get('/',function (req, res) {
    res.status(400).json({
      message: "Select the appropriate subroute!",
    });
});

todosRoutes.post('/create',function (req, res) {
    const todo = TodoSchema(req.body);

    if(PropertyValidator.isValid(todo)) {
      todo.save(function (err) {
        if (err) {
          res.status(400).json({
            statusCode: 400,
            error: err,
          });
          return;
        } else {
          res.status(200);
        }
      });
    } else {
      res.status(403);
    }
    
});


module.exports =  todosRoutes;