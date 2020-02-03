let process = require('process');
// There are many facts about a user we might want to keep track of,
// but we want to be able to treat a user as a single value.
// That means the user has to be some kind of collection.

// Here's one way we might do it using an array.

let user = {};

user['firstName'] = 'Peyton';
user['lastName'] = 'Manning';
user['currentLocation'] = 'New York';
user['favoriteSongs'] = ['the box', 'caroline', 'Headlines'];
user['age'] = 43;
user['favoriteFood'] = ['burritos', 'pizza', 'short ribs'];
user['favoriteMovies'] = ['Bad Boys', 'Interstellar', 'the matrix'];
// To get started, set user['canBeDisplayed'] to true instead of false
user['canBeDisplayed'] = true;

if (user['canBeDisplayed'] === false) {
  console.log('Hey! Open up printUserInfo.js to get started.');
  process.exit();
}

console.log(`Hello, ${user['firstName']} ${user['lastName']}.`);
console.log();

console.log(`How's the weather in ${user['currentLocation']}?`);
console.log();

if (user['age'] >= 100) {
  console.log(`Wow! You're ${user['age']} years old? Fewer than 0.2% reach that age.`);
  console.log();
}

console.log('Looks like you have great taste in music. Your favorite songs:');

printFavorites(user['favoriteSongs']);

console.log('You have really interesting movie favorites: Favorite Movies are: ');

printFavorites(user['favoriteMovies']);

function printFavorites(list) {

  for(let i = 0; i < list.length; i++ ){
    let bullets = i + 1;
    let itemName = list[i];
    console.log(` ${bullets}. ${itemName}`);
  }
  console.log(' ');
}
