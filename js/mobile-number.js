$('.mobile-number .form-btn').click(function (e) { 
    $('.error').css('display', 'none');
    const currentPassword = $('input#current-pass').val().trim();
    const telNumber = $('input#mob-number').val().trim();
    const codePassword = $('input#code').val().trim();
    const cond1 = currentPassword == '';
    const cond2 = telNumber == '';
    const cond3 = codePassword == '';
    if (cond1) {
        $('.error.current-pass').css('display', 'block');
        $('.error.current-pass-2').css('display', 'block');
      }
      if (cond2) {
        $('.error.tel').css('display', 'block');
        $('.error.tel-2').css('display', 'block');
      }
      if (cond3) {
        $('.error.code').css('display', 'block');
      }
      if (!cond1 && !cond2 && !cond3) {
        $('#show-modal').css('display', 'flex');
        $('#show-modal').fadeIn(2000, function () {
          $('#show-modal').fadeOut(3000);
      });
      }
});