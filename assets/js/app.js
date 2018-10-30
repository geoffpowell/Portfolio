$(document).ready(function(){

    //$('.icon-container').hide();
    //$('#landing-container').addClass('window-open'); //This is turned off because it's set now in the HTML. Was moved from the bottom of the ready function.

     //CREATE HTML MENU FROM EACH DATA-ANCHOR
    $.each($('.section'), function(){
    	var dataAnchor = $(this).attr('data-anchor');
      var dataAnchorNoDash = dataAnchor.replace(/-/gm, " ");
      //if this is a portfolio item, append the data anchor to the ul inside the ul
      if ($(this).hasClass('project')) {
        $('ul#sub-menu #sub-menu-container').append('<li data-menuanchor="' + dataAnchor + '"><a href="#' + dataAnchor + '">' + dataAnchorNoDash + '</a></li>');
      } else {
      	$('ul#menu').append('<li data-menuanchor="' + dataAnchor + '"><a id="' + dataAnchor + '-link"' + 'href="#' + dataAnchor + '">' + dataAnchorNoDash + '</a></li>'
      	);
      }
    });

    //COUNT TOTAL NUMBER OF PROJECTS.
    var numProjects = 0;
    $.each($('.section'), function(index){
    	if ($(this).hasClass('project')) {
    		numProjects++;
    	}
    });

    //resets view of the active state in the menu on anchor click and on fullpage navigation.
    var resetState = function(){
	  //removes any temp or active classes that may still be present.
	  $("#polyline4, #polyline5, #polyline6").removeClass('temp-unsticky sticky active');
	  $("#Resume-link, #Contact-link, #portfolio-link").removeClass('temp-unwhite white');
	  $("#sub-menu-container").removeClass('open');
	  $("#sub-menu-container li a").removeClass('white');
	  portfolioMenuOpen = false;
	  portfolioActive = false;
      contactActive = false;
      resumeActive = false;

      if ($('#sub-menu li[data-menuanchor]').hasClass('active')) {
        //console.log('portfolio link is now active');
        portfolioActive = true;
      } else if ($('li[data-menuanchor="Resume"]').hasClass('active')) {
        //console.log('resume link is now active');
        resumeActive = true;
        $("#polyline5").addClass('active');
      } else if ($('li[data-menuanchor="Contact"]').hasClass('active')) {
        //console.log('contact link is now active');
        contactActive = true;
        $("#polyline6").addClass('active');
      } else {
        return false;
      }
      // console.log('reset has run');
    }

	   //FULLPAGE OPTIONS AND EVENTS
   	$('#fullpage').fullpage({
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
	    easingcss3: 'cubic-bezier(0.85, 0, 0.17, 0.85)',
	    sectionsColor: ['white','white', 'white', 'white', 'white', '#303030', 'white'],
      slidesNavigation: true,
      controlArrows: false,
	    scrollOverflow: true, //for resumé section
      scrollingSpeed: 700,
	    //anchors: myAnchors, //using data-anchor attribute on HTML instead.
	    menu: '#menu',
      	onLeave: function(origin, destination, direction) {
          //console.log("ON LEAVE");
          console.log(origin);
          //console.log("destination is: " + destination.anchor);
	        $('.location-blurb').addClass('loc-hide');
	        var leftSection = $(origin.item);
          //the section-slide-1 class either goes on the section tag or the slide tag, depending if the project has slides or not.
	        //var leftSectionSection = leftSection.find('.section-slide-1');
          //console.log(leftSectionSection);
	        if (leftSection.hasClass('project')) {
	          //project info moves to left
	          leftSection.find('.project-info').removeClass('active');
	          //project image moves to right
	          leftSection.find('.project-image').removeClass('active');
	        } else if (leftSection.hasClass('resume')) {
	          //console.log('left resume section');
              leftSection.find('.paper').removeClass('active');
	          } else if (leftSection.hasClass('contact')) {
	            leftSection.find('.social-links h2').removeClass('active');
              leftSection.find('.social-icon').removeClass('loaded');
              leftSection.find('.about-site').removeClass('active');
              leftSection.find('.about-site, .about-site .text-group').removeClass('active');
	          }
	    },
	    afterLoad: function(origin, destination, direction){
          //console.log("AFTER LOAD");
          //console.log("origin is: " + origin.anchor);
          //console.log("destination is: " + destination.anchor);
          //console.log("---------------------------------------------");
        var loadedSection = $(destination.item);
        var locationBlurb;
        //console.log(loadedSection);
        //console.log(origin.index);
        $('.location-blurb p').css('color', 'black');
  			if (loadedSection.hasClass('project')){
          //console.log('has class project');
  				locationBlurb = '<span class="small-text"> Portfolio ' + (destination.index+1) + '/' + numProjects + '</span><br>' + destination.anchor.replace(/-/gm, " ");
          		//animations
          		loadedSection.find('.project-info').addClass('active');
          		loadedSection.find('.project-image').addClass('active');
  			} 
  			else if (loadedSection.hasClass('resume')) {
          		$('.location-blurb p').css('color', 'white');
              locationBlurb = 'Resume';
          		loadedSection.find('.paper').addClass('active');
              console.log(direction);
        	} 
        	else if (loadedSection.hasClass('contact')) {
          		//animations
              locationBlurb = 'Contact';
          		loadedSection.find('.social-links h2').addClass('active');
          		loadedSection.find('.social-icon').addClass('loaded');
              loadedSection.find('.about-site, .about-site .text-group').addClass('active');
          		console.log('contact');
        	}
  			  $('.location-blurb p').html(locationBlurb);
        	$('.location-blurb').removeClass('loc-hide');
        	//have to use a timer in accordance with the animation speed (or any speed apparently), otherwise the silentMoveTo method doesn't read the right active state (although it reads fine when scrolling).
        	setTimeout(function(){
          		resetState();
        	}, 700);
  		},
      afterSlideLoad: function(section, origin, destination, direction){
        var loadedSlide = $(this);
        console.log(loadedSlide);
        console.log(section);
        console.log(origin);
        console.log(destination);
        console.log(direction);
        $(".slide-image-1, .slide-image-2, .slide-image-3, .text-group-appearing").addClass('active');
        $(".text-group, .slide-image-single").addClass('active');
      },
      onSlideLeave: function(section, origin, destination, direction) {
        // $(".slide-image-1, .slide-image-2, .slide-image-3, .text-group-appearing").removeClass('active');
        $(".text-group, .slide-image-single").removeClass('active');
        var loadedSlide = $(this);
        console.log(loadedSlide);
        console.log(section);
        console.log(origin);
        console.log(destination);
        console.log(direction);
      }
    });

    //MENU ICON CLICK FUNCTIONALITY
    $('.menu-icon').click(function(){
    	//toggle mobile menu icon from closed to open. Menu starts without an open class
    	$('.menu-icon .inner').toggleClass('open');
      	$('.location-blurb').toggleClass('loc-hide');
    	if (!($('.menu-icon .inner').hasClass('open'))) {
    		$('#landing-container').removeClass('window-open');
    		//$('.location-blurb p').css('display', 'block');
    		$.fn.fullpage.setAllowScrolling(true, 'all');
        $.fn.fullpage.setKeyboardScrolling(true, 'all');
    		//keyboard scrolling true
    	} else {
    		$('#landing-container').addClass('window-open');
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
    	$('#landing-container').removeClass('window-open');
    	$('.menu-icon .inner').removeClass('open');
    	$('.location-blurb p').css('display', 'block');
        $('.location-blurb').removeClass('loc-hide');
      }
  	});

  	//VISUAL STATES AND FUNCTIONALITY FOR CLICKS ON PORTFOLIO LINK AND HOVERS ON ALL MENU LINKS
  	var portfolioMenuOpen = false;
  	//Repeatable active states
    var portfolioActive = $('#sub-menu li[data-menuanchor]').hasClass('active');
    var resumeActive = $('li[data-menuanchor="Resume"]').hasClass('active');
    var contactActive = $('li[data-menuanchor="Contact"]').hasClass('active');


    // SET HOVER STATES for svg line segments and menu items
    $("#portfolio-link").click(function(e){
      e.preventDefault();
      $("#sub-menu-container").toggleClass('open'); 
      $(this).toggleClass('white');
      $("#polyline4").toggleClass('sticky');
      $("#sub-menu-container li a").toggleClass('white');
      if ($("#polyline4").hasClass('sticky')) {
        portfolioMenuOpen = true;
      } else {
        portfolioMenuOpen = false;
      }
      console.log('Portfolio Menu is Open?' + Boolean(portfolioMenuOpen));

      if (portfolioActive) {
        console.log('portfolio is active');
      } else if (resumeActive) {
        $("#Resume-link").addClass('temp-unwhite');
        $("#polyline5").addClass('temp-unsticky');
      } else if (contactActive){
        $("#Contact-link").addClass('temp-unwhite');
        $("#polyline6").addClass('temp-unsticky');
      } else {
        console.log('no menu item is active');
        return false;
      }
    });

    $("#portfolio-link").hover(function(){ 
      if (portfolioMenuOpen) {
        console.log('sub menu is open and returned false');
      } else {
        console.log('polyline is not stuck open so we can animate it');
        $("#polyline4").toggleClass('active');

        if ($('li[data-menuanchor="Resume"]').hasClass('active')) {
          $("#Resume-link").toggleClass('temp-unwhite');
          $("#polyline5").toggleClass('temp-unsticky');
        } 
        else if ($('li[data-menuanchor="Contact"]').hasClass('active')) {
          $("#Contact-link").toggleClass('temp-unwhite');
          $("#polyline6").toggleClass('temp-unsticky');
        }
      }
    });

    $("#Resume-link").hover(function(){
      if (portfolioMenuOpen && resumeActive) {
        //these link styles
        $("#Resume-link").toggleClass('temp-unwhite');
        $("#polyline5").toggleClass('temp-unsticky');
        //portfolio link styles
        $("#portfolio-link").toggleClass('temp-unwhite');
        $("#polyline4").toggleClass('temp-unsticky');
        $("#sub-menu-container li a").toggleClass('temp-unwhite');
      } 
      else if ((portfolioMenuOpen && contactActive) ||
              (portfolioMenuOpen && portfolioActive)){
        //portfolio link styles
        $("#portfolio-link").toggleClass('temp-unwhite');
        $("#polyline4").toggleClass('temp-unsticky');
        $("#sub-menu-container li a").toggleClass('temp-unwhite');
        //Resume link styles
        $("#Resume-link").toggleClass('active');
        $("#polyline5").toggleClass('active');
      } 
      else if (!portfolioMenuOpen && resumeActive) {
        //do nothing
      }
      else if (!portfolioMenuOpen && contactActive) {
        $("#Resume-link").toggleClass('active');
        $("#polyline5").toggleClass('active');
        $("#Contact-link").toggleClass('temp-unwhite');
        $("#polyline6").toggleClass('temp-unsticky');
      }
      else if (!portfolioMenuOpen && portfolioActive) {
        //hover text color taken care of by CSS
        $('#polyline5').toggleClass('active');
      }
      else {
        console.log('error, a condition wasnt found for that');
      }
    });

    $("#Contact-link").hover(function(){
      if (portfolioMenuOpen && contactActive) {
        //these link styles
        $("#Contact-link").toggleClass('temp-unwhite');
        $("#polyline6").toggleClass('temp-unsticky');
        //portfolio link styles
        $("#portfolio-link").toggleClass('temp-unwhite');
        $("#polyline4").toggleClass('temp-unsticky');
        $("#sub-menu-container li a").toggleClass('temp-unwhite');
      }
      else if ((portfolioMenuOpen && resumeActive) ||
              (portfolioMenuOpen && portfolioActive)) {
        //portfolio link styles
        $("#portfolio-link").toggleClass('temp-unwhite');
        $("#polyline4").toggleClass('temp-unsticky');
        $("#sub-menu-container li a").toggleClass('temp-unwhite');
        //this link styles
        $("#Contact-link").toggleClass('active');
        $("#polyline6").toggleClass('active');
      }
      else if (!portfolioMenuOpen && contactActive) {
        //do nothing
      }
      else if (!portfolioMenuOpen && resumeActive) {
        $("#Contact-link").toggleClass('active');
        $("#polyline6").toggleClass('active');
        $("#Resume-link").toggleClass('temp-unwhite');
        $("#polyline5").toggleClass('temp-unsticky');
      }
      else if (!portfolioMenuOpen && portfolioActive) {
        $("#polyline6").toggleClass('active');
      }
      else {
        console.log('error, a condition wasnt found for that');
      }
    });

    //GENERAL BUTTON CLICKS AND EVENTS
    $("#explore_slides_1").click(function(){
      $.fn.fullpage.moveTo("Kattare", 1);
    });

     //social media icons on contact page
    $(".social-links a").hover(function(){
      $(this).toggleClass("hover");
    });

    //email link bot obfuscation
    function obfuscate(){
      var unreadableLink = $("#email-icon").attr('href');
      unreadableLink = unreadableLink.replace('mailto', 'failto');
      unreadableLink = unreadableLink.replace(/geoff/gi, 'first');
      unreadableLink = unreadableLink.replace('@', ':::');
      unreadableLink = unreadableLink.replace('powell', 'last')
      return unreadableLink;
    }

    function deobfuscate(){
      var readableLink = $("#email-icon").attr('href');
      if (readableLink == "#") { //href loads empty
        console.log('readablelink is blank');
        var otliam = ":otliam";
        var first = "geoff";
        var last = "powell";
        var character = "@";
        var tld = "ten.";
        otliam = otliam.split('').reverse().join('');
        tld = tld.split('').reverse().join('');
        readableLink = otliam + first + character + first + last + tld;
        return readableLink;
      }
      else {
        readableLink = readableLink.replace('failto', 'mailto');
        readableLink = readableLink.replace(/first/gi, 'geoff');
        readableLink = readableLink.replace(':::', '@');
        readableLink = readableLink.replace('last', 'powell');
        return readableLink;
        console.log('readable link has other');
      }
    }

    //email hover on contact page to write out the href 
    $("#email-icon").mouseover(function() {
      $(this).attr('href', deobfuscate());
      console.log($("#email-icon").attr('href'));
    });

    $("#email-icon").mouseout(function() {
      $(this).attr('href', obfuscate());
      console.log($("#email-icon").attr('href'));
    });

    //SET SCROLL TO FALSE ON READY
  	//$.fn.fullpage.setAllowScrolling(false, 'all');
  	//$.fn.fullpage.setKeyboardScrolling(false, 'all');


});

/////////////////////LANDING PAGE ANIMATIONS AND TIMINGS///////////////////////////////

$(window).load(function(){

  var r1 = Snap.select('#r1');
  var e1 = Snap.select('#e1');
  var t1 = Snap.select('#t1');
  var i1 = Snap.select('#i1');
  var c1 = Snap.select('#c1');
  var u1 = Snap.select('#u1');
  var l1 = Snap.select('#l1');
  var a1 = Snap.select('#a1');
  var t2 = Snap.select('#t2');
  var i2 = Snap.select('#i2');
  var n1 = Snap.select('#n1');
  var g1 = Snap.select('#g1');

  var s1 = Snap.select('#s1');
  var p1 = Snap.select('#p1');
  var l2 = Snap.select('#l2');
  var i3 = Snap.select('#i3');
  var n2 = Snap.select('#n2');
  var e2 = Snap.select('#e2');
  var s2 = Snap.select('#s2');

  var g2 = Snap.select('#g2');
  var e3 = Snap.select('#e3');
  var o1 = Snap.select('#o1');
  var f1 = Snap.select('#f1');
  var f2 = Snap.select('#f2');

  var p2 = Snap.select('#p2');
  var o2 = Snap.select('#o2');
  var w1 = Snap.select('#w1');
  var e4 = Snap.select('#e4');
  var l3 = Snap.select('#l3');
  var l4 = Snap.select('#l4');

  //HOW FAST 'RETICULATING SPLINES' TRANSITIONS TO 'GEOFF' AFTER THE LINES ARE DONE 
  var nameTransitionSpeed = 700;
  var pullDownMatrix = new Snap.Matrix();
  pullDownMatrix.translate(0,50);
  var toGeoffPowell = function(){
    r1.animate({opacity: 0, transform: pullDownMatrix}, nameTransitionSpeed, mina.easeinout);
    e1.animate({opacity: 0, transform: pullDownMatrix}, nameTransitionSpeed, mina.easeinout);
    t1.animate({opacity: 0, transform: pullDownMatrix}, nameTransitionSpeed, mina.easeinout);
    i1.animate({opacity: 0, transform: pullDownMatrix}, nameTransitionSpeed, mina.easeinout);
    c1.animate({d: g2.node.getAttribute('d')}, nameTransitionSpeed, mina.easeinout);
    u1.animate({opacity: 0}, nameTransitionSpeed, mina.easeinout);
    l1.animate({d: e3.node.getAttribute('d')}, nameTransitionSpeed, mina.easeinout);
    a1.animate({d: o1.node.getAttribute('d')}, nameTransitionSpeed, mina.easeinout);
    t2.animate({opacity: 0}, nameTransitionSpeed, mina.easeinout);
    i2.animate({d: f1.node.getAttribute('d')}, nameTransitionSpeed, mina.easeinout);
    n1.animate({opacity: 0}, nameTransitionSpeed, mina.easeinout);
    g1.animate({d: f2.node.getAttribute('d')}, nameTransitionSpeed, mina.easeinout);

    s1.animate({opacity: 0}, nameTransitionSpeed, mina.easeinout);
    p1.animate({d: p2.node.getAttribute('d')}, nameTransitionSpeed, mina.easeinout);
    l2.animate({d: l4.node.getAttribute('d')}, nameTransitionSpeed, mina.easeinout);
    i3.animate({d: o2.node.getAttribute('d')}, nameTransitionSpeed, mina.easeinout);
    n2.animate({d: w1.node.getAttribute('d')}, nameTransitionSpeed, mina.easeinout);
    e2.animate({d: e4.node.getAttribute('d')}, nameTransitionSpeed, mina.easeinout);
    s2.animate({d: l3.node.getAttribute('d')}, nameTransitionSpeed, mina.easeinout);
    lineRunning = false;
  }

  var lineSVG = Snap("#menuline"); 
  var polyline1 = lineSVG.select('#polyline1');
  var polyline2 = lineSVG.select('#polyline2');
  var polyline3 = lineSVG.select("#polyline3");
  //each line time has to be stated explicitly here (time each line takes to animate) 
  var line1Time = 1200;
  var line2Time = 1200;
  var line3Time = 1200;
  var totalLineTime = line1Time + line2Time + line3Time;

  function runNameAnimation(){
    var runLine1 = function(){
      polyline1.attr({
        fill: 'none',
        "stroke-dasharray": 300,
        "stroke-dashoffset": 300,
        stroke: 'url(#menu-line-gradient)'
      }).animate({
        'stroke-dashoffset': 0,
      }, line1Time, mina.easein, runLine2);
    }
    var runLine2 = function(){
      //console.log('line 2 running');
      polyline2.attr({
        fill: 'none',
        "stroke-dasharray": 300,
        "stroke-dashoffset": 300,
        stroke: 'url(#menu-line-gradient)'
      }).animate({'stroke-dashoffset': 0}, line2Time, mina.easeinout, runLine3);
    }
    var runLine3 = function(){
      //console.log('line 3 running');
      polyline3.attr({
        fill: 'none',
        "stroke-dasharray": 300,
        "stroke-dashoffset": 300,
        stroke: 'url(#menu-line-gradient)'
      }).animate({'stroke-dashoffset': 0}, line3Time, mina.easeinout, toGeoffPowell);
    }
    runLine1();
  }
  runNameAnimation();


  ///////////////////////////////////////////////////////////////////////////////////


  var numSegments = 7; //number of times the 'percentage done view' updates.
  var percentDoneTimeSegment = totalLineTime / numSegments; 
  var millisecondRange = 300; //range in one direction that the millisecond time in each segment can vary. This makes it so the 'percentage done view' won't always show 10%, 20:, etc, but will have a natural kind of variance. 11%, 19%, etc.

  function getRandomInRange(min, max){ 
    return(Math.floor(min + Math.random() * (max - min)));
  }

  function runTimeOut(segment) {
    var randomizedSegment = getRandomInRange(
      percentDoneTimeSegment * (segment+1) - millisecondRange, 
      percentDoneTimeSegment * (segment+1) + millisecondRange
    );
    setTimeout(function(){
      //console.log(segment+1 + ' updated');
      //console.log('random int was ' + randomizedSegment);
      $("#counter span").text(Math.floor(randomizedSegment/totalLineTime*100));
    //}, percentDoneTimeSegment * (segment+1)); //use this line for even 'percentDone intervals'
      }, randomizedSegment);
    //console.log("this time segment was " + percentDoneTimeSegment*(segment + 1));
  }

  for(var i = 0; i <= numSegments-2; i++) { 
    runTimeOut(i);
  }

  //the last line segment always lands on 100% and fires the functions to change the counter to welcome text, menu, etc
  setTimeout(function(){
    //console.log(percentDoneTimeSegment*numSegments/totalLineTime*100 + "%");
    $("#counter span").text('100');
    $("ul#menu").css('visibility', 'visible');
    $("ul#menu").animate({'opacity': 1}, nameTransitionSpeed*3);
    $(".description-box #counter").animate({'opacity': 0}, nameTransitionSpeed);
    $(".description-box #description").animate({'opacity': 1}, nameTransitionSpeed*3);
  }, percentDoneTimeSegment*numSegments);

});

