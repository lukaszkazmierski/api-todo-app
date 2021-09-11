const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express();

app.get('/', (req, res) => res.send('API TODO APP'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
