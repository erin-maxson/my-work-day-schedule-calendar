// PSUEDO CODE below:
// display the current date and time
// display the hours between 9-5 on the current day
// translate the time blocks to military time
// compare the time blocks with moment to change different colors if they are past, present, or future
// if moment() is > timeblocks => past
// if moment() is == to timeblock => present
// if moment() is < timeblocks => future
// click into the time box and add your calendar info, grab textarea value and store it in local storage


// creates variable for current day ID on index.html and logs it to the console
// function: same as doing document.querySelector("#currentDay")
var currentDay = $("#currentDay")
console.log(currentDay) 

// variable that formats the date correctly
var systemTime = moment().format("dddd, MMMM Do")

// adds the current day to the webpage using the systemTime variable
// function: same as doing currentDay.textContent = moment()
currentDay.text(systemTime)

// variable timeBlockArr creates an array to translate current time format to military time
var timeBlockArr = [9,10,11,12,13,14,15,16,17]

// formats the time shown into hours
var currentHour = moment().hour()
// logs the hours into the console
console.log(currentHour)

function displayTimeColor() {
    for (var i = 0; i < timeBlockArr.length; i++) {
        //this if would be past
        if (currentHour > timeBlockArr[i]) {
            $("#" + timeBlockArr[i])
        }
    }
}