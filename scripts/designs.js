// DOM references 
let pixel_canvas = document.getElementById("pixel_canvas");
let sizePicker = document.getElementById("sizePicker");
let colorPicker = document.getElementById("colorPicker");
let button = document.querySelector('input[type="submit"]');
/* Input values
****colorPicker:
  let defaultColor = colorPicker.defaultValue; // #000000
  colorPicker.value; // returns color
***Height/Width values:
  input_height.value // returns height
  input_width.value // returns width
*/

// colorPicker
function watchColorPicker(event){
  let td = document.querySelectorAll("td").forEach(function(td){
    td.style.background = event.target.value; // returns current color
  });
}
colorPicker.addEventListener("input", watchColorPicker, false);

// TODO: When clicked, remove style attribute
function changeBgColor(event) {
  let square = document.querySelector("td");
  event.target.style.visibility = "hidden";
}
pixel_canvas.addEventListener("click", changeBgColor, false);  


// When button is clicked, call makeGrid()
button.addEventListener("click", function(event){
  event.preventDefault();
  let height = input_height.value;
  let width = input_width.value;
    // remove old grid
    pixel_canvas.querySelectorAll("tr").forEach(function(tr){ pixel_canvas.removeChild(tr);

  });

  makeGrid(height, width);
    
}, false);

// makeGrid 
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




