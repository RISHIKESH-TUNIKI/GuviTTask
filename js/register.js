$(document).ready(function () {
    $('#registerbtn').click(function () {
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();

        console.log("Hello")
        // Send registration details and URL parameters to register.php using AJAX
        $.ajax({
            type: 'POST',
            url: 'php/register.php',
            data: {
                username: username,
                email: email,
                password: password,
            },
            success: function (response) {
                console.log(response);
                // Handle registration success or error
            }
        });
    });
});
