console.log("Welcome to Quiz Game");
console.log("Here's your first question");

var counter = 0;

var question1 = {
  line: "Which movie is this line from: 'You can\'t handle the truth.' \n1. A Few Good Men \n2. Spartacus \n3. I Know What You Did Last Summer \n4. Bambi",
  response: "1"
};

var question2 = {
  line: "Which movie is this line from: 'There\'s no place like home.' \n1. All Dog's Go To Heaven \n2. Casablanca \n3. Wizard of Oz \n4. Gone With the Wind",
  response: "3"
};

var question3 = {
  line: "What manufacturer is responsible for this car: 'Camaro' \n1. Honda \n2. Ford \n3. Dodge \n4. Chevrolet",
  response: "4"
};

var question4 = {
  line: "Which planets fit between the Earth and the Moon? \n1. Mercury, Venus, Mars \n2. Jupiter, Saturn \n3. Jupiter \n4. All of them",
  response: "4"
};

function ask (questionNum) {
  console.log(questionNum.line);
  var answer = prompt();
  if (answer === questionNum.response) {
    console.log("That's correct!");
    counter++;
   } else {
     console.log("Incorrect");  
  }    
};

ask(question1);
ask(question2);
ask(question3);
ask(question4);
