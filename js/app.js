'use strict';

function handleSubmit(event) {
  event.preventDefault();
  alert("Form was submitted, thank you!!!")
  console.log("Form was submitted!")
}

function handleValidateName(event) {
  event.preventDefault();

  const firstNameCheck = document.getElementById("first-name-check");
  const value = event.target.value;
  console.log(value);

  //check if there is at least 1 character for the name
  if(value.length > 1) {
    console.log("Is Valid")
    firstNameCheck.style.display = "inline-block";
  } else {
    firstNameCheck.style.display = "none";
  }
}

function handleValidationMiddleInitial(event) {
  event.preventDefault();

  const middleInitialCheck = document.getElementById('middle-initial-check');
  const value = event.target.value;

  //check if there is one letter for middle initial
  if (value.length == 1) {
    middleInitialCheck.style.display = 'inline-block';
  } else {
    middleInitialCheck.style.display = 'none';
  }
}