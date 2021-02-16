$(document).ready(function() {
        $("#cue").click(function(){
                $(".CSSEdit").slideToggle("slow");
        });
        
        $("#jsq").click(function(){
                $("#fi").fadeIn("slow", function(){ 
                        $("#fo").fadeIn("slow", function(){
                                $("#fo").delay(800).fadeOut("slow");
                        });
                });         
        });
        
        var count=0;
        $("#lb").click(function(){
                count++;
        });
        if(count == 0 || count == 2 || count == 4)
        {
                $("body").css("background-color": "steelBlue");
        } else
        {
                $("body").css("background-color": "skyBlue");
        }
        /*
        $("#h1cue").click(function(){
           $("#html_dm1_cue").fadeIn("slow");
        });
        */
});
