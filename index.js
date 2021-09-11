const express = require('express')
const mongoose = require("mongoose");
const path = require('path')

const PORT = process.env.PORT || 5000
mongoose.connect('mongodb+srv://admin:admin@cluster0.xq5oi.mongodb.net/todoApp?retryWrites=true&w=majority');

const app = express();

app.get('/', (req, res) => res.send('API TODO APP'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
