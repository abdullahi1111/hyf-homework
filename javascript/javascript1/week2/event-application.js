//return current day using date opject
//we need to compute the next day bassed on current date index.
function getEventWeekday(howmanydays) {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const d = new Date();
  const n = d.getDay();
  const a = (n + howmanydays) % 7;
  //compute the index value bassed on n and howmanydays.
  console.log(a);
  return "The event is going to be held: " + weekDays[a];
}
console.log(getEventWeekday(9));
