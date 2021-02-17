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
        
        var count;
        count = 0;
        
        $("#lb").click(function(){
                count++;
        });
        
        if(count != 0)
        {
                $("body").css({"background-color": "steelBlue"});
        } /*else
        {
                $("body").css({"background-color": "skyBlue"});
        }
        */
        
        $("#h1cue").click(function(){
           $("#html_img1_cue").fadeIn("slow");
        });
        
});
