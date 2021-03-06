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
var standardTime = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

// formats the time shown into hours
var currentHour = moment().hour()
// logs the hours into the console
console.log(currentHour)

// function provides time blocks with the correct color coding
function displayTimeColor() {
    // for loop runs through the time block array
    for (var i = 0; i < timeBlockArr.length; i++) {
        // this variable grabs the ID of the html elements inside the time block array
        var currentTextEl = $("#" + timeBlockArr[i])
        //this if would be past
        if (currentHour > timeBlockArr[i]) {
            // this adds the class past to the time block if the time is in the past
            currentTextEl.addClass("past")
        }
        // this is compares the current hour to the time selected to list it as present if true
        else if (currentHour === timeBlockArr[i]) {
            currentTextEl.addClass("present")
        }

        else if (currentHour < timeBlockArr) {
            // this adds the future class to the time selected if the time is in the future.
            currentTextEl.addClass("future")
        }

        var event = localStorage.getItem(standardTime[i])
        console.log(event)

        if (event) {
            $('#' + timeBlockArr[i]).val(event)
        }
    }
}

// Grabbing the text button from the index page
var saveTextBtn = $(".saveBtn")

// When you click on the save button, it captures the hour and the input inside the description to log it into the console and local storage
saveTextBtn.on("click", function() {
    var hours = $(".hour").toArray();
    var descriptions = $('textarea').toArray();

    for (index = 0; index < hours.length; index++) {
        const hour = hours[index].textContent;
        const description = descriptions[index].value;
        console.log(hour)
        localStorage.setItem(hour, description)
    }

    console.log(hours)


    // console.log(hour)
    // console.log(description)

    displayTimeColor()
})

displayTimeColor()