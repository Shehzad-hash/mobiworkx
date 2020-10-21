$('.close-account').click(function (e) { 
    e.preventDefault();
    $('#closed-modal').css('display', 'flex');
});

$('#proceed').click(function (e) { 
    e.preventDefault();
    $('#modal-2').css('display', 'block');
    $('#modal-1').css('display', 'none');
});
document.querySelector('#dob').defaultValue = "1997-10-21";
