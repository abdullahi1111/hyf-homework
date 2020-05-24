// Startup name generator
var firstWords = [
  "incredible",
  "fine",
  "good",
  "better",
  "best",
  "amazing",
  "fine",
  "delicate",
  "together",
  "ambitious",
];
var secondWords = [
  "safe",
  "magical",
  "truthful",
  "fair",
  "fast",
  "future",
  "friendly",
  "healthy",
  "super",
  "awesome",
];
var randomNumber = Math.floor(Math.random() * 10) + 0; //Given formula.
var startupFirstName = firstWords[randomNumber];
var startupLastName = secondWords[randomNumber];

console.log(startupFirstName);
console.log(startupLastName);
