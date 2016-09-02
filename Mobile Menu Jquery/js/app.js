//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//Create select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);


//Cycle over menu links
$("menu, a").each(function(){
	var $anchor = $(this);
//Create an option
	var $option = $("<option></option>");

//Deal with selection option depending on current page

if ($anchor.parent().hasClass("selected")){
$option.prop("selected", true);
};
//Options value is the href of links
$option.val($anchor.attr("href"));
//Options text is the text of links
	$option.text($anchor.text());

	//append option to select

	$select.append($option);
});
	

//Bind change listener to the select
$select.change(function(){
//Go to selects location
window.location = $select.val();
});
	



