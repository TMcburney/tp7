window.onload = function(){
  
  document.querySelector("#title h1").classList.add("tp6");
  

  document.querySelector("#ingredients").onclick = function () {
    document.querySelector("#ingredients ul").classList.toggle ("showMe")
  }
  
  document.querySelector("#equipment").onclick = function () {
    document.querySelector("#equipment ul").classList.toggle ("showMe")
  }
  
  document.querySelector("#directions").onclick = function () {
    document.querySelector("#directions ol").classList.toggle ("showMe")
  }
  
  document.querySelector("#title h1").onclick = function () {
    this.classList.toggle ("tp6")
  }
  
  document.querySelector(".copyright").innerHTML += "<p><i> This recpie has been reuploaded without permission, for educational purposes. </i></p>";

} //end of onload

newLI = document.createElement("li");
newLI.innerHTML = "*These measurements make about 48 cookies*";
obj = document.querySelector("#ingredients ul");
obj.insertBefore(newLI, obj.children[obj.length]);
