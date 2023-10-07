const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

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

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');


app.use(mainRoutes);
app.use('/cards', cardRoutes);


app.use((req, res, next) => {
    console.log(`hwllo`)
    // const err = new Error(`oh noes!`)
    // err.status = 500;
    next();
});

app.use((req, res, next) => {
    console.log('world');
    next();
});



app.use((req, res, next) => {
    const err = new Error(`Not found`);
    err.status = 404;
    next(err);
});



app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err)
});




app.listen(3000, () => {
    console.log(`The application is running on localhost:3000`);
});