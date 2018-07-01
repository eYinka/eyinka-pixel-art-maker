// I declared all necessary variables with "let" as instructed 

// Assign table grid
let canvas = document.getElementById("pixelCanvas"); 
// Assign rows
let height = document.getElementById("inputHeight");
// Assign width
let width = document.getElementById("inputWidth");
// Assign my form data
let sizePicker = document.getElementById("sizePicker");
// Assign color input
let color = document.getElementById("colorPicker");


// Select color & size input process

color.addEventListener("click", function(){});

sizePicker.onsubmit = function(evt){
    evt.preventDefault();
    clearGrid();
    makeGrid();
};


// When size is submitted by the user, call makeGrid()

function makeGrid() {

  // Your code goes here!

    for (let rw=0; rw<height.value; rw++){
        const row = canvas.insertRow(rw);
        for (let cl=0; cl<width.value; cl++){
            const cell = row.insertCell(cl);
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

