function displayclock() {
  var time = new Date();
  var hrs = ('0' + time.getHours()).slice(-2);
  var min = ('0' + time.getMinutes()).slice(-2);
  var sec = ('0' + time.getSeconds()).slice(-2);
  var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var monthNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
  var todayDay = weekday[time.getDay()];
  var dateNumber = time.getDate();
  var month = monthNames[time.getMonth()];
  var year = time.getFullYear();

  if (document.getElementById('clock') != null) {
    document.getElementById('clock').innerHTML = hrs + ':' + min + ':' + sec;
    document.getElementById('weekday').innerHTML = todayDay;
    document.getElementById('currentDate').innerHTML = dateNumber + "," + month + "," + year;
  }
}

setInterval(displayclock, 500);