const express = require('express');
const path = require('path');
const app = express();

const PORT = 5000;
const HOSTNAME = 'localhost';

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/Play', (req, res) => {
    res.render('play.ejs')
})

app.listen( PORT, HOSTNAME, () => {
    console.clear
    console.log(`http://${HOSTNAME}:${PORT}`);
});