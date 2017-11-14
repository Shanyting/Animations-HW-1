// Made by Shantelle Toh on 11/13/17 for Web Development.
console.log("Click on the 1st 3 boxes to see what happens.")
console.log("Type something into the input box and press Enter!")

let box1 = document.querySelector("#box1");
box1.addEventListener("click", function() {
  if (box1.classList.contains("move-up-down")) {
    box1.classList.remove("move-up-down");
  }
  else {
    box1.classList.add("move-up-down");
  }
})

let box2 = document.querySelector("#box2");
box2.addEventListener("click", function() {
  if (box2.classList.contains("move-diagonally")) {
    box2.classList.remove("move-diagonally");
  }
  else {
    box2.classList.add("move-diagonally");
  }
})

let box3 = document.querySelector("#box3");
box3.addEventListener("click", function() {
  if (box3.classList.contains("change-size")) {
    box3.classList.remove("change-size");
  }
  else {
    box3.classList.add("change-size");
  }
})

let input = document.querySelector("#my-input");
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    console.log("You pressed the Enter key!!! Input received.");
  }
})