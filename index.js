const express = require('express')
const mongoose = require("mongoose");

const cors = require("cors");
const path = require("path");

mongoose.connect('mongodb+srv://admin:admin@cluster0.xq5oi.mongodb.net/todoApp?retryWrites=true&w=majority');

const PORT = process.env.PORT || 5000;

const routes = require('./src/routes/routes.ts')

const app = express();
app
 .use(express.static(path.join(__dirname, "public")))
 .use(express.json())
 .use(express.urlencoded({ extended: true }))
 .use(cors())
 .use(routes)
 .get('/', (req, res) => res.send('API TODO APP'))
 .listen(PORT, () => {
  console.log(`⚡️Server is running at https://localhost:${PORT}`);
});
