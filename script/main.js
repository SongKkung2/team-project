$('.slide-2').on('click', function(){
    $('.slide-container').css('transform', 'translateX(-100vw)');
    $('.slide-2').css('background','#90B74A')
    $('.slide-1').css('background','#ccc')
});
$('.slide-1').on('click',function(){
    $('.slide-container').css('transform', 'translateX(0)');
    $('.slide-1').css('background','#90B74A')
    $('.slide-2').css('background','#ccc')
});
var now =1;
$('.next').on('click',function(){
    if(now == 1){
        $('.slide-container').css('transform', 'translateX(-100vw)')
        $('.slide-2').css('background','#90B74A')
        $('.slide-1').css('background','#ccc')
        now +=1;    
    }else if (now == 2){
        $('.slide-container').css('transform', 'translateX(0)')
        $('.slide-1').css('background','#90B74A')
        $('.slide-2').css('background','#ccc')
        now = 1
    }
})
$('.before').on('click',function(){
    if(now==1){
        $('.slide-container').css('transform', 'translateX(-100vw)')
        $('.slide-2').css('background','#90B74A')
        $('.slide-1').css('background','#ccc')
        now +=1;
    }else if (now ==2){
        $('.slide-container').css('transform', 'translateX(0)')
        $('.slide-1').css('background','#90B74A')
        $('.slide-2').css('background','#ccc')
        now =1;
    }
})





// $('.banner-2').on('click', function(){
//     $('.banner-wrap').css('transform', 'translateX(-100vw)');
// });
// $('.banner-3').on('click', function(){
//     $('.banner-wrap').css('transform', 'translateX(-200vw)');
// });
// $('.banner-4').on('click', function(){
//     $('.banner-wrap').css('transform', 'translateX(-300vw)');
// });
// $('.banner-1').on('click', function(){
//     $('.banner-wrap').css('transform', 'translateX(0)');
// });

$('.bnr-2').on('click', function(){
    $('.banner2').addClass("show")
    $('.banner2').removeClass("d-none")

    $('.banner1').removeClass("show")
    $('.banner1').addClass("d-none")

    $('.banner3').removeClass("show")
    $('.banner3').addClass("d-none")

    $('.banner4').removeClass("show")
    $('.banner4').addClass("d-none")
   
})

$('.bnr-1').on('click', function(){
    $('.banner1').addClass("show")
    $('.banner1').removeClass("d-none")

    $('.banner2').removeClass("show")
    $('.banner2').addClass("d-none")

    $('.banner3').removeClass("show")
    $('.banner3').addClass("d-none")

    $('.banner4').removeClass("show")
    $('.banner4').addClass("d-none")
   
})

$('.bnr-3').on('click', function(){
    $('.banner3').addClass("show")
    $('.banner3').removeClass("d-none")

    $('.banner1').removeClass("show")
    $('.banner1').addClass("d-none")

    $('.banner2').removeClass("show")
    $('.banner2').addClass("d-none")

    $('.banner4').removeClass("show")
    $('.banner4').addClass("d-none")
   
})

$('.bnr-4').on('click', function(){
    $('.banner4').addClass("show")
    $('.banner4').removeClass("d-none")

    $('.banner1').removeClass("show")
    $('.banner1').addClass("d-none")

    $('.banner3').removeClass("show")
    $('.banner3').addClass("d-none")

    $('.banner2').removeClass("show")
    $('.banner2').addClass("d-none")
   
})