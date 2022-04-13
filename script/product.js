// $('.slide-2').on('click', function(){
//     $('.slide-container').css('transform', 'translateX(-100vw)');
//     $('.slide-2').css('background','#90B74A')
//     $('.slide-1').css('background','#ccc')
// });
// $('.slide-1').on('click',function(){
//     $('.slide-container').css('transform', 'translateX(0)');
//     $('.slide-1').css('background','#90B74A')
//     $('.slide-2').css('background','#ccc')
// });

$('.bnr2').on('click', function(){
    $('.bnr2').css({ "background": "url(../images/chaeeun/intro-cont3-3-on.png)"});
    $('.bnr1').css({ "background": "url(../images/chaeeun/intro-cont3-2.png)"});
    $('.bnr3').css({ "background": "url(../images/chaeeun/intro-cont3-4.png)"});
    $('.bnr4').css({ "background": "url(../images/chaeeun/intro-cont3-5.png)"});
    $('.banner2').removeClass("d-none")	
    $('.banner2').addClass("show")	
    $('.banner1').removeClass("show")	
    $('.banner1').addClass("d-none")	
    $('.banner3').removeClass("show")	
    $('.banner3').addClass("d-none")	
    $('.banner4').removeClass("show")	
    $('.banner4').addClass("d-none")	
})

$('.bnr1').on('click', function(){
    $('.bnr1').css({ "background": "url(../images/chaeeun/intro-cont3-2-on.png)"});
    $('.bnr2').css({ "background": "url(../images/chaeeun/intro-cont3-3.png)"});
    $('.bnr3').css({ "background": "url(../images/chaeeun/intro-cont3-4.png)"});
    $('.bnr4').css({ "background": "url(../images/chaeeun/intro-cont3-5.png)"});
    $('.banner1').removeClass("d-none")	
    $('.banner1').addClass("show")	
    $('.banner2').removeClass("show")	
    $('.banner2').addClass("d-none")	
    $('.banner3').removeClass("show")	
    $('.banner3').addClass("d-none")	
    $('.banner4').removeClass("show")	
    $('.banner4').addClass("d-none")	
})

$('.bnr3').on('click', function(){
    $('.bnr3').css({ "background": "url(../images/chaeeun/intro-cont3-4-on.png)"});
    $('.bnr1').css({ "background": "url(../images/chaeeun/intro-cont3-2.png)"});
    $('.bnr2').css({ "background": "url(../images/chaeeun/intro-cont3-3.png)"});
    $('.bnr4').css({ "background": "url(../images/chaeeun/intro-cont3-5.png)"});
    $('.banner3').removeClass("d-none")	
    $('.banner3').addClass("show")	
    $('.banner1').removeClass("show")	
    $('.banner1').addClass("d-none")	
    $('.banner2').removeClass("show")	
    $('.banner2').addClass("d-none")	
    $('.banner4').removeClass("show")	
    $('.banner4').addClass("d-none")	
})

$('.bnr4').on('click', function(){
    $('.bnr4').css({ "background": "url(../images/chaeeun/intro-cont3-5-on.png)"});
    $('.bnr1').css({ "background": "url(../images/chaeeun/intro-cont3-2.png)"});
    $('.bnr3').css({ "background": "url(../images/chaeeun/intro-cont3-4.png)"});
    $('.bnr2').css({ "background": "url(../images/chaeeun/intro-cont3-3.png)"});
    $('.banner4').removeClass("d-none")	
    $('.banner4').addClass("show")	
    $('.banner1').removeClass("show")	
    $('.banner1').addClass("d-none")	
    $('.banner3').removeClass("show")	
    $('.banner3').addClass("d-none")	
    $('.banner2').removeClass("show")	
    $('.banner2').addClass("d-none")	
})