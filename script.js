$(document).ready(function(){
    
    var date = moment().format('MMMM DD, YYYY, h:mm a');
    
    var $currentDate = $(".currentDate");
    $currentDate.text(date);
    console.log($currentDate)

    var test = false;

    var dateHour24 = moment().format('LT');
    var dateHour12 = moment().format('lt');
    var time = $(".hours");

   if (test) {
        dateHour24 = 13;
        dateHour12 = 1;
  }

    var row = $(".dailyEvent")
    
    changeRowColor(row, time);
  
    function changeRowColor (row, time) {
    if (test) {console.log("rowColor", dateHour24, value);}

    if (time < dateHour24) {
        if (test) {console.log("lessThan");}
        row.css("background-color", "lightgray")
    } else if (time > dateHour24) {
        if (test) {console.log("greaterThan");}
        row.css("background-color", "lightgreen")
    } else {
        if (test) {console.log("equal");}
        row.css("background-color", "dodgerblue")
    }
    };


var btn = $("button");
var text = $(".dailyEvent");
var nine = text.attr("id", "saveEvent1");
var ten = text.attr("id", "saveEvent2");
var eleven = text.attr("id", "saveEvent3");
var twelve = text.attr("id", "saveEvent4");
var one = text.attr("id", "saveEvent5");
var two = text.attr("id", "saveEvent6");
var three = text.attr("id", "saveEvent7");
var four = text.attr("id", "saveEvent8");
var five = text.attr("id", "saveEvent9");

nine.text(localStorage.getItem("9"));
ten.text(localStorage.getItem("10"));
eleven.text(localStorage.getItem("11"));
twelve.text(localStorage.getItem("12"));
one.text(localStorage.getItem("13"));
two.text(localStorage.getItem("14"));
three.text(localStorage.getItem("15"));
four.text(localStorage.getItem("16"));
five.text(localStorage.getItem("17"));

var $eventTasks = [
    btn.attr("id", "saveEvent1").click(function(){
        localStorage.setItem("9", nine.val());
    }),
    btn.attr("id", "saveEvent2").click(function(){
        localStorage.setItem("10", ten.val());
    }),
    btn.attr("id", "saveEvent3").click(function(){
        localStorage.setItem("11", eleven.val());
    }),
    btn.attr("id", "saveEvent4").click(function(){
        localStorage.setItem("12", twelve.val());
    }),
    btn.attr("id", "saveEvent5").click(function(){
        localStorage.setItem("13", one.val());
    }),
    btn.attr("id", "saveEvent6").click(function(){
        localStorage.setItem("14", two.val());
    }),
    btn.attr("id", "saveEvent7").click(function(){
        localStorage.setItem("15", three.val());
    }),
    btn.attr("id", "saveEvent8").click(function(){
        localStorage.setItem("16", four.val());
    }),
    btn.attr("id", "saveEvent9").click(function(){
        localStorage.setItem("17", five.val());
    })
];

});


function events() {
    var storedEvents = JSON.parse(localStorage.getItem("storeEvents"));

    if ($storedEvents !== null) {
        $eventTasks = $storedEvents;
    }
}
function storedEvents (){
    localStorage.setItem("saveEvents", JSON.stringify($eventTasks))
}

$eventTasks.addEventListener("saveEvent", function(event){
    event.preventDefault();

    $eventTasks = dailyEvent.value.trim();

})

