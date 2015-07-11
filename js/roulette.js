var $r = $('.roulette').fortune(240);
	
	var x = 0;	
	

var clickHandler = function() {
  $('.spinner').off('click');
  $('.spinner span').hide();
  $r.spin().done(function(price) {
      $('.spinner').on('click', clickHandler);
      $('.spinner span').show();
	   window.localStorage.clickcount = Number(localStorage.clickcount) + 1;
	
		x+=1;
		 var sound = document.createElement('audio');
        sound.setAttribute('src', 'http://bramp.net/javascript/wheel.mp3');
		 document.body.appendChild(sound);
       
 
    
        
	   
    });
};

$('.spinner').on('click', clickHandler);
