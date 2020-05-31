//When will I be there
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function timeCalculate(speedDistance) {
  return speedDistance.destinationDistance / speedDistance.speed;
}

const travelTime = timeCalculate(travelInformation);
console.log(travelTime);
var hours = Math.floor(travelTime);
var minutes = Math.floor((travelTime - hours) * 60);
console.log("It will take me " + hours + " hours and " + minutes + " minutes"); //8 hours and 38 minutes
