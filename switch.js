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

// Get number corresponding to the current month, with 0 being January and 11 being December
const month = new Date().getMonth();

switch (month) {
    // January, February, March
    case 0:
    case 1:
    case 2:
        console.log("Winter");
        break;
    // April, May, June
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    // July, August, September
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    // October, November, December
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Something went wrong.");
}
