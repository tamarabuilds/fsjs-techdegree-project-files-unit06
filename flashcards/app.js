const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const friends = [
    "lady gabor",
    'beatles',
    'queen the mane',
    'sir lancelot'
];


const friendsList = [
    {
        "first": "Tupac",
        "last": "Shakur"
    },
    {
        "first": "Snoop",
        "last": "Dogg"
    },
    {
        "first": "T",
        "last": "Payne"
    },
    {
        "first": "Missy",
        "last": "Elliot"
    },
    {
        "first": "Doja",
        "last": "Cat"
    },
];


app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render(`index.pug`);
});

app.get('/cards', (req, res) => {
    res.render(`cards`, {prompt: `Who is buried in Grant's tomb?`});
});

app.get('/hello', (req, res) => {
    res.render(`hello`, {});
});

app.post('/hello', (req, res) => {
    res.json(req.body);
});




//   /sandbox
// First Name | Last Name
app.get('/sandbox', (req, res) => {
    res.render(`sandbox`, {prompt: `Who is buried in Grant's tomb?`, friendsList});
});

app.listen(3000, () => {
    console.log(`The application is running on localhost:3000`);
});