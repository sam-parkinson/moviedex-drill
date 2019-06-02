require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const MOVIEDEX = require('./movies-data-small.json')

console.log(process.env.API_TOKEN);

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

app.use(function validateBearerToken(req, res, next) {
  const authToken = req.get('Authorization');
  const apiToken = process.env.API_TOKEN;

  if (!authToken || authToken.split(' ')[1] !== apiToken) {
    return res.status(401).json({ error: 'Unauthorized request' });
  }

  next();
});

function handleGetMovies(req, res) {
  const { genre, country, avg_vote } = req.query;

  let results = MOVIEDEX;

  if (genre) {
    // filter
  }

  if (country) {
    // filter
  }

  if (avg_vote) {
    // filter
  }

  res.json(results)
}

app.get('/movies', handleGetMovies);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});