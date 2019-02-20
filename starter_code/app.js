
const express = require('express');// including libary
const hbs     = require('hbs');
const app     = express();
const path    = require('path');
//const PunkAPIWrapper = require('punkapi-javascript-wrapper');
//const punkAPI = new PunkAPIWrapper();
const beers   = require('./beers.json');

app.set('view engine', 'hbs'); //for using handelbars
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public'))); //everything in public, you can call
hbs.registerPartials(__dirname + '/views/partials');



app.get('/', (req, res) => { //res.send("oke")so you know if it works - nodemon.js
  res.render('index.hbs');
});

app.get('/beers', (req, res) => {
  res.render('beers.hbs', {beers: beers});


});


app.get('/randombeers', (req, res) => {
  var randomIndex = Math.floor(Math.random() * beers.length) 
  res.render('randombeers.hbs', {beerObject: beers[randomIndex]}) 
});



app.listen(3000); // portnumber
 