$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut(1000)
         .next('img').fadeIn(500)
         .end().appendTo('.fadein');}, 
      3000);
});