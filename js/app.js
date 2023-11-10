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

const timeElms = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

const countDownTimer = {
  eventDate: new Date("2024-01-06T06:00:00").getTime(),
  interval: null,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,

  start: function () {
    this.interval = setInterval (() => {
      const now = new Date().getTime();
      const remainingTime = this.eventDate - now;

      if (remainingTime <= 0) {
        clearInterval(this.interval);
        alert("Countdown has ended, thanks for stopping by.");
      } else {
        this.days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        this.render();
      }
    }, 1000);
  },

  stop: function () {
    if (this.interval) {
      clearInterval(this.interval);
    }
  },

  render: function () {
    timeElms.days.textContent = this.days;
    timeElms.hours.textContent = this.hours;
    timeElms.minutes.textContent = this.minutes;
    timeElms.seconds.textContent = this.seconds;
  },
};

countDownTimer.start();