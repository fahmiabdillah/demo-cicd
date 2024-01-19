const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('src'));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});