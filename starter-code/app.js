const express = require('express');
const Chuck  = require('chucknorris-io');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(expressLayouts);

const client = new Chuck();


app.get('/', (req, res, next) => {
  res.render('home.ejs');
});

app.get('/jokebycategory', (req, res, next) => {
  client.getJokeCategories().then((jokeCategory) => {
    const jokeArray = jokeCategory;
    res.render('joke-by-category.ejs', {
      jokeArray:  jokeArray
    });
  });

});

app.get('/categories', (req, res, next) => {
  const categorySelect = req.query.categorybtn;
  client.getRandomJoke(categorySelect).then((jokeInfo) => {
    const randomJoke = jokeInfo;
    res.render('categories.ejs', {
      randomJoke: randomJoke,
      category: categorySelect
    });
  });

});

app.get('/search-result', (req, res, next) => {
  const searchTerm = req.query.searchTerm;
  client.search(searchTerm).then((jokeInfo) => {
    const jokeArray = jokeInfo.items;
    res.render('search-result.ejs', {
      theJokeArray: jokeArray,
      searchTerm: searchTerm
    });
  });

});


app.get('/random', (req, res, next) => {
  client.getRandomJoke().then((jokeInfo) => {
    const randomJoke = jokeInfo;
    res.render('random.ejs', {
      randomJoke: randomJoke
    });
  });

});

app.get('/search', (req, res, next) => {
  res.render('search.ejs');
});

app.listen(3000);
