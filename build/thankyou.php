<?php

//$pageTitle = "Contact English Advantage";
//the above $pageTitle is a variable created to reference the page title in the corresponding HTML. For instance, if I had a header here on this page in the form of a PHP include - something like this: include('inc/header.php');  then I can write $pageTitle = "Contact English Advantage" above that line and it would plug in the title so it shows in the browser tab. To work, the HTML of the header file needs to have a php echo $pageTitle; inside the TITLE tag.

?>

<!DOCTYPE html>
<html lang="en">

<?php
//page variables
$title = "Thank You";
$metaDescription = "\"\"";
$metaKeywords = "\"\"";
?>

<?php include 'includes/head.php' ?>

<body class="contact-thanks">
	<?php include 'includes/header.php' ?>

	<div class="fluidcssgrid">
		<div class="onerow">
			<img src="img/check-mark.png">
			<p><span>Message received!</span><br>I will respond as soon as possible.</p>
		</div>
		<div class="btn-container">
			<a href="portfolio" class="btn-action">Return to Portfolio</a>
		</div>
		
	</div>
	<?php include 'includes/scripts.php' ?>
</body>
</html>
