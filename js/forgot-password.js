$('#forgot-pass .forgot-btn').click(function (e) { 
    e.preventDefault();
    $('#forgot-pass').css('display', 'none');
    $('#forgot-pass-2').css('display', 'block');
});