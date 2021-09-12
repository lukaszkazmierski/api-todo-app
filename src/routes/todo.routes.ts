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


module.exports =  todosRoutes;