// Startup name generator
const firstWords = [
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
const secondWords = [
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
const randomNumber = Math.floor(Math.random() * 10) + 0; //Given formula.
const startupFirstName = firstWords[randomNumber];
const startupLastName = secondWords[randomNumber];

console.log(startupFirstName);
console.log(startupLastName);
