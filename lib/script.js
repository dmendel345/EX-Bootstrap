// scrips for the web //

// $(document).ready(function () {

//     $("#content").load("main.html");

// });

$(document).ready(function () {

    $("#content").load("main.html");

    $("#mainPage").click(function() {
        $("#content").load("main.html");
    });

    $("#aboutPage").click(function() {
        $("#content").load("about.html");
    });

    $("#contactPage").click(function() {
        $("#content").load("contact.html");
    });

    $("#signUpPage").click(function() {
        $("#content").load("signup_form.html");
    });
});

