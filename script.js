function createFigure(e) {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  for (let i = 0; i < document.querySelector(".amount").value; i++) {
    size = 50 + Math.random() * (Math.min(windowWidth, windowHeight) / 3 - 50)
    style = {
      width: size + "px",
      height: size + "px",
      left: Math.random() * (windowWidth - 2*size) + "px",
      top: Math.random() * (windowHeight - 2*size) + "px",
    }
    element = document.createElement("div");
    element.className = e;
    element.tabIndex = 0;
    for ( var key in style) {
      element.style[key] = style[key];
    }
    console.log(style);
    document.querySelector(".figures").appendChild(element).addEventListener("dblclick", e => {e.target.parentElement.removeChild(e.target);});
  }
}
