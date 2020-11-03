let userName="Adeel";

//if username exists logs hello + username otherwise just hello
userName? console.log("Hello " + userName) : console.log("Hello!")

const userQuestion ="should i go to the gym tonight?";

console.log(`${userName} asked ${userQuestion}`);

//sets to a random number between 0 and 7
const randomNumber = Math.floor(Math.random() * 8);

//eightball is set to an empty string so it can be changed later depending on which case is selected;
let eightball="";

switch (randomNumber){
  case 0:
    eightball="It is certain";
    break;
  case 1:
    eightball="It is decidedly so";
    break;
  case 2:
    eightball="Reply hazy try again";
    break;
  case 3:
    eightball="Cannot predict now";
    break;
  case 4:
    eightball="Do not count on it";
    break;
  case 5:
    eightball="My sources say no";
    break;
  case 6: 
    eightball="Outlook not so good";
    break;
  case 7: 
    eightball="Signs point to yes";
  }

  console.log(`The eightball replied "${eightball}"`)