 $(document).ready(function() {
             $(".sort").hide();
            
         });
        $("#click1").on("click", function(){
            	$("#ans").text($("#search").val()+" Sort")
              $(".sort").hide();
              $("."+$("#search").val()).show()
          })