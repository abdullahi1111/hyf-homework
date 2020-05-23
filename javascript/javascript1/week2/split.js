// This function emulates sending emails to receipients
function sendEmailTo(recepient) {
  // But really it only logs out a string
  let names =
    "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com";
  let names2 = names.split("|");
  console.log("email sent to " + names2);
}
sendEmailTo();
