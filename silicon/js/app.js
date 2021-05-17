$(function(){
  $(window).on('scroll',function(){

    var scroll=$(window).scrollTop();
    if(scroll>=50)
    {$('nav').addClass('stickyadd');
    $('nav').removeClass('stick');
    $('nav').addClass('scrolled');
  }
    else
    {$('nav').removeClass('stickyadd');
  $('nav').addClass('stick');
$('nav').removeClass('scrolled');}
  })
});
