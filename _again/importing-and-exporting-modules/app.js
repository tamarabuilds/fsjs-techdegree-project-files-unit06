// Import Express and set up the app
const express = require('express');
const app = express();

const routes = require('./routes');

const errorHandlers = require('./errorHandlers');




/*
* Route Handlers
*/
app.use(routes);

/*
* 404 and Global Error Handlers
*/
app.use(errorHandlers.handleFourOhFour);
app.use(errorHandlers.handleGlobalErrors);


// Turn on Express server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
})