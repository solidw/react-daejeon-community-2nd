const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db/restaurant.json');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 4000;

app.get('/', (req, res) => {
  const randomID = Math.floor(Math.random() * 10);
  setTimeout(() => {
    res.json({ id: randomID, db });
  }, 1000);
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
