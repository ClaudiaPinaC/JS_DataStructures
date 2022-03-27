
var date = new Date();

var day = date.getDay();
var time = date.getTime();

console.log('Today is: ' + getDayName());
console.log('Current time is: ' + time);

function getDayName() {
    var daynames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daynames[day];
}