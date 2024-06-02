let density = '   `.,_;^+*LTt1jZkAdGgDRNW@';
var video;
var textEdit;
function setup() {
  var myCanvas = createCanvas(675, 500);
  //myCanvas.parent("comparison-container");
  video = createCapture(VIDEO);
  video.hide();
  textEdit = document.getElementById("asci-output");
}
function pixel_to_ascii(rgbSum){
  var average = rgbSum / (3*255);
    // Map the average value to the range [0, 28]
  var index = floor(average*density.length);// Assuming RGB values are in the range [0, 255]
  return density[index];
}
function draw() {
  let asciiArt = ""; // Initialize an empty string to store the ASCII art
  video.loadPixels();
  video.size(100,80);
  //image(video, 0, 0, width, height);
  for (let y = 0; y < video.height; y++) {
      for (let x = 0; x < video.width; x++) {
          let pixIndex = (x + y * video.width) * 4;
          let rgbSum = video.pixels[pixIndex]+video.pixels[pixIndex+1]+video.pixels[pixIndex+2];
          let c = pixel_to_ascii(rgbSum);
          asciiArt += (c == ' ' ? ' ' : c);
      }
      asciiArt += "\n"; // Add a new line after each row
  }
  //console.log(asciiArt);
  video.updatePixels();
  // Set the value of the textarea after constructing the ASCII art
  textEdit.value = asciiArt;
}
