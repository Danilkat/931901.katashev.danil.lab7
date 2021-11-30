function createFigure(e) {
  for (let i = 0; i < document.querySelector(".amount").value; i++) {
    size = 50 + Math.random() * (Math.min(window.innerWidth, window.innerHeight) / 3 - 50)
    style = {
      width: size + "px",
      height: size + "px",
      top: Math.random() * (window.innerHeight - 2*size) + "px",
      left: Math.random() * (window.innerWidth - 2*size) + "px"
    }
    element = document.createElement("div");
    element.className = e;
    element.tabIndex = 0;
    for ( var key in style) {
      element.style[key] = style[key];
    }
    document.querySelector(".figures").appendChild(element).addEventListener("dblclick", e => {e.target.parentElement.removeChild(e.target);});
  }
}
