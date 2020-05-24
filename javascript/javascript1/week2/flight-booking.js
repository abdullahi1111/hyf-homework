//Flight booking fullname

function getFullName(firstname, surname) {
  return firstname + " " + surname;
}

const fullname = getFullName("Abdullahi", "Yussef");

console.log(fullname); //returns AbdullahiYussef

const fullname1 = getFullName("Abdullahi", "Yussef");
const fullname2 = getFullName("Abdullahi", "Yussef");

console.log(fullname1);
console.log(fullname2);

//formal fullname
function getFullName(firstname, surname, useFormalName = true) {
  if (useFormalName == true) {
    return "Lord" + firstname + surname;
  } else {
    return firstname + surname;
  }
}
console.log(getFullName("Abdullahi", "Yussef"));
