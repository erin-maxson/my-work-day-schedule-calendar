var dateTimeEl = document.querySelector('#currentDay');
var RightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
//display the current date and time
//display the hours between 8-5 on the current day | blocks change different colors if they are past, present, or future
//click into the time box and add your calendar info
//hit save to save your entry in the calendar


// handle displaying the time
function displayTime() {
    dateTimeEl.textContent(rightNow);
  }

