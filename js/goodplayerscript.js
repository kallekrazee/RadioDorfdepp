
  var lastSong = null;
  var selection = null;

  var playlist = [ "sounds/Der Trüffelo.mp3", "sounds/Ehrlicher Erwin.mp3", "sounds/Vegas.mp3"]; // List of songs

  var player = document.getElementById("audioplayer"); // Get audio element
  player.autoplay = false; 
 
  player.addEventListener("ended", selectRandom); // Run function when the song ends

  function selectRandom(){
      while(selection == lastSong){ // Repeat until a different song is selected
          selection = Math.floor(Math.random() * playlist.length);
      }
      lastSong = selection; // Remember the last song
      player.src = playlist[selection]; // Tell HTML the location of the new song
      player.play(); // Start song
      
  }

  selectRandom(); // Select initial song
  //player.play(); // Start song