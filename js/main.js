let currentStep = 1;

$('.control-parent .control').focusout(function () {
  const currentValue = $(this).val().trim();
  let labelClass = '.lbl';
  let leftFull = '10px';
  if ($(this).hasClass('phone')) leftFull = '-70px';
  if (currentValue !== '') {
    $(this).parents('.control-parent').find(labelClass).css('top', '-8px')
    $(this).parents('.control-parent').find(labelClass).css('left', leftFull)
  } else {
    $(this).parents('.control-parent').find(labelClass).css('top', '15px')
    $(this).parents('.control-parent').find(labelClass).css('left', '20px')
  }
});

$('.control-parent .control').focus(function (e) {
  let labelClass = '.lbl';
  let left = '10px'
  if ($(this).hasClass('phone')) left = '-70px';
  $(this).parents('.control-parent').find(labelClass).css('top', '-8px');
  $(this).parents('.control-parent').find(labelClass).css('left', left);
});

$('.registeration-step .form-btn').click(function (e) {
  $('.error').css('display', 'none');

  switch (currentStep) {
    case 1:
      const firstName = $('input#first-name').val().trim();
      const lastName = $('input#last-name').val().trim();
      const mobNumber = $('input#mob-number').val().trim();
      const password = $('input#password').val().trim();
      const cond1 = firstName == '';
      const cond2 = lastName == '';
      const cond3 = mobNumber == '';
      const cond4 = password == '';
      const cond5 = password.length < 8 || !/\d/gi.test(password) || !/[a-z]/g.test(password) || !/[A-Z]/g.test(password);

      if (cond1) {
        $('.error.first-name').css('display', 'block');
      }
      if (cond2) {
        $('.error.last-name').css('display', 'block');
      }
      if (cond3) {
        $('.error.mob-number').css('display', 'block');
      }
      if (cond4) {
        $('.error.password').css('display', 'block');
      }
      if (cond5) {
        $('.error.password-2').css('display', 'block');
      }

      if (!cond1 && !cond2 && !cond3 && !cond4 && !cond5) {
        $('#step-1').css('display', 'none');
        $('#step-2').css('display', 'block');
        currentStep = 2;
      }

      break;
    case 2:
      const code = $('input#code').val().trim();
      const cond6 = code == '';
      if (cond6) {
        $('.error.code').css('display', 'block');
      }
      if (!cond6) {
        $('#step-2').css('display', 'none');
        $('#step-3').css('display', 'block');
        currentStep = 3;
      }
      break;
    case 3:
      const gender = $('select#gender').val().trim();
      const dob = $('input#dob').val().trim();
      const ethnicity = $('select#ethnicity').val().trim();
      const address = $('input#address').val().trim();
      const suburb = $('input#suburb').val().trim();
      const city = $('input#city').val().trim();
      const postalCode = $('input#postal-code').val().trim();
      const cond7 = gender == '';
      const cond8 = dob == '';
      const cond9 = ethnicity == '';
      const cond10 = address == '';
      const cond11 = suburb == '';
      const cond12 = city == '';
      const cond13 = postalCode == '';

      if (cond7) {
        $('.error.gender').css('display', 'block');
      }
      if (cond8) {
        $('.error.dob').css('display', 'block');
      }
      if (cond9) {
        $('.error.ethnicity').css('display', 'block');
      }
      if (cond10) {
        $('.error.address').css('display', 'block');
      }
      if (cond11) {
        $('.error.suburb').css('display', 'block');
      }
      if (cond12) {
        $('.error.city').css('display', 'block');
      }
      if (cond13) {
        $('.error.postal-code').css('display', 'block');
      }
      if (!cond7 && !cond8 && !cond9 && !cond10 && !cond11 && !cond12 && !cond13) {
        // $('#location-model').css('display', 'flex');
        $('#step-3').css('display', 'none');
        $('#step-4').css('display', 'block');
        currentStep = 4;
      }
      break;
    case 4:
      const privacyPolicy = document.querySelector('input#privacy-policy').checked;
      const termsConditions = document.querySelector('input#terms-and-conditions').checked;
      const rewards = document.querySelector('input#rewards').checked;
      const updates = document.querySelector('input#updates').checked;
      const cond14 = privacyPolicy == false
      const cond15 = termsConditions == false
      const cond16 = rewards == false
      const cond17 = updates == false
      if (cond14) {
        $('.error.privacy-policy-checkbox').css('display', 'block');
      }
      if (cond15) {
        $('.error.terms-and-conditions-checkbox').css('display', 'block');
      }
      if (cond16) {
        $('.error.rewards').css('display', 'block');
      }
      if (cond17) {
        $('.error.updates').css('display', 'block');
      }

      if (!cond14 && !cond15 && !cond16 && !cond17) {
        $('#notification-model').css('display', 'flex');
      }

      break;
    default:
      break;
  }
});

$('#hide-show-password').click(function (e) {
  const currentType = $('#password').attr('type');
  if (currentType == 'password') {
    $('#password').attr('type', 'text')
  } else {
    $('#password').attr('type', 'password')
  }
});

$('#location-model-next-button').click(function (e) {
  e.preventDefault();
  $('#step-3').css('display', 'none');
  $('#step-4').css('display', 'block');
  $('#location-model').css('display', 'none');
  currentStep = 4;
});

$('#notification-model-next-button, #notification-model-next-button-two').click(function (e) {
  e.preventDefault();
  $('#notification-model').css('display', 'none');
  $('#step-4').css('display', 'none');
  $('#step-5').css('display', 'block');
  currentStep = 5;
});

$('.model-cancel').click(function (e) {
  e.preventDefault();
  $(this).parent().parent().parent().css('display', 'none');
});

$('.closed-btn').click(function (e) {
  e.preventDefault();
  $(this).parent().parent().css('display', 'none');
});



var input = document.querySelector(".phone");
window.intlTelInput(input, {
  // allowDropdown: false,
  // autoHideDialCode: false,
  // autoPlaceholder: "off",
  dropdownContainer: document.body,
  excludeCountries: ["us"],
  formatOnDisplay: false,
  geoIpLookup: function (callback) {
    $.get("http://ipinfo.io", function () {}, "jsonp").always(function (resp) {
      var countryCode = (resp && resp.country) ? resp.country : "";
      callback(countryCode);
    });
  },
  // hiddenInput: "full_number",
  // initialCountry: "auto",
  // localizedCountries: { 'de': 'Deutschland' },
  // nationalMode: false,
  // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  // placeholderNumberType: "MOBILE",
  // preferredCountries: ['cn', 'jp'],
  separateDialCode: true,
  utilsScript: "build/js/utils.js",
});