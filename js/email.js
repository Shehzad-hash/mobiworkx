$('.email-address .form-btn').click(function (e) { 
    $('.error').css('display', 'none');
    const emailPassword = $('input#email-current-pass').val().trim();
    const newEmail = $('input#new-email').val().trim();
    const cond1 = emailPassword == '';
    const cond2 = newEmail == '';
    if (cond1) {
        $('.error.email-current-pass').css('display', 'block');
        $('.error.email-current-pass-2').css('display', 'block');
      }
      if (cond2) {
        $('.error.new-email').css('display', 'block');
        $('.error.new-email-2').css('display', 'block');
      }
      if (!cond1 && !cond2) {
        $('#show-modal').css('display', 'flex');
      }
});