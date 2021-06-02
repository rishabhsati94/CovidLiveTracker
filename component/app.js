const express = require('express');
const path = require('path');
// const {alertmsg} = require('./js/contact')
const hbs = require('hbs');
const bodyParser = require('body-parser');
// Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Covid-19', { useNewUrlParser: true, useUnifiedTopology: true });
const port = process.env.PORT || 80;
const app = express();


// Define Schema
const selectSymptoms = new mongoose.Schema({
  cough: String,
  outofBreathe: String,
  fever: String,
  flu: String,
  headache: String,
  throat: String
});

const contactSchema = new mongoose.Schema({
  userName: String,
  userEmail: String,
  symptoms: [selectSymptoms],
  address: String,
  contact: Number
});

// compile
const contact = mongoose.model('Covid-19Contact', contactSchema);

// For Serving static Files
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));


// HBS SPECIFIC STUFF
app.set('view engine', 'hbs');

// Serving Templates
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(path.join(__dirname, '../templates/partials'));



// Index Page

app.get('/', (req, res) => {
  res.status(200).render('index', {
    style: 'home.css'
  });
})

// World Cases 

app.get('/worldcases', (req, res) => {
  res.status(200).render('worldcases', {
    style: 'worldcases.css'
  });
})

// indiacases
app.get('/indiacases', (req, res) => {
  res.status(200).render('indiacases', {
    style: 'indiacases.css'
  });
})

// Symptoms
app.get('/symptoms', (req, res) => {
  res.status(200).render('symptoms', {
    style: 'symptoms.css'
  });
})

// Map

app.get('/map', (req, res) => {
  res.status(200).render('map', {
    style: 'map.css'
  });
})


// About Page
app.get('/about', (req, res) => {
  res.status(200).render('about', {
    style: 'about.css'
  });
})


// Contact Us Get
app.get('/contact', (req, res) => {
  res.status(200).render('contact', {
    style: 'contact.css'
  });
})

// Contact Us Post
app.post('/contact', (req, res) => {
  
  var myData = new contact(req.body);

  myData.save().then(() => {
    res.render('contact', {
      style: 'contact.css'
    });
  }).catch(() => {
    res.render('404', {
      style: '404.css',
      errormsg: 'Opps! Page Not Found'
    });;
  });
})

// Error Page 404
app.get('*', (req, res) => {
  res.status(200).render('404', {
    style: '404.css',
    errormsg: 'Opps! Page Not Found'
  });
})

// Listen 
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});