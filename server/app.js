const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  let imdbTitle = (req.query.t);    // anyting after " ?t "  ?t= jhvvvvvmvbnn
  let imdbID = (req.query.i);       // anyting after " ?i= "

if (imdbTitle) {
  axios
    .get("http://www.omdbapi.com/?t=" + imdbTitle + "&apikey=8730e0e")
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log('this is Title error:' + error);
    });
} else if (imdbID){
    axios
    .get("http://www.omdbapi.com/?i=" + imdbID + "&apikey=8730e0e")
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log('this is an ID error:' + error);
    });
} else  {
    res.end("Dont have any data ")
}
});

module.exports = app;