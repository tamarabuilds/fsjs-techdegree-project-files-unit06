const express = require('express');
const router = express.Router();
const { recipes } = require('../data/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { recipes });
});

/* GET recipe page. */
router.get('/recipes/:id', function(req, res, next) {
  const recipeId = req.params.id;
  const recipe = recipes.find( ({ id }) => id === +recipeId );
  
  if (recipe) {
    res.render('recipe', { recipe });
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
