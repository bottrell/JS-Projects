/* eslint-disable linebreak-style */
// Set variables for desired color,
const defaultColor = "#C0D6DF";
const drawColor = "black";
const numPixels = 16;

// Get all the pixel objects
const pixels = document.querySelectorAll('.pixel');

// Add a on-mouse down event listener
pixels.forEach((pixel) => {
  pixel.addEventListener('click', () => draw(pixel));
});

// if the mouse is down, change to the predefined color
function draw(x) {
  x.style.backgroundColor = drawColor;
}

// Have the ability to set the draw color

// Have the ability to generate x number of pixels and adjust the size

// Have the ability to erase with right mouse/a 