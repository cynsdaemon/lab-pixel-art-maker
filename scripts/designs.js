// DOM references 
let pixel_canvas = document.getElementById("pixel_canvas");
let submitButton = document.getElementById("submitButton");
let sizePicker = document.getElementById("sizePicker");
let colorPicker = document.getElementById("colorPicker");
let input_height = document.getElementById("input_height");
let input_width = document.getElementById("input_width");

// user input can be color values
let defaultColor = colorPicker.defaultValue; // #000000
colorPicker.value; // returns current color


// TODO: - 
// colorPicker.value.addEventListener();

// table sizes can be dynamically set by the user.
// set the size of the cross stitch canvas** as an N by M grid with the makeGrid() function. 

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

// TODO: - draw grid (jumps thru loops)
let gridHeight = 5;
let gridWidth = 10;
input_height.value // select height
input_width.value // select width

// add a background color to <td>
// add row height and width to pixel_canvas
let tr = document.createElement("tr");
for(let h = 0; h < gridHeight; h++ ){  
  console.log(tr);
} 
for(let w = 0; w < gridWidth; w++){
  td = tr.appendChild(document.createElement("td"));
}









