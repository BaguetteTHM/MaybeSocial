const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');


// connexion à la base de données
mongoose.connect('mongodb+srv://Schmoo:Bq8F3o22lUpcdOjC@cluster0.je5vsfq.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie '))
  .catch(() => console.log('Connexion à MongoDB échouée '));

//création de l'app express
const app = express(); 

// exploitation des body de req
app.use(express.json());

// gère les headers pour les CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
}); 

app.use('/api/post', postRoutes); // importe le router post
app.use('/api/auth',userRoutes); // importe le routeur user
app.use('/images', express.static(path.join(__dirname, 'images')));// path pour fichiers image


module.exports = app; //exporte l'app express