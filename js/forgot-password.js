// $('#forgot-pass .forgot-btn').click(function (e) { 
//     e.preventDefault();
//     $('#forgot-pass').css('display', 'none');
//     $('#forgot-pass-2').css('display', 'block');
// });

$('.forgot-password-page #reset-btn').click(function (e) {
    const forgotPassword = $('input#mob-number').val().trim();
    const cond1 = forgotPassword == '';

    if (cond1) {
        $('.error.forgot-pass').css('display', 'block');
        $('.error.forgot-pass-2').css('display', 'block');
    } else {
        $('#forgot-pass').css('display', 'none');
        $('#forgot-pass-2').css('display', 'block');
    }
});