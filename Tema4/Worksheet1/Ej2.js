
//Tells current position in document
  window.onload = () => {
    document.onclick = event => {
        alert(
          "clientX value: " + event.clientX + "\n" +
          "clientY value: " + event.clientY + "\n"
        );
      }
  }