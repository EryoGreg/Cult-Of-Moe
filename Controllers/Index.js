$( document ).ready(function() {

    //Transparence de la navbar
    $("#navbar").css("background-color","unset");
    $("#navbar").css("border-color", "transparent");
    $("#navbar-collapsed").css("background-color","unset");
    $("#navbar-collapsed").css("border-color", "transparent");


});

window.onscroll = function (ev) {
    if  (ev.pageY !== 0) {
        //    bloc
        $("#navbar").css("background-color", "");
        $("#navbar-collapsed").css("background-color", "","border-color", "");
        // $(".navbar-default .navbar-nav > .active > a").css("background-color", "unset");
        // $(".navbar-default .navbar-nav > .active > a:focus").css("background-color", "unset");
        // $(".navbar-default .navbar-nav > .active > a:hover").css("background-color", "unset");
    }else {
        //transparent
        $("#navbar").css("background-color","unset");
        $("#navbar").css("border-color", "transparent");
        $("#navbar-collapsed").css("background-color","unset");
        $("#navbar-collapsed").css("border-color", "transparent");
    }
};