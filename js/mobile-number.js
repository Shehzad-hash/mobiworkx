$('.save-btn').click(function (e) {
  $('.error').css('display', 'none');
  const currentPassword = $('input#current-pass').val().trim();
  const telNumber = $('input#mob-number').val().trim();

  const cond1 = currentPassword == '';
  const cond2 = telNumber == '';
  if (cond1) {
    $('.error.current-pass').css('display', 'block');
    $('.error.current-pass-2').css('display', 'block');
  }
  if (cond2) {
    $('.error.tel').css('display', 'block');
    $('.error.tel-2').css('display', 'block');
  }
  if (!cond1 && !cond2) {
    $('.verfication-site').css('display', 'block')
  }
});

$('.verify-btn').click(function (e) {
  const codePassword = $('input#code').val().trim();
  const cond3 = codePassword == '';

  if (cond3) {
    $('.error.code').css('display', 'block');
    $('.error.code-error-2').css('display', 'block');
  } else {
    $('#show-modal').css('display', 'flex');
    setTimeout(() => {
      $('#show-modal').css('display', 'none');
      window.location.href = './account-setting.html'
    }, 3000);
  }
});