var color;
var canvas;
var context;
var lastEvent;
var isMouseDown;

$(document).ready(function () {
    
    color = $(".selected").css("background-color");
    canvas = $("canvas")[0];
    context = canvas.getContext("2d");
    isMouseDown = false;
    
    $(canvas).mousedown(function(event){
        lastEvent = event;
        isMouseDown = true;
        context.beginPath();
    });
    
    $(canvas).mousemove(function(event){
        if (isMouseDown){
            context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
            context.lineTo(event.offsetX, event.offsetY);
            context.strokeStyle = color;
            context.stroke();
            lastEvent = event;
        }
    });
    
    $(canvas).mouseup(function(){
        isMouseDown = false;
    });
    

    $(".controls").find("li").click(function(){
          processSelectColor($(this));
    });

    $("#revealColorSelect").click(function(){

        $("#colorSelect").toggle();
    });

    $("input[type=range]").change(function(){
      var r = $("#red").val();
      var g = $("#green").val();
      var b = $("#blue").val();
      $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
    });

    $("#addNewColor").click(function(){
      var $newColor = $("<li></li>");
      
      $newColor.css("background-color", $("#newColor").css("background-color"));
      $(".controls ul").append($newColor);

      $newColor.click(function(){
            processSelectColor($(this));

      });
        
      $newColor.click();
    });
    
    


});


function processSelectColor($boxColor){
    
    $(".controls").find(".selected").removeClass("selected");
    $boxColor.addClass("selected");
    color = $boxColor.css("background-color");
}