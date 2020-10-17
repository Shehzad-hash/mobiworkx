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
$('.accordion').click(function(){
    $(this).toggleClass("active");
    $(this).parent().find(".panel").toggleClass("active");

})