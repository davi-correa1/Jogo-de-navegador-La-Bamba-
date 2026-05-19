const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Estou definindo porta e hostname aqui
const PORT = 5000;
const HOSTNAME = 'localhost';

// Aqui estão as variaveis das rotas HTML
const HTML = {
    index: 'index.html'
};

// Aqui estão as variaveis das rotas EJS 
const EJS = {
    signIn: 'signin',
    createAccount: 'createAccount',
    chooseCharacter: 'chooseCharacter'
};

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, HTML.index));
});

// Rota para sign in
app.get('/sign-in', (req, res) => {
    res.render(EJS.signIn);
});

// Rota para sign up
app.get("/Create-Account", (req, res) => {
    res.render(EJS.createAccount);
});

// Rota para escolher personagens
app.get("/choose-character", (req, res) => {
    res.render(EJS.chooseCharacter);
});

// Rotas do game...


app.listen( PORT, HOSTNAME, () => {
    console.clear(); // Apenas limpa o terminal antes de mostrar a url
    console.log(`http://${HOSTNAME}:${PORT}`); // Mostra a url
});