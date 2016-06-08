//Problem: User interaction doesn't provide desired results
//Solution: Add interactivity so user can manage daily tasks
var taskInput = document.getElementById("new-task"); 
var addButton = document.getElementsByTagName("button")[0]; 
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); 
var completedTasksHolder = document.getElementById("completed-tasks"); 


//new task list item

var createNewTaskElement = function(taskString){
	//Create List Item
	var listItem = document.createElement("li");
	//input (checkbox)
	var checkBox = document.createElement("input");
		//label
	var label = document.createElement("label");
		//input (text)
	var editInput = document.createElement("input");
		//button.edit
	var editButton = document.createElement("button");
		//button.delete
	var deleteButton = document.createElement("button");
		//Each element needs modifying
			checkBox.type = "checkbox";
			editInput.type = "text";

			editButton.innerText = "Edit";
			editButton.className = "edit";
			deleteButton.innerText = "Delete";
			deleteButton.className = "delete";

			label.innerText = taskString;
		//Each element needs appending
			listItem.appendChild(checkBox);
			listItem.appendChild(label);
			listItem.appendChild(editInput);
			listItem.appendChild(editButton);
			listItem.appendChild(deleteButton);
		return listItem;
}

// Add a new task
var addTask = function(){
	console.log("add task...");
	//Create a new list item with text from #new-task
	var listItem = createNewTaskElement(taskInput.value);	
	//Append listItem to incompleteTasksHolder
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskComplete);
	taskInput.value = "";

}


//Edit existing task
var editTask = function(){
	console.log("edit task");
	
	var listItem = this.parentNode;

	var editInput = listItem.querySelector("input[type=text]");
	var label = listItem.querySelector("label");
	var containsClass = listItem.classList.contains("editMode");
		//If class of parent is .editMode
		if(containsClass){
		//Switch from .editMode
		//label text become the input value
		label.innerText = editInput.value;
			} else {
		//Switch to .editMode
		//input value becomes label text
		editInput.value = label.innerText;
			}
		//toggle .editMode list item
		listItem.classList.toggle("editMode");

}

//Delete task

var deleteTask = function(){
	console.log("delete task");
		var listItem = this.parentNode;
		var ul = listItem.parentNode;
		//remove parent list item from ul
		ul.removeChild(listItem);

}

//Mark a task as complete
var taskComplete = function(){
	console.log("complete task");
		//Append the task list item to the #completed-tasks
		var listItem = this.parentNode;
		completedTasksHolder.appendChild(listItem);
		bindTaskEvents(listItem, taskIncomplete);

}

//Mark a task as incomplete
var taskIncomplete = function(){
	console.log("task incomplete");
		//Append the task list item to the #incomplete-tasks
		var listItem = this.parentNode;
		incompleteTasksHolder.appendChild(listItem);
		bindTaskEvents(listItem, taskComplete);

}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
	console.log("bind list item events");
	//select taskListItem's children
	var checkbox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");;
	var deleteButton = taskListItem.querySelector("button.delete");;
		//bind editTask to edit button
		editButton.onclick = editTask;
		//bind deleteTask to delete button
		deleteButton.onclick = deleteTask;
		//bind checkBoxEventHandler to checkbox
		checkbox.onchange = checkBoxEventHandler;
}


var ajaxRequest = function(){
	console.log("AJAX Request");
}

//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

//cycle over incompleteTasksHolder ul list 
for(var i = 0; i < incompleteTasksHolder.children.length; i++){
		//bind events to list items children (taskCompleted)
	bindTaskEvents(incompleteTasksHolder.children[i], taskComplete);
}

//cycle over completedTasksHolder ul list items
	for(var i = 0; i < completedTasksHolder.children.length; i++){
		//bind events to list items children (taskIncomplete)
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
		
















