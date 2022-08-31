$(document).ready(function() {
    $("#moment").text(moment().format("MMMM Do YY, h:mm:ss"));
    $(".saveBtn").on("click",function() {
console.log(this);

var text = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");
localStorage.setItem(time ,text);
console.log(time)
    })
$('#hour1 .description').val(localStorage.getItem('hour1')) ;
$('#hour2 .description').val(localStorage.getItem('hour2')) ;
$('#hour3 .description').val(localStorage.getItem('hour3')) ;
$('#hour4 .description').val(localStorage.getItem('hour4')) ;
$('#hour5 .description').val(localStorage.getItem('hour5')) ;
$('#hour6 .description').val(localStorage.getItem('hour6')) ;
$('#hour7 .description').val(localStorage.getItem('hour7')) ;
$('#hour8 .description').val(localStorage.getItem('hour8')) ;
$('#hour9 .description').val(localStorage.getItem('hour9')) ;
$('#hour10 .description').val(localStorage.getItem('hour10')) ;
function currentTime(){
    var later = moment().hour()-7;
    console.log(later);
    $('.description').each(function () {
        var timeBlock= $(this).parent().attr('id').split('hour')[1];
        console.log(timeBlock);
        console.log(later, timeBlock);
        if (later < timeBlock){
            $(this).addClass('past');
        }
        else if (later == timeBlock){
            $(this).addClass('present');
        }
        else {
            $(this).addClass('future');
        }
    }
    )
}
currentTime();
})
