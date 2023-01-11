var countDownTimestamp = 1686520800000;
var x = setInterval(function () {
    var now = Date.now();
    var distanceMS = countDownTimestamp - now;
    var distanceS = Math.floor((countDownTimestamp - now) / 1000);
    document.getElementById("ms").innerHTML = distanceMS;
    document.getElementById("s").innerHTML = distanceS;
}, 1);
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
