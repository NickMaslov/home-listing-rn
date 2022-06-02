const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const houses = require('./routes/houses');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the house listing API');
});
app.use('/api/houses', houses);

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then((result) => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => console.log(err));
