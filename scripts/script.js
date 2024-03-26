/* init page */
async function init() {

var countDownDate = new Date("Oct 12, 2024 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown-days").innerHTML = days;
  document.getElementById("countdown-hours").innerHTML = hours;
  document.getElementById("countdown-minutes").innerHTML = minutes;
  document.getElementById("countdown-seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-days").innerHTML = "00";
    document.getElementById("countdown-hours").innerHTML = "00";
    document.getElementById("countdown-minutes").innerHTML = "00";
    document.getElementById("countdown-seconds").innerHTML = "00";
  }
}, 1000);
}