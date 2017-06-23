const Chuck = require('chucknorris-io');


const client = new Chuck();

client.getRandomJoke().then((jokeInfo) => {
  console.log('RANDOM JOKE!');
  console.log(jokeInfo);

  console.log('');
  console.log('jokeInfo.value ->');
  console.log(jokeInfo.value);
});
