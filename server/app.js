const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

let imdbID;
// let data;
const m = new Map();

const app = express();

app.use(morgan('dev'));

app.get('/', function(req, res){
    imdbID = req.query.i;
   if (imdbID && m.has('data')) {
       return m;
    } else {
    axios
    .get('http://www.omdbapi.com/?i=' + imdbID + '&apikey=8730e0e')
    .then( (response) => {
        res.send(response.data);
        
        m.set('data', response.data);
    })
    .catch((error) => {
        console.log(error);
    });
   }

});  



module.exports = app;