<!DOCTYPE html>
<html lang="en">

<?php
//page variables
$title = "Geoff Powell's Resume";
$metaDescription = "\"My resume, conveniently online for your rapid perusal.\"";
$metaKeywords = "\"Geoff, Powell, resume, Geoff Powell, Web, Graphic, Design, Portfolio, Web Design, Development, Web Development\"";
?>

<?php include 'includes/head.php' ?>

<body class="resume">
	<?php include 'includes/header.php' ?>
			
	<div class="fluidcssgrid">
		<div class="onerow">
			<div class="h1-wrapper">
				<h1>Resume</h1>
				<a href="" class="btn-action" id="resume-print" onClick="window.print()">
				Print It</a>
			</div>
		</div>
		<div class="left_side_container col9"><!--left side-->

			<div class="onerow"><!--h2 wrap - keeps the h2 and child content in a row of its own-->
				<h2 class="res_col2">Statement</h2>
				<p class="res_col7 last">I'm a content-first visual designer focused on designing and developing for the web. Among my top priorities are site usability, positive user experience, simple aesthetics, and clean, documented code. With outstanding communication skills and self-motivation I work efficiently both in teams and alone to produce high quality visual and interactive products.
				</p>
			</div>

			<div class="onerow">
				<h2 class="res_col2">Experience</h2>
					<div class="res_col7 last">
						<div class="onerow">
							<div class="res_col7-nest2">
								<h3>Web &amp; Graphic Designer</h3>
								<p>K&auml;ttare Web Solutions</p>
								<p>4/14 - Current</p>
							</div>
							<p class="res_col7-nest4 last">
								Redesign, code, document and maintain company website. Design print and web ads, write ad copy. Design and develop static web pages. Perform HTML, CSS &amp; jQuery / Javascript updates to K&auml;ttare's internal site to improve usability.
							</p>
						</div>

						<div class="onerow">
							<div class="res_col7-nest2">
								<h3>Web &amp; Graphic Designer</h3>
								<p>Independent Projects</p>
								<p>9/13 - Current</p>
							</div>
							<p class="res_col7-nest4 last">
								Contract out to design an array of products, from logos to fully functional websites. Continually experiment with new languages and design ideas.
							</p>
						</div>

						<div class="onerow">
							<div class="res_col7-nest2">
								<h3>Production Lead</h3>
								<p>Media Services @ OSU</p>
								<p>3/11 - 6/13</p>
							</div>
							<p class="res_col7-nest4 last">
								Designed and produced several graphic products for department use and display, including training modules, poster templates, and informational signs. Managed office resources and trained student workers. Worked with web developers to help create online product order forms. 
							</p>
						</div>	

						<div class="onerow">
							<div class="res_col7-nest2">
								<h3>Art Tutor</h3>
								<p>Academic Success Center @ OSU</p>
								<p>10/10 - 6/11</p>
							</div>
							<p class="res_col7-nest4 last">
								Held multiple weekly study sessions for art lecture students. Designed
								games, slideshows, and group activities. Worked with students one on one as writing tutor prior to taking on art tutor role.
							</p>
						</div>


					</div><!--end big left col-->
			</div>
			<div class="onerow">
				<h2 class="res_col2">Education</h2>
				<p class="res_col7 last">Oregon State University, 2012</p>
			</div>
		</div><!--end left-side container-->

		<!--Right side-->
		<div class="right_side_container col3 last">
			<h2>Skills:</h2>
			<p>HTML5, CSS3, jQuery / JavaScript, Bootstrap, Less, Responsive Design, Adobe Illustrator &amp; Photoshop, Copy Writing.</p>

			<h2>Familiar With:</h2>
			<p>Wordpress, Joomla, Mezzanine, Git, inDesign, PHP</p>

			<!-- <h2>Currently Studying:</h2>
			<p>Javascript, PHP, Django</p> -->
		</div>
		<?php include 'includes/footer.php' ?>
	</div><!--end 1pcssgrid--> 
	<?php include 'includes/scripts.php' ?>
</body>
</html>