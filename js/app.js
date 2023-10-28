'use strict';

function handleSubmit(event) {
  event.preventDefault();
  alert("Form was submitted, thank you!!!")
  console.log("Form was submitted!")
}

function handleValidateFirstName(event) {
  event.preventDefault();

  const firstNameCheck = document.getElementById("first-name-check");
  const value = event.target.value;
  console.log(value);

  //check if there is at least 1 character for the name
  if(value.length > 1) {
    console.log("Is Valid")
    firstNameCheck.style.display = 'inline-block';
  } else {
    firstNameCheck.style.display = 'none';
  }
}

function handleValidateMiddleInitial(event) {
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

function handleValidateLastName(event) {
  event.preventDefault();

  const lastNameCheck = document.getElementById('last-name-check');
  const value = event.target.value;
  console.log(value);

  //check if there is at least 1 character for the name
  if (value.length > 1) {
    console.log('Is Valid');
    lastNameCheck.style.display = 'inline-block';
  } else {
    lastameCheck.style.display = 'none';
  }
}

function handleValidateSuggestion(event) {
  event.preventDefault();

  const suggestionCheck = document.getElementById('suggestion-field');
  const value = event.target.value;
  console.log(value);

  //check if there is at least 1 character for the suggestions field
  if (value.length > 1) {
    console.log('Is Valid');
    suggestionCheck.style.display = 'inline-block';
  } else {
    suggestionCheck.style.display = 'none';
  }
}