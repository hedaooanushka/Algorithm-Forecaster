$(document).ready(function() {
            $(".search").hide();
            $(".step").hide();
            $(".step-1").show();
        });

function buttonclick(nextStep)
{
    $("#step-"+nextStep).show()
    $(".step-"+nextStep).fadeIn(500, function(){
      // $(".step-"+nextStep).show()
    });
    event.stopPropagation();
}