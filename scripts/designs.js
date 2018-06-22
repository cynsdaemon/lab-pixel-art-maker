// DOM references 
let pixel_canvas = document.getElementById("pixel_canvas");
let sizePicker = document.getElementById("sizePicker");
let colorPicker = document.getElementById("colorPicker");
let height = document.getElementById("input_height");
let width = document.getElementById("input_width");
let submitButton = document.querySelector('input[type="button"]');

// user input can be color values
let defaultColor = colorPicker.defaultValue; // #000000
colorPicker.value; // returns current color


// TODO: - add event listeners
colorPicker.addEventListener("input", watchColorPicker, false);
height.addEventListener("input", watchHeight, false);
width.addEventListener("input", watchWidth, false);

function watchColorPicker(event){
  let p = document.querySelectorAll("p").forEach(function(p){
    p.style.color = event.target.value;
  });
}

function watchHeight(event){
  height = event.target.value;
  console.log("This is your new height: " + height);

}

function watchWidth(event){
  width = event.target.value;
  console.log("Your new width is: " + width);
}

// TODO: set the size of the cross stitch canvas** as an N by M grid with the makeGrid() function. 

// When size is submitted by the user, call makeGrid()
function makeGrid() {  
// TODO: Make grid:
  // gridHeight
  // gridWidth
  // for each number up to gridHeight 
    // add row <tr> to table element  
    // for each number up to gridWidth
      // add <td> to row element
}

let gridHeight = 10;
let gridWidth = 5;

input_height.value // select height
input_width.value // select width

// TODO: add a background color to <td>

// TODO: write table elements to pixel_canvas

// TODO: table sizes can be dynamically set by the user.

// generate table elements
for(let h = 0; h < gridHeight; h++ ){
  let row = document.createElement("tr");
  console.log(row);

  for(let w = 0; w < gridWidth; w++){
    data = row.appendChild(document.createElement("td"));
  }
}

pixel_canvas



  








