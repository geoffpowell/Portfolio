<?php

//server loads all the variables from the post array
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
// $phone = trim($_POST["phone"]);
$message = trim($_POST["message"]);

//validating all the data
if ($name == "" OR $email == "" OR $message == "") {
	echo "You must give your name and email address to send your message.";
	exit;
}

foreach( $_POST as $value ){
	if( stripos($value, 'Content-Type:') !== FALSE ){
		echo "There was a problem with the information you entered.";
		exit;
	}
}

if ($_POST["address"] != "") {
	echo "Your form submission has an error.";
	exit;
}

require_once("inc/phpmailer/class.phpmailer.php");
$mail             = new PHPMailer();

if (!$mail->ValidateAddress($email)){
	echo "You must specify a valid email address.";
	exit;

}

//packaging variables into email body
$email_body = "";
$email_body = $email_body . "Name: " . $name . "<br>";
$email_body = $email_body . "Email: " . $email . "<br>";
// $email_body = $email_body . "Phone: " . $phone . "<br>";
$email_body = $email_body . "Message: " . $message;

//Send Email


$mail->SetFrom($email, $name);

$address = "geoffreyjpowell@gmail.com";
$mail->AddAddress($address, "Geoff Powell");
$mail->Subject    = "Contact Form| " . $name;
$mail->MsgHTML($email_body);

if(!$mail->Send()) {
  echo "There was a problem sending the email: " . $mail->ErrorInfo;
  exit;
}

header("Location: thankyou.php");
exit;
}

?>


<!DOCTYPE html>
<html lang="en">

<?php
//page variables
$title = "Contact";
$metaDescription = "\"Easily contact me using the provided form or email.\"";
$metaKeywords = "\"Geoff, Powell, Geoff Powell, Web, Graphic, Design, Portfolio, Web Design, Web Development, Contact, Contact Info\"";
?>

<?php include 'includes/head.php' ?>

<body class="contact">
	<?php include 'includes/header.php' ?>

	<div class="fluidcssgrid">
		<div class="onerow">
			<div class=" h1-wrapper">
				<h1>Contact</h1>
			</div>
		</div>
		<div class="onerow">
			<!--spacer column-->
			<div class="col2 col-spacer">&nbsp;</div>
			<div class="col3 expand">
				<img src="img/portfolio-pic.jpg" id="portfolio-pic">
				<p>I'm currently <span class="available">available</span> for hire.<br>
				<!-- Feel free to contact me directly:
				<img src="img/email.png" id="email-img">

				<div class="social-icon-group">
					<a href="https://twitter.com/thisgeoff" class="social-icon" id="twitter" target="_blank"></a>
					<a href="https://www.linkedin.com/pub/geoff-powell/85/48a/759" class="social-icon" id="linkedin" target="_blank"></a>
					<a href="https://plus.google.com/116063005113225185722/posts" class="social-icon" id="googleplus" target="_blank"></a>
					<a href="https://github.com/geoffpowell" class="social-icon" id="github" target="_blank"></a>
				</div> -->
			</p>
			</div>
			<div class="col5 expand last">
				<form method="post" action="contact.php" name="contact_form">
					<fieldset>
						<div class="onerow form-spacer">
							<label for="name" class="col3">Name:</label>
							<div class="col9 last">
								<input type="text" name="name" id="name" autofocus="autofocus" maxlength="50" placeholder="Your name"><span class="input-validate"><span id="validate_name" class=""></span></span>
							</div>
						</div>
						<div class="onerow form-spacer">
							<label for="email" class="col3">Email:</label>
							<div class="col9 last">
								<input maxlength="50" type="text" name="email" id="email" placeholder="Your email"><span class="input-validate"><span id="validate_email" class=""></span></span>
							</div>
						</div>
						<div class="onerow form-spacer">
							<label for="message" class="col3">Message:</label>
								<div class="col9 last">
									<textarea class="col9 last" name="message" id="message" placeholder="Your message here"></textarea><span class="input-validate"><span id="validate_message" class=""></span></span>
								</div>
						</div>
						<div class="onerow form-spacer">
							<input id="submit-message" class="disabled" disabled="disabled" type="submit" value="Send Message">
						</div>
						<!-- <a href="thankyou.php">Thanks page</a> -->
					</fieldset>
				</form>
			</div><!--end col5 last-->
		</div>
		<?php include 'includes/footer.php' ?>
	</div><!--end onepcssgrid-->
	<?php include 'includes/scripts.php' ?>
</body>
</html>