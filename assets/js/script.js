// Capture and set current day on the planner page
var todayDate = function (){
    var date = moment().format("dddd" + ", " + "MMMM Do" + ", " + "YYYY");
    $("#currentDay").append(date);
}

todayDate();
