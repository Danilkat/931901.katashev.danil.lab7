var topvar;
var left;
var size;
let count = 0;

function getNumbers() {
  size = 50 + Math.random() * (Math.min(window.innerWidth, window.innerHeight) / 3 - 50);
  topvar = Math.random() * (window.innerHeight - 2*size);
  left = Math.random() * (window.innerWidth - 2*size);
}

function createFigure(e) {
  e = e < 0 ? 0 : e;
  for (let i = 0; i < document.querySelector(".amount").value; i++) {
    getNumbers();
    style = {
      width: size + "px",
      height: size + "px",
      top: topvar + "px",
      left: left + "px"
    }
    element = document.createElement("div");
    element.className = e;
    element.id = "figure" + count++;
    console.log(style);
    for ( var key in style) {
      element.style[key] = style[key];
    }
    document.querySelector(".figures").appendChild(element).addEventListener("dblclick", e => {e.target.parentElement.removeChild(e.target);});
  }
}
