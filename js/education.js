$('.education .form-btn').click(function (e) {
  $('.error').css('display', 'none');
  const edu1 = document.querySelector('input#edu-1').checked;
  const edu2 = document.querySelector('input#edu-2').checked;
  const edu3 = document.querySelector('input#edu-3').checked;
  const edu4 = document.querySelector('input#edu-4').checked;
  const edu5 = document.querySelector('input#edu-5').checked;
  const edu6 = document.querySelector('input#edu-6').checked;
  const edu7 = document.querySelector('input#edu-7').checked;
  const edu8 = document.querySelector('input#edu-8').checked;
  const edu9 = document.querySelector('input#edu-9').checked;

  const cond1 = edu1 || edu2 || edu3 || edu4 || edu5 || edu6 || edu7 || edu8 || edu9;

  if (!cond1) {
    $('.error.edu-error').css('display', 'block');
  } else {
    var edu = 'No formal education';
    if (edu2) edu = 'Some primary school';
    if (edu3) edu = 'Primary school completed';
    if (edu4) edu = 'Some high school';
    if (edu5) edu = 'Matriculated';
    if (edu6) edu = 'Some university';
    if (edu7) edu = 'University completed';
    if (edu8) edu = 'Any other post-matric qualifiaction';
    if (edu9) edu = 'Prefer not to say';

    $('.edu-selected').text(edu);

    $('#step-1').css('display', 'none');
    $('#step-2').css('display', 'block');
  }
});

$('.edu-edit').click(function (e) {
  $('#step-2').css('display', 'none');
  $('#step-1').css('display', 'block');
});

$('#edu-step').click(function (e) { 
  e.preventDefault();
  $('#step-1').css('display', 'none');
  $('#step-2').css('display', 'block');
});