$(document).ready(function(){

	//CREATE HTML MENU FROM EACH DATA-ANCHOR
    $.each($('.section'), function(){
    	var dataAnchor = $(this).attr('data-anchor');
    	$('ul.navigation').append('<li data-menuanchor="' + dataAnchor + '"><a href="#' + dataAnchor + '">' + dataAnchor + '</a></li>'
    	);
    });

    //count total number of portfolio projects.
    var numProjects = 0;
    $.each($('.section'), function(index){
    	if ($(this).hasClass('project')) {
    		numProjects++;
    	}
    });

	//FULLPAGE OPTIONS
   	$('#fullpage').fullpage({
	    easingcss3: 'cubic-bezier(0.85, 0, 0.17, 0.85)',
	    sectionsColor: ['white','white', 'white', 'white', 'white', '#303030', 'white'],
	    scrollOverflow: true, //for resumé section
	    //anchors: myAnchors, //using data-anchor attribute on HTML instead.
	    menu: '#menu',
      onLeave: function(index) {
        $('.location-blurb').addClass('loc-hide');
      },

	    afterLoad: function(anchorLink, index){
  	    //change location blurb
  			var loadedSection = $(this);
  			var thisPage = index;
  			if (loadedSection.hasClass('project')){
  				anchorLink = '<span class="small-text"> Portfolio ' + thisPage + '/' + numProjects + '</span><br>' + anchorLink;
  			}
  			$('.location-blurb p').html(anchorLink);
        $('.location-blurb').removeClass('loc-hide');
  		  }
    });

    //MENU FUNCTIONALITY
    $('.menu-icon').click(function(){
    	//toggle mobile menu icon from closed to open. Menu starts without an open class
    	$('.menu-icon .inner').toggleClass('open');
      $('.location-blurb').toggleClass('loc-hide');
    	if (!($('.menu-icon .inner').hasClass('open'))) {
    		$('#landing').removeClass('window-open');
    		//$('.location-blurb p').css('display', 'block');
    		$.fn.fullpage.setAllowScrolling(true, 'all');
        $.fn.fullpage.setKeyboardScrolling(true, 'all');
    		//keyboard scrolling true
    	} else {
    		$('#landing').addClass('window-open');
    		//$('.location-blurb p').css('display', 'none');
        $.fn.fullpage.setAllowScrolling(false, 'all');
    		$.fn.fullpage.setKeyboardScrolling(false, 'all');
    	}
  	});
  	$('.navigation li a').click(function(e){
  		e.preventDefault();
      //if we've just come into the app:
        $('#fullpage').show(); 
        $('.icon-container').show();
  		$.fn.fullpage.silentMoveTo($(this).parent().attr('data-menuanchor'));
      $.fn.fullpage.setAllowScrolling(true, 'all');
      $.fn.fullpage.setKeyboardScrolling(true, 'all');
  		$('#landing').removeClass('window-open');
  		$('.menu-icon .inner').removeClass('open');
  		//$('.location-blurb p').css('display', 'block');
      $('.location-blurb').removeClass('loc-hide');
  	});
 
});