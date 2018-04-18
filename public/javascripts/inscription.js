// $( document ).ready(function() {
//
// });

function loginfunc () {
    var email = $("#email").val();
    var pass = $("#password").val();


    $.post("http://localhost:3000/login", {
        email: email,
        password: pass

    }, function () {
        alert("infos envoyées - email : "+email+" pass : "+pass);
    });


}





