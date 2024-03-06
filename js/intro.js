//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){

    $("#title").hide();

    $("#one").click(function(){
       
        $("#home-screen").hide()
        $("#title").show()
        $("body").css("background-image", "url(media/images/Black-Transparent-Gradient.png)")
        $("body").css("background-size", "cover" )
        $("body").css("background-color", "white" )

    });

    $("R").keypress(function(){

        $("#home-screen").hide()
        $("#title").show()
        $("body").css("background-image", "url(media/images/Black-Transparent-Gradient.png)")
        $("body").css("background-size", "cover" )
        $("body").css("background-color", "white" )

    })

})
