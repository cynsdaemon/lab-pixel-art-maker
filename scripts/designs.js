// DOM references 
let pixel_canvas = document.getElementById('pixel_canvas');
let submitButton = document.getElementById('submitButton');
let colorPicker = document.getElementById('colorPicker');
let sizePicker = document.getElementById('sizePicker');
let selectedColor = "";


 
// TODO: add event listeners to the relevant DOM elements, so that user input can be color values and table sizes can be dynamically set by the user.
colorPicker.addEventListener('click', function(event) {
  // display current click count
  event.target.textContent = "click count: " + event.detail;
}, false);

// set the size of the cross stitch canvas** as an N by M grid with the makeGrid() function. 

// When size is submitted by the user, call makeGrid()

function makeGrid() {  
// TODO: Make grid:
  // gridHeight
  // gridWidth
  // for each number up to gridHeight 
    // add row to table element  
    // for each number up to gridWidth
      // add <tb> to row element



}
