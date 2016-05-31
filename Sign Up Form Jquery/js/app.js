//Problem: Hints are shown even when form is valid
//Solution: Hide and show then at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
//Hide Hints
$("form span").hide();

function isPasswordValid () {
	return $password.val().length > 8;
}

function arePasswordsMatching () {
	return $password.val() === $confirmPassword.val();
}

function canSubmit() {
	return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent() {
	//Find out if password is valid
	if (isPasswordValid()) {
		//Hide hint if valid
		$password.next().hide();
	} else {
		$password.next().show();
		//Else show hint
	}
}

function confirmPasswordEvent() {
	//Find out if PW and confirmation match
	if (arePasswordsMatching()) {
		//Hide hint if match
		$confirmPassword.next().hide();
	} else {
		//Else show hint
		$confirmPassword.next().show();
	}
		
		
}

function enableSubmitEvent() {
	$("#submit").prop("disabled", !canSubmit());
}
//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
	
	

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
enableSubmitEvent();
