// function to asynchronously fetch file contents from path/URL "fromFile" 
// and insert them in the DOM object found with "whereTo" -- note this
// uses document.querySelector, so use CSS notation on "whereTo"

function loadFileInto(fromFile, whereTo) {

	// 1. creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// 2. defines the GET/POST method, the source, and the async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// 3. provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {

		if ((this.readyState == 4) && (this.status == 200)) { // if .readyState is 4, the process is done; and if .status is 200, there were no HTTP errors

			document.querySelector(whereTo).innerHTML = this.responseText; // insert received output directly into the chosen DOM object

		} else if ((this.readyState == 4) && (this.status != 200)) { // if .readyState is 4, the process is done; and if .status is NOT 200, output the error into the console

			console.log("Error: " + this.responseText);

		}

	} // end ajax.onreadystatechange function

	// 4. let's go -- initiate request and process the responses
	ajax.send();
}

window.onload = function() {

  document.querySelector("#title h1").classList.add("tp6");


  document.querySelector("#ingredients").onclick = function() {
    document.querySelector("#ingredients ul").classList.toggle("showMe")
  }

  document.querySelector("#equipment").onclick = function() {
    document.querySelector("#equipment ul").classList.toggle("showMe")
  }

  document.querySelector("#directions").onclick = function() {
    document.querySelector("#directions ol").classList.toggle("showMe")
  }

  document.querySelector("#title h1").onclick = function() {
    this.classList.toggle("tp6")
  }

  document.querySelector(".copyright").innerHTML += "<p><i> This recpie has been reuploaded without permission, for educational purposes. </i></p>";

  loadFileInto("ingredients.html", "#ingredients ul");
  
  loadFileInto("equipment.html", "#equipment ul");
  
  loadFileInto("directions.html", "#directions ol");
  
} //end of onload

newLI = document.createElement("li");

newLI.innerHTML = "*These measurements make about 48 cookies*";

obj = document.querySelector("#ingredients ul");

obj.insertBefore(newLI, obj.children[obj.length]);