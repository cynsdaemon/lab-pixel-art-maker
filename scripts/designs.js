// DOM references 
let pixel_canvas = document.getElementById("pixel_canvas");
let sizePicker = document.getElementById("sizePicker");
let colorPicker = document.getElementById("colorPicker");
let button = document.querySelector('input[type="submit"]')
let inputHeight = document.getElementById("input_height");
let inputWidth = document.getElementById("input_width");

/* Input values
****colorPicker:
  let defaultColor = colorPicker.defaultValue; // #000000
  colorPicker.value; // returns color
***Height/Width values:
  input_height.value // returns height
  input_width.value // returns width
*/

// colorPicker:
function watchColorPicker(event){
  let td = document.querySelectorAll("td").forEach(function(td){
    td.style.background = event.target.value;
  });
}
colorPicker.addEventListener("input", watchColorPicker, false);

// height:
function watchHeight(event){
  inputHeight = event.target.value;
}
inputHeight.addEventListener("input", watchHeight, false);

// width:
function watchWidth(event){
  inputWidth = event.target.value;
}
inputWidth.addEventListener("input", watchWidth, false);

// Submit button
button.addEventListener("click", function(event){
  event.preventDefault();
  let height = input_height.value;
  let width = input_width.value;
  makeGrid(height, width);  
}, false);


// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {  
  for(let h = 0; h < height; h++ ){
    let row = document.createElement("tr");
    pixel_canvas.appendChild(row);
   
    for(let w = 0; w < width; w++){
      let data = document.createElement("td");
      row.appendChild(data);
      
    }
  }  
}

function removeGrid(){
// TODO: - remove grid 
  // if pixel_canvas has a table
    // remove pixel_canvas child
      // childNode.remove();
}

function removeTableClass(){
// TODO: - style (background) attribute from td elements
  // add event listener to td
  // if td has bgColor
    // when clicked, remove bgColor class
    // when clicked again, add bgColor class
}
  


// TODO: generate table elements to pixel_canvas
// TODO: table sizes can be dynamically set by the user.

