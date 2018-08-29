 // window.addEventListener("load", function(event) {
 //    console.log("All resources finished loading!");
 //  });

 $(window).load(function(){
    //console.log("All resources finished loading!");
 });


$(document).ready(function(){
  //LOADING SCREEN (LANDING PAGE) (depends on if cookie set)
  //anchor is placed for looks only
  //screen loads with menu open
  //menu icon is hidden
  //location is hidden
  //scrolling is set to false
  //after the screen loads, the ability to scroll becomes available
  //when you scroll or click a link from the landing page, the menu icon, location, and everything else become visible
  //when you scroll on the landing page, the first slide needs to be the first section, not the second
  //the JS load will have a min time, and the animations and stuff will continue for as long as the loading takes within reason.

  //when load is done, site is clear to go into the interactive state, unless minimum time in load hasn't been met.
  //console.log('app 3 is active');
  //$('#fullpage').hide();
  $('.icon-container').hide();
  $('#landing').addClass('window-open');
  $.fn.fullpage.setAllowScrolling(false, 'all');
  $.fn.fullpage.setKeyboardScrolling(false, 'all');

  //var s = Snap(document.getElementById("nameanimation"));

  //console.log(s);

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

  //var reticulating = Snap.select('.reticulating');
  //var geoffPoints = geoff.node.getAttribute('d');
  //var reticulatingPoints = reticulating.node.getAttribute('d');
  var nameTransitionSpeed = 500;
  var pullDownMatrix = new Snap.Matrix();
  //pullDownMatrix.scale(.5,.5, 40, 30);
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

  //line loading animation

  //var lineSVG = Snap(document.getElementbyId("menuline"));
  //var polyline1; 

  var lineSVG = Snap("#menuline");

  var polyline1 = lineSVG.select('#polyline1');
  var polyline2 = lineSVG.select('#polyline2');
  var polyline3 = lineSVG.select("#polyline3");

  var line1Time = 500;
  var line2Time = 500;
  var line3Time = 500;
  var totalLineTime = line1Time + line2Time + line3Time;

  function runNameAnimation(){
    var runLine1 = function(){
      //console.log('line 1 running');
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
      }).animate({'stroke-dashoffset': 0}, line2Time, mina.linear, runLine3);
    }
    var runLine3 = function(){
      //console.log('line 3 running');
      polyline3.attr({
        fill: 'none',
        "stroke-dasharray": 300,
        "stroke-dashoffset": 300,
        stroke: 'url(#menu-line-gradient)'
      }).animate({'stroke-dashoffset': 0}, line3Time, mina.easeout, toGeoffPowell);
    }
    runLine1();
  }
  runNameAnimation();


  ////////////////////////////////////////////////////////////


  var numSegments = 7; //number of times the 'percentage uploaded view' updates.
  var percentDoneTimeSegment = totalLineTime / numSegments; 
  var millisecondRange = 300; //range in one direction that the millisecond time in each segment can vary.

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
      //console.log(Math.floor(randomizedSegment/totalLineTime*100) + "%");
    //}, percentDoneTimeSegment * (segment+1)); //use this line for even 'percentDone intervals'
      }, randomizedSegment);
    //console.log("this time segment was " + percentDoneTimeSegment*(segment + 1));
  }

  for(var i = 0; i <= numSegments-2; i++) { 
    runTimeOut(i);
  }

  //the last segment always lands on 100% and fires the functions to change the counter to welcome text, menu, etc
  var portfolioMenuOpen = false;

  //TIMEOUT RELATIVE TO THE TOTAL LINE TIME???
  setTimeout(function(){
    //console.log(percentDoneTimeSegment*numSegments/totalLineTime*100 + "%");
    $("#counter span").text('100');
    $("ul#menu").css('visibility', 'visible');
    $("ul#menu").animate({'opacity': 1}, nameTransitionSpeed*3);
    $(".description-box #counter").animate({'opacity': 0}, nameTransitionSpeed);
    $(".description-box #description").animate({'opacity': 1}, nameTransitionSpeed*3);
    
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
        //do nothing
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
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    // $("#portfolio-link").click(function(e){
    //   e.preventDefault();
    //   $(this).toggleClass('white');
    //   $("#sub-menu-container").toggleClass('open'); 
    //   $("#polyline4").toggleClass('sticky');
    //   $("#sub-menu-container li a").toggleClass('white');
    //   if ($("#polyline4").hasClass('sticky')) {
    //     portfolioMenuOpen = true;
    //     // console.log('turn text and lines green');
    //     $("#polyline5").addClass('temp-unsticky');
    //     $("#Resume-link").addClass('temp-unwhite');
    //     $("#polyline6").addClass('temp-unsticky');
    //     $("#Contact-link").addClass('temp-unwhite');
    //     console.log('temp classes added onto resume and contact');
    //   } else {
    //     portfolioMenuOpen = false;
    //     // $("#polyline5").removeClass('temp-unsticky');
    //     // $("#Resume-link").removeClass('temp-unwhite');
    //     // $("#polyline6").removeClass('temp-unsticky');
    //     // $("#Contact-link").removeClass('temp-unwhite');
    //     console.log('temp classes removed from resume and contact');
    //   }
    //   console.log('is menu open? : ' + Boolean(portfolioMenuOpen));
    // });


    // $("#portfolio-link").hover(function(){
    //   console.log('on hover is menu open?:' + Boolean(portfolioMenuOpen));
    //   if ($("#polyline4").hasClass('sticky')) {
    //     //console.log('polyline is sticky and returned false');
    //   } else {
    //     //console.log('polyline is not stuck open so we can animate it');
    //     $("#polyline4").toggleClass('active');
    //     //$("#polyline5").toggleClass('temp-unsticky');
    //     //$("#polyline6").toggleClass('temp-unsticky');
    //   }

    //   if ($('li[data-menuanchor="Resume"]').hasClass('active') && !portfolioMenuOpen) {
    //     $("#polyline5").toggleClass('temp-unsticky');
    //     $("#Resume-link").toggleClass('temp-unwhite');
    //     console.log('resume has active class');
    //   } 
    //   // else if ($('li[data-menuanchor="Resume"]').hasClass('active') && !portfolioMenuOpen) {
        
    //   // }
    //   else if ($('li[data-menuanchor="Contact"]').hasClass('active')){
    //     $("#polyline6").toggleClass('temp-unsticky');
    //     $("#Contact-link").toggleClass('temp-unwhite');
    //     console.log('contact has active class');
    //   } else {

    //   }
  
    // });


    // $("#Resume-link").hover(function(){
    //   if (portfolioMenuOpen) {
    //     //actual changes to this hover
    //     $("#polyline5").toggleClass('temp-unsticky');
    //     $("#Resume-link").toggleClass("temp-unwhite");
    //     //changes to portfolio
    //     $("#polyline4").toggleClass('temp-unsticky');
    //     $("#portfolio-link").toggleClass('temp-unwhite');
    //     $("#sub-menu-container li a").toggleClass('temp-unwhite');
    //   }
    //   // if ($('li[data-menuanchor="Contact"]').hasClass('active')){

    //   //   $("#polyline5").toggleClass('active');
    //   //   $("#Contact-link").toggleClass('temp-unwhite');
    //   //   $("#polyline6").toggleClass('temp-unsticky');
    //   // }
    // });

    // $("#Contact-link").hover(function(){
    //   if (portfolioMenuOpen) {
    //     //actual changes to this hover
    //     $("#polyline6").toggleClass('temp-unsticky active'); //have to add the active class because there is no active on it by default
    //     $("#Contact-link").toggleClass("temp-unwhite");
    //     //changes to portfolio
    //     $("#polyline4").toggleClass('temp-unsticky');
    //     $("#portfolio-link").toggleClass('temp-unwhite');
    //     $("#sub-menu-container li a").toggleClass('temp-unwhite');
    //   }
    // });
    


    // $("#Resume-link, #Contact-link").mouseout(function(){
    //   if ($("#sub-menu-container").hasClass('open')) {
    //     $("#portfolio-link").addClass('white');
    //     $("#polyline4").addClass('active sticky');
    //     $("#sub-menu-container li a").addClass('white');
    //   } else {
    //     return false;
    //   }
    // });


    //////////////////////////////////////////////////////////

    //need functionality so that when the links from the menu are clicked (that aren't the portfolio links), they clear out an 'open state on the portfolio'. The active states native to fullpage will govern the look of the active states of the submenu and and the main menu. Everytime the links are clicked, run a function to check active states and set them accordingly. Will involve modifying style sheets.
    //on change event whether it be clicking a nav item or scrolling, do function
        //clear active states.
        //check to see if portfolio or children are active (resume is not active, contact is not active and portfolio has an open state). 
        //if they are not, remove all the portfolio active states. 
        //check to see if resume is active, if so, add white color to line
        //check to see if contact is active, if so, add white color to line

    //hovering on any clickable link will temporarily make everything else blue, but coming off hover will return the states to the way they were.

    //  var resetState = function() {
    //   //on change

    //   //if it belongs to portfolio, keep all portfolio states active. 
    //   //if it's resume, add line active state to line 5, remove line active state to contact, remove active states to portfolio. 
    //   //if it's contact, add line active state to line 6, remove line active state to resume, remove active states to portfolio.
    //   //console.log(Boolean($('li[data-menuanchor="Resume"]').hasClass('active')));
    //   //console.log(Boolean($('li[data-menuanchor="Contact"]').hasClass('active')));
    // }
  
    //resetState();

  }, percentDoneTimeSegment*numSegments);


 


  // $(window).bind('mousewheel DOMMouseScroll', function(e){ 
  //  // console.log('mousewheel moved');
  // //will need to check that this bind works on all devices(for instance what about touch devices);
  //   $('#landing').removeClass('window-open');
  //   //$('#fullpage').show();
  //   $('.icon-container').show();
  //   //$('.location-blurb').removeClass('loc-hide'); //this line is needed but only bound to the landing page.
  //   //make the first portfolio page that this opens up on active so we can see it.
  //   $('.menu-icon .inner').removeClass('open');
  //   //$.fn.fullpage.silentMoveTo(1);
  //   //$.fn.fullpage.setAllowScrolling(true, 'all');
  //   //$.fn.fullpage.setAllowScrolling(true, 'all');
  //   //upon response need to unbind mousewheel functions so when you go back into the menu you can't scroll out of it, but rather have to use the button.
  // });
});

    