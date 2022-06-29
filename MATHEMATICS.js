$(document).ready(function() {
            $(".step").hide();
            $(".search").hide();
            $(".step-1").show();
        });
        $("#click1").on("click", function(){
        	    $(".ans").text("");
            	$(".ans1").text($("#abstract").val() + " Algorithm")
            	$(".search").hide();
                $("."+$("#abstract").val()).show()
          })
        $("#click2").on("click", function(){
        	    $(".ans").text("");
            	$(".ans2").text($("#computational").val() + " Algorithm")
            	$(".search").hide();
                $("."+$("#computational").val()).show()
          })
        $("#click3").on("click", function(){
        	    $(".ans").text("");
            	$(".ans3").text($("#geometry").val() + " Algorithm")
            	$(".search").hide();
                $("."+$("#geometry").val()).show()
          })
        $("#click4").on("click", function(){
        	    $(".ans").text("");
            	$(".ans4").text($("#numerical").val() + " Algorithm")
            	$(".search").hide();
                $("."+$("#numerical").val()).show()
          })
        $("#click5").on("click", function(){
        	    $(".ans").text("");
            	$(".ans5").text($("#linear").val() + " Algorithm")
            	$(".search").hide();
                $("."+$("#linear").val()).show()
          })
        function buttonclick(nextStep)
        {
        	$(".step-2").hide();
        	$(".step-3").hide();
        	$(".step-4").hide();
        	$(".step-5").hide();
        	$(".step-6").hide();
            $(".step-"+nextStep).fadeIn(500, function(){
            	// $(".step-"+nextStep).show()
            });
            event.stopPropagation();
        }