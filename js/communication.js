$('.communication .form-btn').click(function (e) {
  $('.error').css('display', 'none');
  const media1 = document.querySelector('input#media-1').checked;
  const media2 = document.querySelector('input#media-2').checked;

  const cond1 = media1 || media2;

  if (!cond1) {
    $('.error.comm-error').css('display', 'block');
  } else {
    var label = 'SMS';
    var img = './img/sms.png';
    if (media2) {
      label = 'Email';
      img = './img/email.png';
    };
    $('.comm-select').text(label);
    $('.comm-select-img').attr('src', img);

    $('#step-2').css('display', 'block');
    $('#step-1').css('display', 'none');
  }
});

$('.comm-edit').click(function (e) {
  $('#step-2').css('display', 'none');
  $('#step-1').css('display', 'block');
});