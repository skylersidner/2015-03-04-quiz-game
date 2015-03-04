console.log("Welcome to Quiz Game");
console.log("Here's your first question");

var question1 = {
  line: "Which movie is this line from: 'You can\'t handle the truth.' \n1. A Few Good Men \n2. Spartacus \n3. I Know What You Did Last Summer \n4. Bambi",
  response: "1"
};

console.log(question1.line);

var answer = prompt();
if (answer === question1.response) {
  console.log("That's correct!")
 } else {
  console.log("Incorrect")  
};    