const express = require('express');
const app = express();

// app.get('/greeting/', (req, res) => {
//     res.send(`Hello stranger.`);
// });

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello ${req.params.name}!`);
});




app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});

