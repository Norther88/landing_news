$(document).ready(function(){

    $.getJSON('http://data.fixer.io/api/latest?base=EUR',
    {'access_key' : '575019afd896aa722d78689a16212198'},
      function(response){
        console.log(response.rates);
        $('.fixer .con_rub').html(response.rates.RUB.toFixed(2) +' ₽');
        $('.fixer .con_usd').html(response.rates.USD.toFixed(2)  +' $');
       
    });
    

    $('#scroll').on('click', function(){
     if($('body').hasClass('fixed')){
      $(document).bind('touchmove');
        $('html').css('overflow','visible');
        $('body').removeClass('fixed');
        $(this).css('background','');
      }
      else{
        $('html').css('overflow','hidden');
        $('body').addClass('fixed');
        $(this).css('background','red');
        $(document).unbind('touchmove');
      }
 
        
});

});
