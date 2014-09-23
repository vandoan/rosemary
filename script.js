// mozilla developer tool


var taskInput = document.getElementById("new-task"); 
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks"); 


var createNewTaskElement = function(taskString) {
  //Create List Item
  var listItem = document.createElement("li");

   var checkBox = document.createElement("input"); // checkbox
  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input"); // text
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

// add a new task
var addTask = function(){
	console.log("Add task...");

	var listItem = createNewTaskElement(taskInput.value);

	// append item to incompleteTasksHolder
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	// clears out the box
	taskInput.value = "";
}

	//function addTask() {}  - the same

var editTask = function() {
	console.log("Task edited");

	var listItem = this.parentNode; 

	var editInput = listItem.querySelector("input[type=text]"); 
	var label = listItem.querySelector("label"); 


	var containsClass = listItem.classList.contains("editMode");

	if(containsClass) {
		label.innerText = editInput.value; 
	} else {
		editInput.value = label.innerText; 
	}
	//toggle
	listItem.classList.toggle("editMode");
}



var deleteTask = function(){ 
	console.log("Task deleted");
	// remove the parent list item from the ul
	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	ul.removeChild(listItem); 
	// jumps to grandparent
}

var taskCompleted = function() {
	console.log("Task completed...");

	// append the task list to the #completed-tasks
	var listItem = this.parentNode; 
	completedTasksHolder.appendChild(listItem); 
	bindTaskEvents(listItem, taskIncomplete);

}

var taskIncomplete = function() {
	console.log("Task incomplete");

	// append the task list item to the #incomplete-taks
	var listItem = this.parentNode; 
	incompleteTasksHolder.appendChild(listItem); 
	bindTaskEvents(listItem, taskCompleted);
}


// Set the click hnadler to the addTask function 

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
// takes in two events
 
var checkBox = taskListItem.querySelector("input[type=checkbox]");
var editButton = taskListItem.querySelector("button.edit");
var deleteButton = taskListItem.querySelector("button.delete");
  


 //bind editTask to edit button
  editButton.onclick = editTask;
  
  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  
  //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function() {
  console.log("AJAX request");
}

// set the click handler to the addTask function 
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest); 


// cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
  //bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completedTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to list item's children (taskIncomplete)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

