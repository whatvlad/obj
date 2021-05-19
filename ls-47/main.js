// function myButton(){
// 	alert("Привет!")
// }

// let a = document.getElementById("text")
// a.onclick = function(){
// 	alert("Привет!")
// }
class Button {
    handleEvent(event) {
     
      let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
      this[method](event);
    }

    onMousedown() {
      elem.innerHTML = "Кнопка нажата";
    }

    onMouseup() {
      elem.innerHTML += "Кнопка отжата.";
    }
  }

  let x = new Button();
  elem.addEventListener('mousedown', x);
  elem.addEventListener('mouseup', x);