
// creates variable for current day ID on index.html and logs it to the console
// function: same as doing document.querySelector("#currentDay")
var currentDay = $("#currentDay")
console.log(currentDay) 

var systemTime = moment().format("dddd, MMMM Do")
// function: same as doing currentDay.textContent = moment()
currentDay.text(systemTime)

var currentHour = moment().hour()
console.log(currentHour)

var dateTimeEl = document.querySelector('#currentDay');

// display the current date and time
// display the hours between 9-5 on the current day
// compare the time blocks with moment to change different colors if they are past, present, or future
// if moment() is > timeblocks => past
// if moment() is == to timeblock => present
// if moment() is < timeblocks => future
// click into the time box and add your calendar info, grab textarea value and store it in local storage


// handle displaying the time
