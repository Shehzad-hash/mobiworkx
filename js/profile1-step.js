$('.profile1-step .form-btn').click(function (e) {
  $('.error').css('display', 'none');

  switch (currentStep) {
    case 1:
      const mobNumber = $('input#mob-number').val().trim();
      // const email = $('input#email').val().trim();
      const password = $('input#password').val().trim();
      const cond1 = mobNumber == '';
      // const cond2 = email == '';
      const cond3 = password == '';
      if (cond1) {
        $('.error.mob-error').css('display', 'block');
      }
      // if (cond2) {
      //   $('.error.email-error').css('display', 'block');
      // }
      if (cond3) {
        $('.error.password-error').css('display', 'block');
      }

      if ((!cond1) && !cond3) {
        $('#step-1').css('display', 'none');
        $('#step-2').css('display', 'block');
        $('.form-header').css('display', 'none');
        currentStep = 2;
      }

      break;

    case 2:
      const sink1 = document.querySelector('input#sink-1').checked;
      const sink2 = document.querySelector('input#sink-2').checked;
      const house1 = document.querySelector('input#house-1').checked;
      const house2 = document.querySelector('input#house-2').checked;
      const service1 = document.querySelector('input#service-1').checked;
      const service2 = document.querySelector('input#service-2').checked;
      const car1 = document.querySelector('input#car-1').checked;
      const car2 = document.querySelector('input#car-2').checked;
      const oven1 = document.querySelector('input#oven-1').checked;
      const oven2 = document.querySelector('input#oven-2').checked;

      const cond4 = sink1 || sink2;
      const cond5 = house1 || house2;
      const cond6 = service1 || service2;
      const cond7 = car1 || car2;
      const cond8 = oven1 || oven2;

      if (!cond4) {
        $('.error.sink-error').css('display', 'block');
      }
      if (!cond5) {
        $('.error.house-error').css('display', 'block');
      }
      if (!cond6) {
        $('.error.service-error').css('display', 'block');
      }
      if (!cond7) {
        $('.error.car-error').css('display', 'block');
      }
      if (!cond8) {
        $('.error.oven-error').css('display', 'block');
      }
      if (cond4 && cond5 && cond6 && cond7 && cond8) {
        $('#step-2').css('display', 'none');
        $('#step-3').css('display', 'block');
        currentStep = 3;
      }
      break;

    case 3:
      const post1 = document.querySelector('input#post-1').checked;
      const post2 = document.querySelector('input#post-2').checked;

      const cond9 = post1 || post2;

      if (!cond9) {
        $('.error.post-error').css('display', 'block');
      } else {
        $('#step-3').css('display', 'none');
        $('#step-4').css('display', 'block');
        currentStep = 4;
      }
      break;

    case 4:
      const income1 = document.querySelector('input#income-1').checked;
      const income2 = document.querySelector('input#r-800').checked;
      const income3 = document.querySelector('input#r-500').checked;
      const income4 = document.querySelector('input#r-501').checked;
      const income5 = document.querySelector('input#r-10').checked;
      const income6 = document.querySelector('input#r-17').checked;
      const income7 = document.querySelector('input#r-24').checked;
      const income8 = document.querySelector('input#r-31').checked;
      const income9 = document.querySelector('input#r-38').checked;
      const income10 = document.querySelector('input#r-45').checked;
      const income11 = document.querySelector('input#r-52').checked;
      const income12 = document.querySelector('input#r-60').checked;
      const income13 = document.querySelector('input#r-100').checked;
      const income14 = document.querySelector('input#mr-100').checked;
      const income15 = document.querySelector('input#dont').checked;
      const income16 = document.querySelector('input#not-say').checked;

      const cond10 = income1 || income2 || income3 || income4 || income5 || income6 || income7 || income8 || income9 || income10 || income11 || income12 || income13 || income14 || income15 || income16;

      if (!cond10) {
        $('.error.income-error').css('display', 'block');
      } else {
        $('#step-4').css('display', 'none');
        $('#step-5').css('display', 'block');
        currentStep = 5;
      }
      break;

    case 5:
      const household1 = document.querySelector('input#household-1').checked;
      const household2 = document.querySelector('input#household-2').checked;
      const household3 = document.querySelector('input#household-3').checked;
      const household4 = document.querySelector('input#household-4').checked;
      const household5 = document.querySelector('input#household-5').checked;
      const household6 = document.querySelector('input#household-6').checked;
      const household7 = document.querySelector('input#household-7').checked;
      const household8 = document.querySelector('input#household-8').checked;
      const household9 = document.querySelector('input#household-9').checked;
      const household10 = document.querySelector('input#household-10').checked;
      const household11 = document.querySelector('input#household-11').checked;
      const household12 = document.querySelector('input#household-12').checked;
      const household13 = document.querySelector('input#household-13').checked;
      const household14 = document.querySelector('input#household-14').checked;
      const household15 = document.querySelector('input#household-15').checked;
      const household16 = document.querySelector('input#household-16').checked;

      const cond11 = household1 || household2 || household3 || household4 || household5 || household6 || household7 || household8 || household9 || household10 || household11 || household12 || household13 || household14 || household15 || household16;

      if (!cond11) {
        $('.error.household-error').css('display', 'block');
      } else {
        $('#step-5').css('display', 'none');
        $('#step-6').css('display', 'block');
        currentStep = 6;
      }
      break;
    default:
      break;
  }

  const newProgress = (currentStep - 1) * 10;
  $('.custom-progress .progress-level').css('width', newProgress + '%');
});

$(".next-opt input[type='radio']").change(function (e) {
  console.log(currentStep)
  switch (currentStep) {
    case 6:
      $('#step-6').css('display', 'none');
      $('#step-7').css('display', 'block');
      currentStep = 7;
      break;
    case 7:
      $('#step-7').css('display', 'none');
      $('#step-8').css('display', 'block');
      currentStep = 8;
      break;
    case 8:
      $('#step-8').css('display', 'none');
      $('#step-9').css('display', 'block');
      currentStep = 9;
      break;
    case 9:
      $('#step-9').css('display', 'none');
      $('#step-10').css('display', 'block');
      currentStep = 10;
      break;
    case 10:
      $('#step-10').css('display', 'none');
      $('#step-11').css('display', 'block');
      currentStep = 11;
      break;
    case 11:
      $('#step-11').css('display', 'none');
      $('#step-12').css('display', 'block');
      currentStep = 12;
      break;
    default:
      break;
  }

  const newProgress = (currentStep - 1) * 10;
  $('.custom-progress .progress-level').css('width', newProgress + '%');
});
