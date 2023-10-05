const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>I love testing</h1>`);
});

app.get('/about', (req, res) => {
    res.send(`<h1>Sending hellos!</h1>`);
});

app.listen(3000, () => {
    console.log(`The application is running on localhost:3000`);
});