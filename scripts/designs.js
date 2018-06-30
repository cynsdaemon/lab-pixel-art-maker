// DOM references 
const colorPicker = document.getElementById("colorPicker");
const button = document.querySelector('input[type="submit"]');
let pixel_canvas = document.getElementById("pixel_canvas");

// add fill color to square
pixel_canvas.addEventListener("click", function(event){ 
  const color = document.querySelector('input[type="color"]').value;
    if(event.target.tagName === "TD") {
      event.target.style.background = color;
    }     
}, false);

// When button is clicked,
button.addEventListener("click", function(event){
  // prevent default page refresh
  event.preventDefault();
  // pull in user defined height and width,
  let height = input_height.value;
  let width = input_width.value;
    // remove old grid
    pixel_canvas.querySelectorAll("tr").forEach(function(tr){ pixel_canvas.removeChild(tr);

  });
  // then make new grid
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



