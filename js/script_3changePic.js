var xchange = true;
  function changePicture() {
    var current = document.getElementById("bgimage_on");
    if(xchange) {
      current.src = "bilder/Radio_01.jpg"
      xchange = false;
    } else {
      current.src = "bilder/Radio_02.jpg"
      xchange = true;
    }
  }
