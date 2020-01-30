$(document).ready(function(){
    
    var date = moment().format('MMMM DD, YYYY');
    
    var $currentDate = $(".currentDate");
    $currentDate.text(date);
    console.log($currentDate)

    var test = false;

    var hour24 = moment().format('H');
    var hour12 = moment().format('h');

   if (test) {
        hour24 = 13;
        hour12 = 1;
  }

    var row = $(".dailyEvent")
    var value = $("value")
   
    changeRowColor(row, value);
  
    function changeRowColor (row, value) {
    if (test) {console.log("rowColor", hour24, value);}

    if (value < hour24) {
        if (test) {console.log("lessThan");}
        row.css("background-color", "lightgray")
    } else if (value > hour24) {
        if (test) {console.log("greaterThan");}
        row.css("background-color", "lightgreen")
    } else {
        if (test) {console.log("equal");}
        row.css("background-color", "red")
    }
    };

var btn = $("button");
var text = $("dailyEvent");
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

btn.attr("id", "saveEvent1").click(function(){
    localStorage.setItem("9", nine.val());
})
btn.attr("id", "saveEvent2").click(function(){
    localStorage.setItem("10", ten.val());
})
btn.attr("id", "saveEvent3").click(function(){
    localStorage.setItem("11", eleven.val());
})
btn.attr("id", "saveEvent4").click(function(){
    localStorage.setItem("12", twelve.val());
})
btn.attr("id", "saveEvent5").click(function(){
    localStorage.setItem("13", one.val());
})
btn.attr("id", "saveEvent6").click(function(){
    localStorage.setItem("14", two.val());
})
btn.attr("id", "saveEvent7").click(function(){
    localStorage.setItem("15", three.val());
})
btn.attr("id", "saveEvent8").click(function(){
    localStorage.setItem("16", four.val());
})
btn.attr("id", "saveEvent9").click(function(){
    localStorage.setItem("17", five.val());
})
});
