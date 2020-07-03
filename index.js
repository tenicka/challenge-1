// globals
var firstName;
var lastName;
var age;
var idNumber;

function init() {
  document.getElementById("step2").hidden = true;
  document.getElementById("step3").hidden = true;
  document.getElementById("step1").hidden = false;
}

//step 1
function submitStep1(event) {
  event.preventDefault(); // prevent form submission
  firstName = document.querySelector('#firstName').value;
  lastName = document.querySelector('#lastName').value;
  console.log(firstName, lastName);

  document.getElementById("step1").hidden = true;
  document.getElementById("step3").hidden = true;
  document.getElementById("step2").hidden = false;
}

//step2
function submitStep2(event) {
  event.preventDefault();
  idNumber = document.querySelector('#idNumber').value;

  if (isNaN(idNumber)) {
    alert("all characters must be numeric");
    return;
  }

  if (idNumber.length < 13) {
    alert("ID number should have 13 characters")
    return;
  }

  if (idNumber.length > 13) {
    alert("To much characters");
    return;
  }

  console.log(firstName, lastName, idNumber);

  document.getElementById("step2").hidden = true;
  document.getElementById("step1").hidden = true;
  document.getElementById("step3").hidden = false;

  let year = parseInt(idNumber.substring(0, 2));
  const month = parseInt(idNumber.substring(2, 4));
  const date = parseInt(idNumber.substring(4, 6));


  if (year >= 20) {
    year = '19' + year;
  } else {
    if (year < 10) {
      year = '200' + year;
    } else {
      year = '20' + year;
    }
    console.log(year);

  }

  var age = calculateAge(year, month, date);
  const greeting = `Hello ${firstName} ${lastName}, you are ${age} years old`;
  console.log(greeting);

  document.getElementById("step3").innerHTML = greeting;
}

function calculateAge(year, month, day) {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getUTCMonth() + 1;
  var currentDay = currentDate.getUTCDate();

  var age = currentYear - year;
  if (currentMonth > month) {
    return age;
  } else {}
  if (currentDay >= day) {
    return age;
  } else {
    age--;
    return age;
  }
}

function calculate_age(dob) {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
