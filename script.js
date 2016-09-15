$(document).ready(function(){
  $('#landingSpot1').hide();
  $('#landingSpot2').hide();
  $('#landingSpot3').hide();
  $('#landingSpot4').hide();
  $('#landingSpot5').hide();
  $('#landingSpot6').hide();
  $('#landingSpot7').hide();

  $('#statue').one ('click', function(){
    $('#spinningMapContainer').fadeIn(1000)
    $('#statue').fadeOut(1000)

    $('#c1').addClass('orbit1')
    $('#c2').addClass('orbit2')
    $('#c3').addClass('orbit3')
    $('#c4').addClass('orbit4')
    $('#pin1').animate({height: '17px',
                        top: '-=17px'},400);
    $('#pin2').delay(500).animate({height: '15px',
                                   top: '-=15px'},400);
    $('#pin3').delay(1000).animate({height: '12px',
                                    top: '-=12px'},400);
    $('#pin4').delay(1100).animate({height: '10px',
                                    top: '-=10px'},400);
    $('#pin5').delay(1200).animate({height: '8px',
                                    top: '-=8px'},400);
    $('#pin6').delay(1300).animate({height: '7px',
                                    top: '-=7px'},400);
    $('#pin7').delay(1400).animate({height: '5px',
                                    top: '-=5px'},400);
    $('#landingSpot1').fadeIn(400);
    $('#landingSpot2').delay(500).fadeIn(600);
    $('#landingSpot3').delay(1000).fadeIn(600);
    $('#landingSpot4').delay(1100).fadeIn(600);
    $('#landingSpot5').delay(1200).fadeIn(600);
    $('#landingSpot6').delay(1300).fadeIn(600);
    $('#landingSpot7').delay(1400).fadeIn(600);
  });
});
