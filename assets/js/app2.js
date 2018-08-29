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

    //resets view of the active state in the menu on anchor click or fullpage navigation.
    var resetState = function(){
      //removes any temp or active classes that may be present.
      $("#polyline4, #polyline5, #polyline6").removeClass('temp-unsticky sticky active');
      $("#Resume-link, #Contact-link, #portfolio-link").removeClass('temp-unwhite white');
      $("#sub-menu-container").removeClass('open');
      $("#sub-menu-container li a").removeClass('white');
    
      if ($('#sub-menu li[data-menuanchor]').hasClass('active')) {
        console.log('portfolio link is now active');
        //$("#polyline5").removeClass('active');
        //$("#polyline6").removeClass('active');
      } else if ($('li[data-menuanchor="Resume"]').hasClass('active')) {
        console.log('resume link is now active');
        $("#polyline5").addClass('active');
        // $("#portfolio-link").removeClass('white');
        // $("#sub-menu-container").removeClass('open');
        // $("#sub-menu-container li a").removeClass('white');
      } else if ($('li[data-menuanchor="Contact"]').hasClass('active')) {
        console.log('contact link is now active');
        $("#polyline6").addClass('active');
        // $("#portfolio-link").removeClass('white');
        // $("#sub-menu-container").removeClass('open');
        // $("#sub-menu-container li a").removeClass('white');
      } else {
        return false;
      }
      //if it belongs to portfolio, keep all portfolio states active. 
      //if it's resume, add line active state to line 5, remove line active state to contact, remove active states to portfolio. 
      //if it's contact, add line active state to line 6, remove line active state to resume, remove active states to portfolio.
     // console.log(Boolean($('#sub-menu li[data-menuanchor]').hasClass('active')));
      //console.log(Boolean($('li[data-menuanchor="Resume"]').hasClass('active')));
     // console.log(Boolean($('li[data-menuanchor="Contact"]').hasClass('active')));
      // $("#polyline4").removeClass('sticky active');
      // $("#portfolio-link").removeClass('white');
      // $("#sub-menu-container").removeClass('open');
      // $("#sub-menu-container li a").removeClass('white');
      //console.log('removed classes');
      console.log('reset has run');
    }

	//FULLPAGE OPTIONS AND METHODS
   	$('#fullpage').fullpage({
	    easingcss3: 'cubic-bezier(0.85, 0, 0.17, 0.85)',
	    sectionsColor: ['white','white', 'white', 'white', 'white', '#303030', 'white'],
	    scrollOverflow: true, //for resumé section
      scrollingSpeed: 700,
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
          //console.log('left resume section');
          leftSection.find('.paper').removeClass('active');
        } else if (leftSection.hasClass('contact')) {
          leftSectionSection.find('h2').removeClass('active');
          leftSectionSection.find('.social-icon').removeClass('loaded');
        }
       // console.log('stuff - this doesnt run on page load unless going to specific section');
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
        //have to use a timer in accordance with the animation speed (or any speed apparently), otherwise the silentMoveTo method doesn't read the right active state (although it reads fine when scrolling).
        setTimeout(function(){
          resetState();
        }, 700);
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
    // MENU NAVIGATION CLICK IN GENERAL
  	$('.navigation li a').click(function(e){
  		e.preventDefault();
      if ($(this).is('#portfolio-link')) {
        //console.log('portfolio link');
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