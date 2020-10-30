$('.close-account').click(function (e) {
    // e.preventDefault();
    $('#closed-modal').css('display', 'flex');
});

$('#proceed').click(function (e) {
    e.preventDefault();
    $('#modal-2').css('display', 'block');
    $('#modal-1').css('display', 'none');
});

$('.goto-landing').click(function (e) {
    e.preventDefault();
    window.location.href = './mobiworkx-landing-page.html'
});
document.querySelector('#dob').defaultValue = "1997-10-21";