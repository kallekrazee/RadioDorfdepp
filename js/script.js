  function toDo(){
    changePicture(); selectRandom();
    
    }

// The Stuff to do it only once 
   
   function doItOnce(){
      var element=document.getElementById("but01");
      element.onclick = "";
 }


//The stuff to change the pics

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

//The stuff to change the audiofiles and play them

var lastSong = null;
var selection = null;
var playlist = ["sounds/Der Trüffelo.mp3", "sounds/Ehrlicher Erwin.mp3", "sounds/Vegas.mp3"]; // List of songs
var player = document.getElementById("audioplayer"); // Get audio element


player.addEventListener("ended", selectRandom); // Run function when the song ends
player.autoplay = false;

function selectRandom(){
    while(selection == lastSong){ // Repeat until a different song is selected
        selection = Math.floor(Math.random() * playlist.length);
    }
    lastSong = selection; // Remember the last song
    player.src = playlist[selection]; // Tell HTML the location of the new song
    player.play();
    
}

selectRandom(); // Select initial song
player.play(); // Start song

