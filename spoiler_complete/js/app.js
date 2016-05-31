//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//1, Hide spoiler

$(".spoiler span").hide();

//2, add a button

$(".spoiler").append("<button>Reveal Spoiler!</button>");

//3, When button is PRESSED show spoiler
$("button").click(function(){
	//Show spoiler next to button clicked
	$(this).prev().show();
	//4, get rid of button
	$(this).remove();
})

