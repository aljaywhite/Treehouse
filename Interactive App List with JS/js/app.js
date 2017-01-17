//Problem: Unser interaction doesn't provide desired results.
//Solution: Add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks
//Add a new task.
var addTask = function() {
	//When button is pressed
	//Create new li with the text from the #new-task.
		//input checkBox
		//label
		//input (text)
		//button .Edit
		//button .Delete
		//each elements, needs modified and appended.
};

//Edit existing task.
var editTasks = function() {
	//When edit button pressed.
		//if class of parent (li) is .editMode
			//Switch from .editMode
			//label text become inputs value.
		//else
			//Switch to .editMode
			//input value becomes the labels text.

			//Toggle .editMode on the parent.
};

//Delete existing task.
var deleteTask = function() {
	//When delete button is pressed.
		//Remove parent li from ul.
};

//Mark task as complete.
var taskCompleted = function() {
	//When the Checkbox is checked.
		//Append task li to the #completed-tasks
};

//Mark task as incomplete.
var taskIncomplete = function() {
//When the Checkbox is un checked.
	//Append task li to the #incomplete-tasks
};
