notes
------------------------------------------------------------------




js code
------------------------------------------------------------------

- .children
- .onclick
- .onchange
- .parentNode
- .querySelector('a'), get item that has an anchor
- .removeChild
- .innerText
- .classList.toggle
- classList.contains()
- .EventTarget.addEventListener



Tree House Questions
------------------------------------------------------------------

- Take a look around the html and js files. Line 5 of app.js is incorrect. listItems should be the children of the navigation unordered list. 
	- var listItems = navigation.children;



- On line 5 of app.js, use the classList property on the anchor to add a new class of "selected" to it.
	-   anchor.classList.add("selected");

- On about line 9 in app.js, use classList to toggle the "live" class on the anchor element.

	- anchor.classList.toggle("live");  

