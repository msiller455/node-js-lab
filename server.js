const express = require('express');
const app = express();
const MagicEightBall = require('./modules/magicEightBall');

// app.get('/greeting/', (req, res) => {
//     res.send(`Hello stranger.`);
// });

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello ${req.params.name}!`);
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`${req.params.total * req.params.tipPercentage / 100}`);
});

app.get('/magic/:question', (req, res) => {
    res.send(`Oh magic eight ball,<br>
    ${req.params.question}?<br>
    ${MagicEightBall[Math.floor(Math.random() * MagicEightBall.length)]}
    `);
});


app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});

