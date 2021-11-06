function allowDrop(ev) {
    ev.preventDefault();

}
  
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  //ev.target.style.width += '250px';
  ev.target.appendChild(document.getElementById(data));
}

window.onload = () => {
    var farys = document.querySelectorAll('img');
    var div1 = document.getElementById('div1');
    div1.addEventListener('drop', drop)
    div1.addEventListener('dragover', allowDrop)


    farys.forEach(element => {
        element.addEventListener('dragstart', drag)
    });
}