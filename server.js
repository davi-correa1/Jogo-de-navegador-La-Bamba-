const express = require('express');
const path = require('path');
const app = express();

// Estou definindo porta e hostname aqui
const PORT = 5000;
const HOSTNAME = 'localhost';

// Aqui estão as variaveis das pastas
const pub = '/public';
const view = '/views';

// Aqui estão as variaveis das rotas
const playEjs = pub + 'play.ejs';
const indexHtml = pub + 'index.html';
const createAccount = '';
const chooseCharacter = '';

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, indexHtml));
});

// Rota para login 
app.get('/Play', (req, res) => {
    res.render(playEjs)
})

// Rota para criar conta 
app.get("/Create-Account", (req, res) => {
    res.render(createAccount)
})

// Rota para escolher personagens
app.get("/choose-character", (req, res) => {
    res.render(chooseCharacter);
})

// Rotas do game...


app.listen( PORT, HOSTNAME, () => {
    //console.clear(); // Apenas limpa o terminal antes de mostrar a url
    console.log(`http://${HOSTNAME}:${PORT}`); // Mostra a url
});