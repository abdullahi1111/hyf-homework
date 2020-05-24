//Flight booking fullname function

function getFullName(firstname, surname, useFormalName) {
  if (useFormalName === true) {
    return "Lord" + " " + firstname + " " + surname;
  } else {
    return firstname + " " + surname;
  }
}
const fullname = getFullName("Abdullahi", "Yussef");
console.log(fullname);

/**
 * two variables fullname1 and fullname2
 * these two variables are assigned to the return of calling the getFullname function.
 *  */

const fullname1 = getFullName("Abdullahi", "Yussef", true);
const fullname2 = getFullName("Abdullahi", "Yussef", false);

console.log(fullname1);
console.log(fullname2);
