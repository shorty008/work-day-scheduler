// Capture and set current day on the planner page
var todayDate = function (){
    var date = moment().format("dddd" + ", " + "MMMM Do" + ", " + "YYYY");
    $("#currentDay").append(date);
}

todayDate();

//Save and load tasks on local storage
var saveTask = function (){
    $(".saveBtn").on("click", function() {
        //get value of content from sibling div
        var message = $(this).siblings(".description").val();
        //get value of time from parent div
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, message);
    })

    //loop to display stored values
    for (var i = 5; i <18; i++ ) {
        var number = i;
        $("#" + number + " .description").val(localStorage.getItem(number));
    }
}

saveTask();
