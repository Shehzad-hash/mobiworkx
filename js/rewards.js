$('.show-link.more').click(function (e) {
    e.preventDefault();
    $('.complete-step.hide-step').css('display', 'block');
    $('.show-link.less').css('display', 'block');
    $('.show-link.more').css('display', 'none');
});
$('.show-link.less').click(function (e) {
    e.preventDefault();
    $('.complete-step.hide-step').css('display', 'none');
    $('.show-link.more').css('display', 'block');
    $('.show-link.less').css('display', 'none');
});
$('.accordion').click(function () {
    $(this).toggleClass("active");
    $(this).parent().find(".panel").toggleClass("active");

})

$('#airtime-btn').click(function (e) { 
    e.preventDefault();
    $('#airtime-modal').css('display', 'flex');
});

$('#airtime-confirm-btn').click(function (e) { 
    e.preventDefault();
    $('#airtime-modal-1').css('display', 'none');
    $('#airtime-modal-2').css('display', 'block');
});

$('#gcodes-btn').click(function (e) { 
    e.preventDefault();
    $('#gcodes-modal').css('display', 'flex');
});

$('#gcodes-confirm-btn').click(function (e) { 
    e.preventDefault();
    $('#gcodes-modal-1').css('display', 'none');
    $('#gcodes-modal-2').css('display', 'block');
});