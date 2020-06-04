//Voice assistant app
let myName = " Benjamin";
var date = new Date();
var localDate = date.toLocaleString();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
let todos = [];

function getReply(command) {
  if (command === "Hello my name is" + myName) {
    return "nice to meet you" + myName;
  }
  if (command === "What is my name?") {
    return "your name is" + myName;
  }

  if (command === "Add fishing to my todo") {
    todos.push("fishing");
    return "fishing added to your todo";
  }
  if (command === "Add singing in the shower to my todo") {
    todos.push("singing in the shower");
    return "added singing in the shower to a list of todos";
  }
  if (command === "Remove fishing from my todo") {
    return "Removed fishing from your todo";
  }
  if (command === "What is on my todo?") {
    return todos;
  }
  if (command === "What day is it today??") {
    return date.toLocaleDateString("da-DK", options);
  }
  if (command === "What is 3 + 3") {
    var x = 3;
    var y = 3;
    return x + y;
  }
  if (command === "What is 4 * 12") {
    var a = 4;
    var b = 12;
    return a * b;
  }

  if (command === "Set a timer for 4 minutes") {
    setTimeout(function () {
      console.log("timerdone");
    }, 4000);
  }
}
getReply("Set a timer for 4 minutes");
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("What day is it today??"));
console.log(getReply("What is 3 + 3"));
console.log(getReply("What is 4 * 12"));
