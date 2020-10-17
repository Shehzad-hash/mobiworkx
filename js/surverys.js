$('.survey-cards-parent .survey-card').click(function (e) { 
    $('#survery-page-1').css('display', 'none');
    $('#survery-page-2').css('display', 'block');
    
});

$('#home-btn').click(function (e) { 
    $('#survery-page-2').css('display', 'none');
    $('#survery-page-1').css('display', 'block');
    
});