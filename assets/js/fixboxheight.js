$(document).ready(function(){
  //need fallback if no JS otherwise there will be no .paper class
  function setInnerBoxHeight(){
    //test first section height
    var innerBoxMarginLeft = parseInt($('.inner-box').css('margin-left'));
    var heightOfWindow = $(window).height();
    var innerBoxHeight = heightOfWindow - innerBoxMarginLeft * 2;
    $('.inner-box').height(innerBoxHeight);
    console.log('innerBoxMarginLeft = ' + innerBoxMarginLeft);
    console.log('heightOfWindow = ' + heightOfWindow);
    console.log('innerBoxHeight = ' + innerBoxHeight); 
    console.log('height of .inner-box adjusted to ' + innerBoxHeight);
  }
  setInnerBoxHeight();
  $(window).resize(setInnerBoxHeight);


//   //just a js test (delete when done)
//   // for (var i = 0; i < 22; i++) {
//   //   var rotateClass = undefined;
//   //   console.log(i%2);
//   //   if ( i % 2 == 0 ) {
//   //     $("#addDiv").append("<div class='col-1' style='background-color: black'>TCol Size</div>");
//   //   } else {
//   //     $("#addDiv").append("<div class='col-1' style='background-color: blue'>TCol Size</div>");
//   //   }
//   // }





});

