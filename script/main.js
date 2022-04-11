$('.slide-2').on('click', function(){
    $('.slide-container').css('transform', 'translateX(-100vw)');
});
$('.slide-1').on('click',function(){
    $('.slide-container').css('transform', 'translateX(0)');
});
var now =1;
$('.next').on('click',function(){
    if(now == 1){
        $('.slide-container').css('transform', 'translateX(-100vw)')
        now +=1;    
    }else if (now == 2){
        $('.slide-container').css('transform', 'translateX(0)')
        now = 1
    }
})
$('.before').on('click',function(){
    if(now==1){
        $('.slide-container').css('transform', 'translateX(-100vw)')
        now +=1;
    }else if (now ==2){
        $('.slide-container').css('transform', 'translateX(0)')
        now =1;
    }
})





$('.banner-2').on('click', function(){
    $('.banner-wrap').css('transform', 'translateX(-100vw)');
});
$('.banner-3').on('click', function(){
    $('.banner-wrap').css('transform', 'translateX(-200vw)');
});
$('.banner-4').on('click', function(){
    $('.banner-wrap').css('transform', 'translateX(-300vw)');
});
$('.banner-1').on('click', function(){
    $('.banner-wrap').css('transform', 'translateX(0)');
});