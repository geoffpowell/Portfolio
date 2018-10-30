$(document).ready(function(){

  //contact form validation
  var name = false;
  var email = false;
  var message = false;
  var alphanumericPattern = /^[A-Z a-z]+$/;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //timers for validation on keyup events in fields
  var nameTimer = null;
  var emailTimer = null;
  var messageTimer = null;

  function check_fields() {
    if (name == true && email == true && message == true) {
        $("#submit-message").removeAttr("disabled").removeClass("disabled").addClass("enabled");
      }
    else {
      $("#submit-message").attr("disabled", "disabled");
      $("#submit-message").addClass("disabled").removeClass("enabled");
    }
  }

  function validate(element, field_name, condition, elementToChange) {
    function create_falses() {
      switch(field_name) {
        case "name":
          name = false;
          break;
        case "email":
          email = false;
          break;
        case "message":
          message = false;
          break;
        default:
          return;
      }
    }
    if (element.val() == "") {
      elementToChange.removeClass("pass fail");
      create_falses();
    } else if (condition) { 
      //console.log("remove checkmark, add red check");
      $(elementToChange).removeClass("pass").addClass("fail");
      create_falses();
    } else {
        switch(field_name) {
          case "name":
            name = true;
            break;
          case "email":
            email = true;
            break;
          case "message":
            message = true;
            break;
          default: return;
        }
      // console.log(field_name);
      $(elementToChange).removeClass("fail").addClass("pass");
    }
    check_fields();
  } //end validate

  //conditions for fields
  function nameCondition(elem){
    return !alphanumericPattern.test(elem.val()) || elem.val().length < 1;
  }
  function emailCondition(elem) {
    return !emailPattern.test(elem.val());
  }
  function messageCondition(elem) {
    return elem.val().length == 0;
  }
  //name field events
  $("#name").bind("blur change", function(){
    validate($(this), "name", nameCondition($(this)), $("#validate_name"));
  });

  $("#name").on("keyup", function(){
    var element = $(this);
    if (nameTimer) {
      clearTimeout(nameTimer);
    }
    nameTimer = setTimeout(function(){
      validate(element, "name", nameCondition(element), $("#validate_name"));
    }, 300);
  });
  //email field events
  $("#email").bind("blur change", function(){
    validate($(this), "email", emailCondition($(this)), $("#validate_email"));
  });

    $("#email").on("keyup", function(){
    var element = $(this);
    if (emailTimer) {
      clearTimeout(emailTimer);
    }
    emailTimer = setTimeout(function(){
      validate(element, "email", emailCondition(element), $("#validate_email"));
    }, 700);
  });
  //message field events
  $("#message").bind("blur change", function(){
    validate($(this), "message", messageCondition($(this)), $("#validate_message"));
  });

  $("#message").on("keyup", function(){
    var element = $(this);
    if (messageTimer) {
      clearTimeout(messageTimer);
    }
    messageTimer = setTimeout(function(){
      validate(element, "message", messageCondition(element), $("#validate_message"));
    }, 300);
  });
});