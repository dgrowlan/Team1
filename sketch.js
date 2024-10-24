let storyParts;
let currentPart = 0;
let selectedAnswer = '';
let options = [];
let lastAnswer = 0;
let

function setup() {
  createCanvas(600, 400);
  
  // Define the story parts with multiple-choice options
  storyParts = [
    {
      text: "Once upon a time in a small village, there lived a brave knight named Arthur. Who was the brave knight?",
      options: ["Arthur", "Lancelot", "Gawain"],
      answer: "Arthur"
    },
    {
      text: "Arthur was known for his courage and often helped those in need. What was Arthur known for?",
      options: ["Bravery", "Cowardice", "Wisdom"],
      answer: "Bravery"
    },
    {
      text: "One day, a dragon threatened the village, and Arthur decided to confront it. Who threatened the village?",
      options: ["A lion", "A dragon", "A giant"],
      answer: "A dragon"
    },
    {
      text: "After a fierce battle, Arthur emerged victorious and saved the village. What did Arthur save?",
      options: ["The village", "The castle", "The forest"],
      answer: "The village"
    },
    {
      text: "The villagers celebrated Arthur's bravery, and he became a legend. What did Arthur become?",
      options: ["A legend", "A feast", "A parade"],
      answer: "A legend"
    }
  ];
  
  // Initialize options for the first question
  options = storyParts[currentPart].options;
}

function draw() {
  background(220);
  if (lastAnswer == 1) {
    textSize(20);
    text("Incorrect! Try again.",50 ,250);
  }
  
  // Display the current story part
  textSize(20);
  text(storyParts[currentPart].text, 20, 50, width - 40, height - 100);
  
  // Display multiple choice options
  textSize(16);
  for (let i = 0; i < options.length; i++) {
    let y = 100 + i * 30;
    fill(selectedAnswer === options[i] ? 'lightblue' : 'white');
    rect(20, y, 560, 25);
    fill(0);
    text(options[i], 30, y + 20);
  }
  
  // Display feedback
  if (currentPart >= storyParts.length) {
    textSize(20);
    text("The end! Thank you for playing.", 20, height - 60);
  }
}

function mousePressed() {
  // Check if the user clicked on any of the options
  for (let i = 0; i < options.length; i++) {
    let y = 100 + i * 30;
    if (mouseX > 20 && mouseX < 580 && mouseY > y && mouseY < y + 25) {
      selectedAnswer = options[i];
      checkAnswer();
    }
  }
}

function checkAnswer() {
  // Check if the selected answer is correct
  if (selectedAnswer === storyParts[currentPart].answer) {
    currentPart++;
    lastAnswer = 0;
    if (currentPart < storyParts.length) {
      options = storyParts[currentPart].options; // Update the options for the next part
    } else {
      selectedAnswer = ''; // Clear answer for the end
    }
  } else {
    lastAnswer = 1;
  
  }
}
