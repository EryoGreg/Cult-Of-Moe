$( document ).ready(function() {

    //Transparence de la navbar
    $('#navbar').css('background-color','unset');
    $('#navbar').css('border-color', 'transparent');
    $('#navbar-collapsed').css('background-color','unset');
    $('#navbar-collapsed').css('border-color', 'transparent');


});

$(window).scroll(function () {
    var scrool = $(window).scrollTop();

    if (scrool !== 0) {
        $('#navbar').css('background-color', '');
        $('#navbar-collapsed').css('background-color', '','border-color', '');
    }else {
        //transparent
        $('#navbar').css('background-color','inherit');
        $('#navbar').css('border-color', 'transparent');
        $('#navbar-collapsed').css('background-color','inherit');
        $('#navbar-collapsed').css('border-color', 'transparent');
    }
});