
$(document).ready(function(){

	//MENU 
	$(".menu-icon").click(function(){
		//toggle mobile menu icon from closed to open.
		$(this).toggleClass("open");

		//toggle the open class on the nav
		$(".nav").slideToggle(300);
		$(".nav").toggleClass("open");
			if ($(".nav").hasClass("open")) {
			navOpen = true;
			console.log("open is " + navOpen);
			$("h1.portfolio-piece").css({"border-top": "none"});

		} else {
			navOpen = false;
			console.log("open is " + navOpen);
			$("h1.portfolio-piece").css({"border-top": "1px solid grey"});
		}
		//if the document is in menu mode and resize happens..refresh the browser on resize
		if ($(window).width() < 1024, navOpen == false ){ 
			console.log("nav is not open, so we need to refresh the page on resize");
			$(window).resize(function(){
				location.reload();
			});
		 } else {
			// console.log("It's allllll good");
		}
	});

	//when certain page is loaded, eg: resume.php, etc, append active class to the appropriate resume list item within the header.
		//get class of the body element
	var bodyClass = $("body").attr('class');
	//get the <li> with <a> that has the content which is the same as bodyClass variable, then add the class "active" to that <a>'s particular <li> parent.
	var holdChildren =  $(".nav li").children();
	// console.log(holdChildren);
		//Each <a> element hits on index 0, 2, and 4
		//iterate over the array of nav li children
	for (i = 0; i < holdChildren.length; i += 2) {
		//conditional to append the class if there's a match with the body class variable
		if ($(holdChildren[i]).text() === bodyClass) {
			//saves the parent <li> of each <a> to a variable
			var parentLi = ($(holdChildren[i]).parent());
			$(parentLi).addClass('active');
		}
	}


	/***********************
	SLIDING PORTFOLIO IMAGES
	************************/
	// if (bodyClass == "portfolio") {
	// 	var clicked = false;
	// 	function calc() {
	// 		console.log("------------------------------------")
	// 		//these vars work with every piece.
	// 		var img_right_margin = 30;
	// 		var right_col_width = $(".col-right").width();
	// 		console.log("The right column is: " + $(".col-right").width() + "px");
	// 		//reset css if this function is being called by window resize:
	// 		// $(".img-group").css("left", right_col_width + img_right_margin);

	// 		$(".img-group").each(function(index){
	// 		//setup starting data for each image group
	// 			var num_work_samples = $(this).children().length;
	// 			$(this).data("numWorkSamples", num_work_samples);
			
	// 			var img_viewable_width = right_col_width;
	// 			console.log("the img_viewable_width variable is: "+ img_viewable_width);
	// 			var new_img_group_width = (num_work_samples * img_viewable_width) + 
	// 																(img_right_margin * num_work_samples);
	// 			$(this).data("newImgGroupWidth", new_img_group_width);
	// 		//actually set the width of each img-group
	// 			$(this).width(new_img_group_width);
	// 		//actually set each image width
	// 			$(this).children(".img-container").width(img_viewable_width)
	// 				.css('margin-right', img_right_margin);
	// 		//add the num_work_sample number to the span related to the project.
	// 			var related_img_nav_div = $(this).siblings(".image-nav");
	// 			var related_img_counter = $(related_img_nav_div).children(".image-counter");
	// 			var related_span_wrap = $(related_img_counter).children();
	// 			var related_num_total_imgs = $(related_span_wrap).children("span.total-images");
	// 			$(related_num_total_imgs).html(num_work_samples);

	// 			//if there is already a current position set from the click, recalculate it when this function runs so that we get proper intervals.
	// 			if(clicked == true) {
	// 				//adjust previous position
	// 				var pos_adjust = ($(this).data("stepCount") - 1) 
	// 														* (img_viewable_width +
	// 															img_right_margin);
	// 				console.log("the adjusted position is:" + pos_adjust);	
	// 				$(this).css('left', -pos_adjust);
	// 				$(this).data("currentPosition", pos_adjust);
	// 			} else {
	// 				//set the data to 0 for a starting point if no click has been made.
	// 				$(this).data("currentPosition", 0);
	// 				//set the step count to 0 for a starting point if no click has been made.
	// 				$(this).data("stepCount", 0);
	// 			}


	// 			$(this).data("travelAmount", img_viewable_width + img_right_margin);
	// 			// $(this).data("maxTravel", new_img_group_width);
	// 			//the maxstepcount is always equal to the number of number of work samples
	// 			$(this).data("maxStepCount", num_work_samples);

	// 			console.log("Number work samples: " + $(this).data("numWorkSamples"));
	// 			console.log("New Image group width: " + $(this).data("newImgGroupWidth"));
	// 			console.log("The directly measured width of this imagegroup: " + $(this).width());
	// 			console.log("The travel amount is set to: " + $(this).data("travelAmount"));
	// 			// console.log("The maximum travel is set to: " + $(this).data("maxTravel"));
	// 			console.log("The step_count is at: " + $(this).data("stepCount"));
	// 			console.log("The current position: " + $(this).data("currentPosition"));
	// 			console.log("------------------END PROJECT-------------------");	
	// 		});		
	// 	}

	// 	calc();
	// 	var calc_timeout = false;
	// 	$(window).resize(function(){
	// 		if (calc_timeout != false) {
	// 			clearTimeout(calc_timeout);
	// 		}
	// 		calc_timeout = setTimeout(calc, 200);
	// 	});

	// 	function animate_images(event){
	// 		clicked = true;
	// 		var move_direction = (event.data.direction);
	// 		var project = $(this).parents(".project");
	// 		var col_right = $(project).children(".col-right");
	// 		var this_image_group = $(col_right).children(".img-group");
	// 		var current_position = $(this_image_group).data("currentPosition");

	// 		if ($(this_image_group).data("stepCount") != 
	// 				$(this_image_group).data("maxStepCount") &&
	// 				move_direction == "left") {
	// 				console.log('right button clicked');
	// 				$(this_image_group).animate({
	// 						left: "-=" + $(this_image_group).data("travelAmount"),
	// 						// right: "+=" + $(this_image_group).data("travelAmount")
	// 				}, 250);

	// 				console.log("we just traveled " + $(this_image_group).data("travelAmount"));

	// 				//math for new position
	// 				current_position += $(this_image_group).data("travelAmount");
	// 				console.log("now the current position is " + current_position);
	// 				//update the position in the actual data
	// 				$(this_image_group).data("currentPosition", current_position);
	// 				// console.log("Current position:" + current_position);

	// 				//update the span that tells user which slide they are on.
	// 					//get the current step count and save to var
	// 				var step_count = $(this_image_group).data("stepCount");
	// 				step_count ++;
	// 				//update step_count data
	// 				$(this_image_group).data("stepCount", step_count);
	// 				console.log("now the step count is:" + step_count);
	// 				//update step_count view
	// 				$(col_right).children(".image-nav")
	// 										.children(".image-counter")
	// 										.children(".current-img-of-total")
	// 										.children(".current-img")
	// 										.html(step_count);

	// 		} else if ($(this_image_group).data("stepCount") != 0 
	// 								&& move_direction == "right") {
	// 			console.log($(this_image_group).data("currentPosition"));
	// 			$(this_image_group).animate({
	// 						left: "+=" + $(this_image_group).data("travelAmount"),
	// 						// right: "-=" + $(this_image_group).data("travelAmount")
	// 				}, 250);

	// 				console.log("we just traveled " + -$(this_image_group).data("travelAmount"));

	// 				//math for new position
	// 				current_position -= $(this_image_group).data("travelAmount");
	// 				console.log("now the current position is " + current_position);

	// 				//update the position in the actual data
	// 				$(this_image_group).data("currentPosition", current_position);
	// 				// console.log($(this_image_group).data("currentPosition"));
	// 				//update the span that tells user which slide they are on.
	// 					//get the current step count and save to var
	// 				var step_count = $(this_image_group).data("stepCount");
	// 				step_count --;
	// 				//update step_count data
	// 				$(this_image_group).data("stepCount", step_count);
	// 				console.log("now the step count is:" + step_count);
	// 				$(this_image_group).data("stepCount", step_count);
	// 				//update step_count view
	// 				$(col_right).children(".image-nav")
	// 										.children(".image-counter")
	// 										.children(".current-img-of-total")
	// 										.children(".current-img")
	// 										.html(step_count);
	// 		} else {
	// 			console.log("you've reached the end, my friend, with a final position of " +
	// 									current_position);
	// 			$(this).addClass("stopped");
	// 			//timeout works roughly with css animation. Indicates that the slides are over.
	// 			function thumb_stop_indicator() {
	// 					timeout = window.setTimeout(remove_indicator_class, 300);
	// 				}
	// 			function remove_indicator_class(){
	// 				$(".next-button").removeClass("stopped");
	// 				$(".back-button").removeClass("stopped");
	// 			}
	// 			thumb_stop_indicator();
	// 		}
	// 		//frost or unfrost bgimage for project depending which slide user is on.
	// 		if ($(this_image_group).data("stepCount") != 0) {
	// 			$(project).addClass("frost");
	// 		} else {
	// 			$(project).removeClass("frost");
	// 		}

			
	// 	}
	// 		$(".next-button").click({direction: "left"}, animate_images);
	// 		$(".back-button").click({direction: "right"}, animate_images);

	// }//end if body class == portfolio


	if (bodyClass == "contact") {
		//Form validation for contact form
		var name = false;
		var email = false;
		var message = false;
		var alphanumericPattern = /^[A-Z a-z]+$/;
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

		function check_fields() {
			if (name == true && email == true && message == true) {
					$("#submit-message").removeAttr("disabled").removeClass("disabled");
					console.log("button has been enabled.")
				}
			else {
				//grey out and disable the button
				$("#submit-message").attr("disabled", "disabled");
				$("#submit-message").addClass("disabled");
					console.log("button still disabled");
					console.log(name);console.log(email);console.log(message);

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
				console.log("remove both classes");
				elementToChange.removeClass("pass fail");
				create_falses();
			} else if (condition) { 
				//remove green checkmark, add red check and warning.
				console.log("remove checkmark, add red check");
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
		}

		$("#name").bind("keyup blur change", function(){
			var condition = !alphanumericPattern.test($(this).val()) || $(this).val().length < 1;
			validate($(this), "name", condition, $("#validate_name"));
		});

		$("#email").bind("keyup blur change", function(){
			var condition = !emailPattern.test($(this).val());
			validate($(this), "email", condition, $("#validate_email"));
		});

		$("#message").bind("keyup blur change", function(){
			var condition = $(this).val().length == 0;
			validate($(this), "message", condition, $("#validate_message"));
		});

		
		





		// $("#submit-message").removeAttr('disabled');


	} //end if bodyclass contact

});

