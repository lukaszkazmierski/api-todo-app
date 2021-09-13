import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/routes'

const cors = require("cors");
const path = require("path");

mongoose.connect('mongodb+srv://user:ds2aF21@cluster0.xq5oi.mongodb.net/todoApp?retryWrites=true&w=majority');

const PORT = process.env.PORT || 5000;


const app = express();
app
 .use(express.static(path.join(__dirname, "public")))
 .use(express.json())
 .use(express.urlencoded({ extended: true }))
 .use(cors())
 .use(routes)
 .get('/', (req: any, res: any) => res.send('API TODO APP'))
 .listen(PORT, () => {
  console.log(`⚡️Server is running at https://localhost:${PORT}`);
});
