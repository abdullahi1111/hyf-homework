//weather wear

function weatherWear(temperature) {
  if (temperature <= 10) {
    clothes = "Must have winter jacket!";
  } else if (temperature > 10 && temperature <= 15) {
    clothes =
      " you can afford to pull off your trendy minimal outerwear like a  biker jacket ";
  } else if (temperature > 15 && temperature <= 30) {
    clothes = "Enjoy the summer in summer T-shirt";
  }
  return clothes;
}

const clothesToWear = weatherWear(18);
console.log(clothesToWear); // Logs out: "Enjoy the summer in summer T-shirt"
