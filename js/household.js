var marriage = 'Married or living with a partner';
var ages = ['2 years or younger'];
var page = 'result';

$(document).ready(function () {
  fillResults();
});

function fillResults () {
  $('.ages-answers').html('');
  for (let i = 0; i < ages.length; i++) {
    $(`<div class="answer mb-2">${ages[i]}</div>`).appendTo('.ages-answers');
  }

  $('.marriage').text(marriage);
}

$('.household .form-btn').click(function (e) {
  $('.error').css('display', 'none');

  switch (page) {
    case 'marraige':
      const you1 = document.querySelector('input#you-1').checked;
      const you2 = document.querySelector('input#you-2').checked;
      const you3 = document.querySelector('input#you-3').checked;
      const cond1 = you1 || you2 || you3;
      if (!cond1) {
        $('.error.are-you-error').css('display', 'block');
        break;
      }
      if (you1) marriage = 'Married or living with a partner';
      if (you2) marriage = 'Single, divorced or widowed';
      if (you3) marriage = 'Prefer not to say';
      $('#step-1').css('display', 'none');
      $('#step-2').css('display', 'block');      
      $('.answer.blue-color').css('display', 'none');      
      $('.answer.hide-answer').css('display', 'block');      
      break;
      case 'age':
        const years2 = document.querySelector('input#two-years').checked;
        const years3 = document.querySelector('input#three-years').checked;
      const years7 = document.querySelector('input#seven-years').checked;
      const years13 = document.querySelector('input#thirteen-years').checked;
      const years19 = document.querySelector('input#ninteen-years').checked;
      const age1 = document.querySelector('input#age-1').checked;
      const age2 = document.querySelector('input#age-2').checked;
      const cond2 = years2 || years3 || years7 || years13 || years19 || age1 || age2;
      if (!cond2) {
        $('.error.age-error').css('display', 'block');
        break;
      }
      ages = [];
      if (years2) ages.push('2 years or younger');
      if (years3) ages.push('3 - 6 years');
      if (years7) ages.push('7 - 12 years');
      if (years13) ages.push('13 - 18 years');
      if (years19) ages.push('19 years or older');
      if (age1) ages.push('No children in household');
      if (age2) ages.push('Prefer not to say');
      $('#step-3').css('display', 'none');
      $('#step-2').css('display', 'block');      
      break;
  }
  fillResults();
});

$('.household-edit').click(function (e) {
  page = 'marraige';
  $('#step-2').css('display', 'none');
  $('#step-1').css('display', 'block');
});

$('.household-edit-2').click(function (e) {
  page = 'age';
  $('#step-2').css('display', 'none');
  $('#step-3').css('display', 'block');
});

$('.remove-checks').click(function (e) { 
  
  document.querySelector('input#two-years').checked = false;
  document.querySelector('input#three-years').checked = false;
  document.querySelector('input#seven-years').checked = false;
  document.querySelector('input#thirteen-years').checked = false;
  document.querySelector('input#ninteen-years').checked = false;
});

$('.add-checks').click(function (e) { 
  document.querySelector('input#age-1').checked = false;
  document.querySelector('input#age-2').checked = false;
});