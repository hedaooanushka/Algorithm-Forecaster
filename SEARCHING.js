$(document).ready(function() {
             $(".search").hide();
});
        $("#click1").on("click", function(){
            	$("#ans").text($("#search").val()+" Algorithm")
              $(".search").hide();
              $("."+$("#search").val()).show()
          })