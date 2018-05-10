 // window.addEventListener("load", function(event) {
 //    console.log("All resources finished loading!");
 //  });

 $(window).load(function(){
    console.log("All resources finished loading!");
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

  //when load is done, site is clear to go into the interactive state, unless minumum time in load hasn't been met.
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
  var nameTransitionSpeed = 1000;
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
      console.log(segment+1 + ' updated');
      console.log('random int was ' + randomizedSegment);
      $("#counter span").text(Math.floor(randomizedSegment/totalLineTime*100));
      console.log(Math.floor(randomizedSegment/totalLineTime*100) + "%");
    //}, percentDoneTimeSegment * (segment+1)); //use this line for even 'percentDone intervals'
      }, randomizedSegment);
    //console.log("this time segment was " + percentDoneTimeSegment*(segment + 1));
  }

  for(var i = 0; i <= numSegments-2; i++) { 
    runTimeOut(i);
  }

  //the last segment always lands on 100% and fires the functions to change the counter to welcome text, menu, etc
  setTimeout(function(){
    console.log(percentDoneTimeSegment*numSegments/totalLineTime*100 + "%");
    $("#counter span").text('100');
    $("ul#menu").css('visibility', 'visible');
    $("ul#menu").animate({'opacity': 1}, nameTransitionSpeed*3);
    $(".description-box #counter").animate({'opacity': 0}, nameTransitionSpeed);
    $(".description-box #description").animate({'opacity': 1}, nameTransitionSpeed*3);
    
    // set hover states for svg line segments and menu items
    $("#portfolio-link").click(function(e){
      e.preventDefault();
      $(this).toggleClass('white');
      $("#sub-menu-container").toggleClass('open'); //if closed
      $("#polyline4").toggleClass('sticky');
      $("#sub-menu-container li a").toggleClass('white');
    });
    $("#portfolio-link").hover(function(){
      if ($("#polyline4").hasClass('sticky')) {
        console.log('polyline is sticky and returned false');
        return false;
      } else {
        console.log('polyline is not stuck open so we can animate it');
        $("#polyline4").toggleClass('active');
      }
    });
    $("#Resume-link").hover(function(){
      //white line goes away, sub-menu container stays open, link and submenu change colors. 
      $("#portfolio-link").removeClass('white');
      $("#sub-menu-container li a").removeClass('white')
      $("#polyline4").removeClass('active sticky');

      $("#polyline5").toggleClass('active');
      //change submenu to green text
    });
    $("#Contact-link").hover(function(){
      //white line goes away, sub-menu container stays open, link and submenu change colors. 
      $("#portfolio-link").removeClass('white');
      $("#sub-menu-container li a").removeClass('white')
      $("#polyline4").removeClass('active sticky');

      $("#polyline6").toggleClass('active');
      //change submenu to green text
    });
    $("#Resume-link, #Contact-link").mouseout(function(){
      if ($("#sub-menu-container").hasClass('open')) {
        $("#portfolio-link").addClass('white');
        $("#polyline4").addClass('active sticky');
        $("#sub-menu-container li a").addClass('white');
      } else {
        return false;
      }
    });

    //need functionality so that when the links from the menu are clicked (that aren't the portfolio links), they clear out an 'open state on the portfolio'. The active states native to fullpage will govern the look of the active states of the submenu and and the main menu. Everytime the links are clicked, run a function to check active states and set them accordingly. Will involve modifying style sheets.


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

    