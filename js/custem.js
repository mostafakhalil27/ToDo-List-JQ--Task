$(document).ready(function(){
    $("#ok").on("click" , function(){
       var task = $.trim($("#task").val()); 
        $("#task").val(" ");
        if (task !=""){
            $("ul").append("<li>"+ task + "</li>")
        }
        $("li").on("click" , function(){
            $(this).css("text-decoration" , "line-through");
        })
        $("li").on("dblclick" , function(){
            $(this).remove()
        })
       
    })



})


    