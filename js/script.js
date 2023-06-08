

$(document).ready(function(){
    $(".zone1").mouseover(function(){
        $(this).css({
            'background-color': 'red'
        })

    });
}) 


$(document).mousemove(function(event){
    $(".zone2").text(event.pageX+ "," +event.pageY);
});

$(".zone3").mouseout(function(){
    $(".zone3").css("background-color", "gray");
});

$(".zone4").mouseenter(function(){
    $(".zone4").css("background-color", "orange");
});

$(".zone5").mouseup(function(){
    $(this).css("background-color", "pink");
});

$(".zone6").mousedown(function(){
    $(this).css("background-color", "aqua");
});
  
$(".zone7").click(function(){
    alert("The paragraph was clicked.");
});

$(".zone8").dblclick(function(){
    alert("The paragraph was double-clicked");
});
$(".zone9").contextmenu(function(){
    $(".zone9")
});

$("input").blur(function(){
    alert("This input field has lost its focus.");
    $("input").css("background-color", "grey")    
});

$("input").change(function(){
    alert("The text has been changed.");
    $("input").css("background-color", "green")
});