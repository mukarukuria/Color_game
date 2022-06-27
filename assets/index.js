// var diffEl = document.querySelector(".diff__btn.active").innerHTML;
var n = 6;
var colorsEl = document.querySelector(".colors");
var colorsBlocks;
var rgbEl = document.querySelector(".rgb");
var statusEl = document.querySelector(".status");
var colors = [];
var diffEls = document.querySelectorAll(".diff__btn");
for (let i  = 0; i < diffEls.length; i++) {
  diffEls[i].addEventListener('click' , setNumberOfTiles);
}
createBlocks(n);
resetGame();

function checkColors(e) {
  // your code here
  let rgbValue = getComputedStyle(e.target).backgroundColor
  let colorsBlocks = document.querySelectorAll(".colors__block")
  if (rgbEl.innerHTML == rgbValue) {
    for (var i = 0; i < colorsBlocks.length; i++) {
      colorsBlocks[i].style.backgroundColor = rgbValue
    }
    statusEl.innerHTML = "CONGRATULATIONS!! You have guessed it correctly"
    document.querySelector(".mainbody").style.backgroundColor = rgbValue
  }else{
    for (var i = 0; i < colorsBlocks.length; i++) {
      colorsBlocks[i].style.backgroundColor = "#041C32"
    }
    statusEl.innerHTML = "OOPS!! You didn't get it please try again."
    document.querySelector(".mainbody").style.backgroundColor = "#041C32"
    
  }
}

function resetGame() {
  document.querySelector(".mainbody").style.backgroundColor = "#041C32"
  createBlocks(n);
  document.body.style.color = "black";
  colors = [];
  pickColors();
  pickedColor = random(n);
  rgbEl.innerHTML = colors[pickedColor];
  setColors();
  statusEl.innerHTML =
    "Try to guess the right color based on the RGB value by clicking on the blocks.";
}

function setColors() {
  for (var i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].style.backgroundColor = colors[i];
  }
}

function pickColors() {
  for (var i = 0; i < n; i++) {
    colors.push(randomColor());
  }
}

function randomColor() {
  return "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
}

function random(r) {
  return Math.floor(Math.random() * r);
}

function setNumberOfTiles(e) {
 let n = e.target.dataset.num 
//  createBlocks(n)
//  resetGame()
return n;
  // your code here
}

function createBlocks(num) {
  colorsEl.innerHTML = "";

  // here is an example of a loop that is used to create the blocks of color depending on you choice ie 6 or 9, however you need to add event listeners
  for (var i = 0; i < num; i++) {
    var block = document.createElement("div");
    block.classList.add("colors__block");
    colorsEl.appendChild(block);
  }
  colorsBlocks = document.querySelectorAll(".colors__block");
  for (var i = 0; i < colorsBlocks.length; i++) {
      colorsBlocks[i].addEventListener("click", checkColors);
    };
    function colorBlock(colorBlocks) {
      return colorBlocks;
    }
    // 
  }
  


    // colorBlock.addEventListener('click' , function() {
      // let style = getComputedStyle(colorsBlocks)
      // console.log("hello");

      // const backgroundColor = style.backgroundColor
      // console.log(backgroundColor) 
    // })
  

//}

// colorsBlocks[i].addEventListener("click", checkColors);
