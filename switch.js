// let's set up the variable
const day = new Date().getDay();

// set the current day of the week to a variable, with 1 being monday, 7 being sunday

switch (day) {
  case 1:
    console.log("Happy Monday!");
    break;
  case 2:
    console.log("Happy Tuesday!");
    break;
  case 3:
    console.log("Happy Wednesday!");
    break;
  case 4:
    console.log("Happy Thursday!");
    break;
  case 5:
    console.log("Happy Friday!");
    break;
  case 6:
    console.log("Happy Saturday!");
    break;
  case 7:
    console.log("Happy Sunday!");
    break;
  default:
    console.log("Something went wrong..");
}
