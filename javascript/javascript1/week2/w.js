function getcolor(name) {
  const colors = ["blue", "red", "yellow", "pink", "black"];
  const index = name.length & colors.length;
  return colors[index];
}
console.log(getcolor("johns"));
