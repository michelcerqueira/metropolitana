(function($) {
	
	
   var $fortune = function(args) {
	  
       
 

    if (args === undefined) {
      throw(new Error("You must define the options.prices"));
    }

    var options = $.extend({}, {
      prices: args,
      duration: 18000,
      separation: 2,
      min_spins: 10,
      max_spins: 15,
      onSpinBounce: function() {}
    }, args);

    var fortune = this;
    var prices_amount = Array.isArray(options.prices)?options.prices.length:options.prices;
	
    var prices_delta = 360 / prices_amount;
    
	var is_spinning = false;

    fortune.spin = function(price) {
      price = typeof price === "number"?price:Math.floor(Math.random() * prices_amount);
      var deferred = $.Deferred();
      //var position = Math.floor(prices_delta * (price - 1/2) + randomBetween(options.separation, prices_delta - options.separation));
      
	   var sound = document.createElement('audio');
        sound.setAttribute('src', 'img/wheel.mp3');
		 document.body.appendChild(sound);
			sound.play();
	 var ar = [55,80,90,280,320];
	  var position =  $.shuffle(ar);
	  console.log(position);
	  position = ar[0];
	  
	   if(x == 3){		  
		var position = 143;
			
	  }
	  if(x == 7){		  
		var position = 220;
			
	  }
	  if(x == 13){		  
		var position = 125;
			
	  }
	  if(x == 19){		  
		var position = 130;
		//
			
	  }
	  if(x == 27){
		  var position = 215;
		 
	  }
	   if(x == 33){
		   var position = 220;
		 
		  
	  }
	   if(x == 39){
		   var position = 120;
		 
		  
	  }
	   if(x == 42){
		   var position = 135;
		 
		  
	  }
	  if(x == 46){
		   var position = 135;
		 
		  
	  }
	  if(x == 51){
		   var position = 220;
		  
		  
	  }
	   if(x == 57){		  
		var position = 150;
			
	  }
	   if(x == 60){		  
			 var position = 220;
		  
	  }
	   if(x == 66){
		   	var position = 232;
			
		  
	  }
	   if(x == 72){
		   	var position = 140;
			
		  //
	  }
	   if(x == 76){		  
		var position = 122;
			
	  }
	   if(x == 80){
		   	var position = 230;
			
		  
	  }
	  if(x == 85){		  
		var position = 140;
			
	  }
	   if(x == 91){
		   var position = 120;
			
		  
	  }
	  if(x == 96){
		   	var position = 220;
			
		  
	  }if(x == 100){
		   	var position = 135;
			x = 0;
			//
		  
	  }
	  
	  //console.log(position);
	  var spins = randomBetween(options.min_spins, options.max_spins);
      var final_position = 360 * spins + position;
	 
	  //var final_position = 4295;
      var prev_position = 300;
      var is_bouncing = false;

      is_spinning = true;

      fortune
      .css({
        "transform": "rotate(" + final_position + "deg)",
        "-webkit-transform": "rotate(" + final_position + "deg)",
        "transition": "transform " + options.duration + "ms cubic-bezier(.17,.67,.12,.99)",
        "-webkit-transition": "-webkit-transform " + options.duration + "ms cubic-bezier(.17,.67,.12,.99)"
      })
      .siblings('.spin').removeClass('bounce');

      var bounceSpin = function() {
        var curPosition = Math.floor(getRotationDegrees(fortune)),
        mod = Math.floor((curPosition + prices_delta*0.5) % prices_delta),
        diff_position,
        position_threshold = prices_delta/5,
        distance_threshold = prices_delta/10;

        prev_position = Math.floor(curPosition < prev_position ? prev_position - 360 : prev_position);
        diff_position = curPosition - prev_position;

        if ((mod < position_threshold && diff_position < distance_threshold) ||
            (mod < position_threshold*3 && diff_position >= distance_threshold)) {
          if (!is_bouncing) {
            fortune.siblings('.spin').addClass('bounce');
            options.onSpinBounce(fortune.siblings('.spin'));
            is_bouncing = true;
          }
        } else {
          fortune.siblings('.spin').removeClass('bounce');
          is_bouncing = false;
        }

        if (is_spinning) {
          prev_position = curPosition;
          requestAnimationFrame(bounceSpin);
        }
      };

      var animSpin = requestAnimationFrame(bounceSpin);

      setTimeout(function() {
        fortune
        .css({
          "transform": "rotate(" + position + "deg)",
          "-webkit-transform": "rotate(" + position + "deg)",
          "transition": "",
          "-webkit-transition": ""
        })
        .siblings('.spin').removeClass('bounce');

        cancelAnimationFrame(animSpin);
        deferred.resolve(Array.isArray(options.prices)?options.prices[price]:price);
        is_spinning = false;
      }, options.duration);

      return deferred.promise();
    };

    var getRotationDegrees = function(obj) {
      var angle = 0,
      matrix = obj.css("-webkit-transform") ||
        obj.css("-moz-transform")    ||
        obj.css("-ms-transform")     ||
        obj.css("-o-transform")      ||
        obj.css("transform");
      if (matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(','),
        a = values[0],
        b = values[1],
        radians = Math.atan2(b, a);

        if ( radians < 0 ) {
          radians += (2 * Math.PI);
        }

        angle = Math.round( radians * (180/Math.PI));
      }

      return angle;
    };

    var randomBetween = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return fortune;
  };

  $.extend($.fn, {
    fortune: $fortune
  });
}) (jQuery);
