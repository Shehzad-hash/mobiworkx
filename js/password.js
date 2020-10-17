$('.password .form-btn').click(function (e) { 
    $('.error').css('display', 'none');
    const currentPassword = $('input#current-password').val().trim();
    const newPassword = $('input#new-password').val().trim();
    const confirmPassword = $('input#confirm-password').val().trim();
    const cond1 = currentPassword == '';
    const cond2 = newPassword == '';
    const cond3 = confirmPassword == '';
    if (cond1) {
        $('.error.current').css('display', 'block');
        $('.error.current-2').css('display', 'block');
      }
      if (cond2) {
        $('.error.new').css('display', 'block');
      }
      if (cond3) {
        $('.error.confirm').css('display', 'block');
        $('.error.confirm-2').css('display', 'block');
      }
      if (cond4) {
        $('.error.new').css('display', 'block');
      }
      if (!cond1 && !cond2 && !cond3) {
        $('#show-modal').css('display', 'flex');
      }
});