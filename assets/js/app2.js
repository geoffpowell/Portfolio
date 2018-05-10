$(document).ready(function(){

	//CREATE HTML MENU FROM EACH DATA-ANCHOR
    $.each($('.section'), function(){
    	var dataAnchor = $(this).attr('data-anchor');
      //if this is a portfolio item, append the data anchor to the ul inside the ul
      if ($(this).hasClass('project')) {
        $('ul#sub-menu #sub-menu-container').append('<li data-menuanchor="' + dataAnchor + '"><a href="#' + dataAnchor + '">' + dataAnchor + '</a></li>');
      } else {
      	$('ul#menu').append('<li data-menuanchor="' + dataAnchor + '"><a id="' + dataAnchor + '-link"' + 'href="#' + dataAnchor + '">' + dataAnchor + '</a></li>'
      	);
      }
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
        var leftSection = $(this);
        var leftSectionSection = $(this).find('section');
        if (leftSection.hasClass('project')) {
          //project info moves to left
          leftSectionSection.children('.project-info').removeClass('active');
          //projet image moves to right
          leftSectionSection.children('.project-image').removeClass('active');
        } else if (leftSection.hasClass('resume')) {
          console.log('left resume section');
          leftSection.find('.paper').removeClass('active');
        } else if (leftSection.hasClass('contact')) {
          leftSectionSection.find('h2').removeClass('active');
          leftSectionSection.find('.social-icon').removeClass('loaded');
        }
      },

	    afterLoad: function(anchorLink, index){
  	    //change location blurb
  			var loadedSection = $(this);
        var loadedSectionSection = $(this).find('section');
  			var thisPageIndex = index;
        $('.location-blurb p').css('color', 'black');
  			if (loadedSection.hasClass('project')){
  				anchorLink = '<span class="small-text"> Portfolio ' + thisPageIndex + '/' + numProjects + '</span><br>' + anchorLink;
        //animations
        loadedSectionSection.children('.project-info').addClass('active');
        loadedSectionSection.children('.project-image').addClass('active');
  			} else if (loadedSection.hasClass('resume')) {
          $('.location-blurb p').css('color', 'white');
          loadedSection.find('.paper').addClass('active');
        } else if (loadedSection.hasClass('contact')) {
          //animations
          loadedSectionSection.find('h2').addClass('active');
          loadedSectionSection.find('.social-icon').addClass('loaded');
          console.log('contact');

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
      if ($(this).is('#portfolio-link')) {
        console.log('portfolio link');
        return false;
      } 
      else {
          //if we've just come into the app:
        //$("polyline").removeClass('active sticky');
        $('.icon-container').show();
    		$.fn.fullpage.silentMoveTo($(this).parent().attr('data-menuanchor'));
        $.fn.fullpage.setAllowScrolling(true, 'all');
        $.fn.fullpage.setKeyboardScrolling(true, 'all');
    		$('#landing').removeClass('window-open');
    		$('.menu-icon .inner').removeClass('open');
    		$('.location-blurb p').css('display', 'block');
        $('.location-blurb').removeClass('loc-hide');
      }
  	});
 
});