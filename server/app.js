const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

let imdbID;


const app = express();

app.use(morgan('dev'));

app.get('/', function(req, res){
    imdbID = req.query.i;
   if (imdbID) {
       console.log(imdbID);
    axios
    .get('http://www.omdbapi.com/?i=' + imdbID + '&apikey=8730e0e')
    .then( (response) => {
        res.send(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
   }

});  

module.exports = app;