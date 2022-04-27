/* Enabling support for new HTML5 tags for IE6, IE7 and IE8 */
if(navigator.appName == 'Microsoft Internet Explorer' ){
	if( ( navigator.userAgent.indexOf('MSIE 6.0') >= 0 ) || ( navigator.userAgent.indexOf('MSIE 7.0') >= 0 ) || ( navigator.userAgent.indexOf('MSIE 8.0') >= 0 ) ){
		document.createElement('header')
		document.createElement('nav')
		document.createElement('section')
		document.createElement('aside')
		document.createElement('footer')
		document.createElement('article')
		document.createElement('hgroup')
		document.createElement('figure')
		document.createElement('figcaption')
	}
}
/* Enabling support for new HTML5 tags for IE6, IE7 and IE8 */

    

;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('input:text,input:password,textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		$('input:text,input:password,textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.
		
		

        var wHeight = $(window).height()

        $(window).resize(function() {
            wHeight = $(window).height()
        })


        $(window).scroll(function(){
            if( $(window).scrollTop() > wH ){
                $('#sticky-footer').stop(true, true).fadeIn()
            }

            else{$('#sticky-footer').stop(true, true).fadeOut()}
        })
            
        $('#nav-show-button').click(function(){
            $(this).hide()
            $('#nav-hide-button').show()
            $('#header').addClass('active')
            $('body').addClass('menu-opened')
            $("#modal-menu").fadeIn(500, function(){
                $('#menu-main').addClass('show')
                $('#menu-main').removeClass('hide')
            });
        });
        
        $('#nav-hide-button').click(function(){
            $(this).hide()
            $('#nav-show-button').show()
            $('#header').removeClass('active')
            $('body').removeClass('menu-opened')
            $('#menu-main').addClass('hide')
            $('#menu-main').removeClass('show')
            $("#modal-menu").delay(500).fadeOut(500, function(){
                $('#menu-main').removeClass('hide')
            })
        });
        
        
        if( $('#logo > a').length > 1 ){
            $('#logo > a').eq(0).hide()
        }



        $(window).resize(function() {
            if ($('.main-nav').is(':visible')) {
                $('.main-nav').css('height', '100vh');
            }
        });

       
        if( $('a.view-work-btn').length ){
            $('a.view-work-btn').click(function(e){
                e.preventDefault()
                var id = $(this).attr('href')

                $('html, body').stop(true, true).animate({
                    scrollTop: $(id).offset().top
                }, 650 );

			})
		}
       
        if( $('div.go-another-were-link > a').length ){
            $('div.go-another-were-link > a').click(function(e){
                e.preventDefault()
                var id = $(this).attr('href')

                $('html, body').stop(true, true).animate({
                    scrollTop: $(id).offset().top
                }, 650 );

            })
        }

        
        $('#work-section > a.work-item').mouseenter(function(){
            $('#work-section > a.work-item').addClass('overlay-shown')
            $(this).removeClass('overlay-shown')
        })
        
        $('#work-section > a.work-item').mouseleave(function(){
            $('#work-section > a.work-item').removeClass('overlay-shown')

        })
            
        
        
        // Slider scripting 
        if( jQuery('#kenburnslide-list').length ){
            jQuery('#kenburnslide-list').slippry({
                // general elements & wrapper
                slippryWrapper: '<div class="sy-box home-hero-img" />', // wrapper to wrap everything, including pager

                // options
                adaptiveHeight: false, // height of the sliders adapts to current slide
                captions: false, // Position: overlay, below, custom, false

                // pager
                pager: false,

                // controls
                controls: false,
                autoHover: false,

                // transitions
                transition: 'kenburns', // fade, horizontal, kenburns, false
                kenZoom: 120,
                speed: 7000 // time the transition takes (ms)
            });

        }
        
        // limitless-world 
        jQuery(document).ready(function(){
            jQuery('.slider').slippry()
        });

        $("#header").headroom({
            offset: 105
        });
        if ($('#header').hasClass('transparent')) {
            var wH = window.innerHeight - 100;
            $(window).scroll(function() {
                if ($(this).scrollTop() > wH) {
                    $('#header').removeClass('transparent');
                } else {
                    $('#header').addClass('transparent');
                }
            }).scroll();
        }

          if ( $('div.main-wrap-imitless-page').length) {
            $(window).scroll(function() {
                if ($(this).scrollTop() > -100) {
                    $('#header').addClass('show-nav-bar');
                } else {
                    $('#header').removeClass('show-nav-bar');
                }
            }).scroll();
        }


        // This function for scroll animation
        var $animation_elements = $('.animate');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
        // End animation function
      

    });// End ready function.
		

    $(window).load(function(){

        // Begin home slider
        if ( $('#carousel').length == 0 ) return false

        $('#carousel').flexslider({
            animation:"slide",
            slideshow: false,
            directionNav: false,
            controlNav:true,
            controlsContainer: "#slider-bullet", 
            useCSS: false,
            slideshowSpeed: 3000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            start: function(slider){
                // $('body').removeClass('loading');
            }
            ,
            animationLoop: true,
            pauseOnAction: true, // default setting
            //pauseOnHover: true,
            after: function(slider) {
                if (!slider.playing) {
                    slider.play();
                }
            }
        })	

    })
    
    
    
    //Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
    jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})
  

})(jQuery);

