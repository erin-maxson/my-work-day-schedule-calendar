var dateTimeEl = document.querySelector('#currentDay')

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    dateTimeEl.text(rightNow);
  }