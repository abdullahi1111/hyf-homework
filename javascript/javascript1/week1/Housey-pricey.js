// Peter's house measuremensts

let houseWidth = 8;
let houseDepth = 10;
let houseHeight = 10;
let gardenSizeInM2 = 100;

//Peter's house cost
let peterHouseCost = 2500000;

//Peter's house volume
let volumeInMeters = houseWidth * houseDepth * houseHeight;

//Calculating the price of Peter's house
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300; //Given formula.

console.log(housePrice);

if (housePrice > peterHouseCost) {
  console.log("peter is paying too much");
} else {
  console.log("peter is paying too little");
}

//Julai's house measurements
let juliaHouseWidth = 8;
let juliaHouseDepth = 10;
let juliaHouseHeight = 10;
let gardenSizeInM = 70;

//Julia's house cost
let juliaHouseCost = 1000000;

//Julia's house volume
let volumeInMeter = juliaHouseWidth * juliaHouseDepth * juliaHouseHeight;

//Calculating the price of Julia's house
let housePriceJulia = volumeInMeter * 2.5 * 1000 + gardenSizeInM * 300; //Given formula

console.log(housePriceJulia);
if (housePriceJulia > juliaHouseCost) {
  console.log("Julia is paying to0 much");
} else {
  console.log("Julia is paying too little");
}
//Peter is paying too little
//Julia is paying too much
