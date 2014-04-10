(function ($) {
 	Drupal.behaviors.cdgi = {
		attach: function(context) {	
	 
		 	/* Image aleatoire pour la page d'accueil */
		    var random = Math.floor(Math.random() * 2) + 1;
			$('#visuel').addClass('image'+random);

			/* En savoir plus dans la boite a outils */
			$('#coffre-outils .content a.readmore').click(function() {
				$(this).slideUp(0, function() {
					$(this).next().slideDown(300);
				});
			});

			$('#slides') 
				.after('<div id="nav">') 
				.cycle({ 
				    fx:     'fade', 
				    pager:  '#nav', 
				    speed:   800, 
				    timeout: 5000, 
				});

			if($('article.node .field-name-field-colonne-de-gauche').length){
				$('article.node .field-name-body').css('width','690px');
			}

			// $('#visuel .content .block-2 .image').hover(function() {
			// 	  $(this).fadeIn( "slow", function() {
			// 	    // Animation complete
			// 	});
		 //  	}
alert('test');
        $("#visuel .content .block-1 .image").hover(function() {
        	alert('test');
            $(this).stop().fadeOut("1000", function() {
                $(this).css("background", "url('../images/frontpage_block_img_1+.png') no-repeat center center").fadeIn(1000);
            });
        }, function() {
            $(this).stop().fadeOut("1000", function() {
                $(this).css("background", "url('../images/frontpage_block_img_1+.png') no-repeat center center").fadeIn(1000);
            });
        });


		}
	}
}(jQuery));