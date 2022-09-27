const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let user = {
  name: '',
  activity: '',
  music: '',
  favoriteMeal: '',
  favoriteFood: '',
  favoriteSport: '',
  superPower: ''
};

rl.question(`What is your name? `, (answer) => {
  user.name = answer;

  rl.question(`What's an activity you like doing?`, (answer) => {
    user.activity = answer;

    rl.question(`What do you listen to while doing that?`, (answer) => {
      user.music = answer;

      rl.question(`What is your favorite meal? (Breakfast,Lunch,etc)`, (answer) => {
        user.favoriteMeal = answer;

        rl.question(`What is your favorite food?`, (answer) => {
          user.favoriteFood = answer;

          rl.question(`What is your favorite sport?`, (answer) => {
            user.favoriteSport = answer;

            rl.question(`If you had one super power what would it be and why?`, (answer) => {
              user.superPower = answer;
              console.log(`\n Thank you ${user.name} for answering all those questions Now your account is created. \n \n \n 
              Hello! my name is ${user.name}. I like to ${user.activity} and while I ${user.activity} I listen to ${user.music}. My favorite meal has to be ${user.favoriteMeal} and my favorite item would have to be ${user.favoriteFood}. I enjoy playing/watching ${user.favoriteSport}. If I had to pick a superstore it would be ${user.superPower}. Thanks for reading about me!
              `);

              rl.close();
            })
          })
        })
      })    
    })
  }) 
});