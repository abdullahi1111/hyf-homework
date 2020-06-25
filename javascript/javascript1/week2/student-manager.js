const class07Students = [];
function addStudentToClass(studentName) {
  // code can go here...
  if (class07Students.length > 6) {
    console.log("Cannot add more students to class 07");
  } else if (class07Students.includes(studentName)) {
    console.log("StudentName is already in the class");
  } else if (studentName === "queen") {
    class07Students.push(studentName);
    console.log("The queen must be in the class");
  } else {
    addStudentToClass.push(studentName);
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}
console.log(class07Students);
