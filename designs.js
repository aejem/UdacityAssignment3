// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//function makeGrid() {

// Your code goes here!
	var canvas = document.getElementById("pixelCanvas");
	var height = document.getElementById("inputHeight");
	var width = document.getElementById("inputWeight");
	var sizePicker = document.getElementById("sizePicker");
	var color = document.getElementById("colorPicker");
	

	color.addEventListener("click", function()
		{});
	

	sizePicker.onsubmit = function(event){
	    event.preventDefault();
	    clearGrid();
	    makeGrid();
	};
	

	function makeGrid() {
	    for (let rho=0; rho<height.value; rho++){
	        const row = canvas.insertRow(rho); // insert new row at the last position
	        for (let cee=0; cee<width.value; cee++){
	            const cell = row.insertCell(cee); //insert new cell at the last position
	            cell.addEventListener("click", fillSquare);
	        }
	    }
	}
	

	function clearGrid(){
	    while (canvas.firstChild){
	         canvas.removeChild(canvas.firstChild);
	    }
	}
	

	function fillSquare () {
	    this.setAttribute("style", `background-color: ${color.value}`);
	}


