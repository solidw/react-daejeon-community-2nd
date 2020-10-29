const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/restaurant.json');

const PORT = 4000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/restaurant', (req, res) => {
  const isAccidentalError = Math.floor(Math.random() * 10) < 0;
  setTimeout(() => {
    if (isAccidentalError) {
      res.status(500).send('internal server error');
    } else {
      res.json(db);
    }
  }, 0);
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
