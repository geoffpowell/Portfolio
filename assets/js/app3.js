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

  //$('#fullpage').hide();
  $('.icon-container').hide();
  $('#landing').addClass('window-open');
  //$.fn.fullpage.setAllowScrolling(false, 'all');
  //$.fn.fullpage.setKeyboardScrolling(false, 'all');
  $(window).bind('mousewheel DOMMouseScroll', function(e){ 
   // console.log('mousewheel moved');
  //will need to check that this bind works on all devices(for instance what about touch devices);
    $('#landing').removeClass('window-open');
    //$('#fullpage').show();
    $('.icon-container').show();
    //$('.location-blurb').removeClass('loc-hide'); //this line is needed but only bound to the landing page.
    //make the first portfolio page that this opens up on active so we can see it.
    $('.menu-icon .inner').removeClass('open');
    //$.fn.fullpage.silentMoveTo(1);
    //$.fn.fullpage.setAllowScrolling(true, 'all');
    //$.fn.fullpage.setAllowScrolling(true, 'all');
    //upon response need to unbind mousewheel functions so when you go back into the menu you can't scroll out of it, but rather have to use the button.
  });
});

    