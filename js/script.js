

     // The Stuff to make the button NotDBLClickable, but ON(C)E-Clickable:

    const once = f => {
      let finished = false;
      return (...args) => {
        if (!finished) {
          finished = true;
          f(...args);
        }
      };
    };

    const but01 = document.getElementById("but01");
      but01.addEventListener('click', once(toDo).bind(this));

//The Doing of all the Crap, two functions inside to change the pic and to play all the random selected Dorfdeppen-mp3s:

function toDo(){
  changePicture(); selectRandom(); 
  document.getElementById("but01").disabled=true; //disabels the button after beeing clicked once :)
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
var playlist = [ "sounds/Fleischwurst Einhorn.MP3","sounds/Fleisch.mp3","sounds/Fireheart.mp3","sounds/Filmriss.mp3","sounds/Fass in die Tüte 2(HässlettenMix).mp3","sounds/Es War Die Zeit.MP3","sounds/Endlich Nacht.MP3","sounds/Ein Ganz Normales RDD Lied.mp3","sounds/Du Bist Nackt Ich Bin Nackt.mp3","sounds/Double Fuck.mp3","sounds/Dorfdepp Jingle.mp3","sounds/Dorfdepp Anthem.MP3","sounds/Don_t Stop.mp3","sounds/Discoland.mp3","sounds/Die Totale Party.mp3","sounds/DIE TIERE 2.mp3","sounds/Diddlz Inner Cypher.mp3","sounds/Diddlalarm.mp3","sounds/Der Übermensch.MP3","sounds/Dein Vater RDD.mp3","sounds/Dein Vater hat mich gefickt.mp3","sounds/Dein Radio.mp3","sounds/Dein Arsch.mp3","sounds/Das Leben Ist Schwer.mp3","sounds/Das Ist Deutschland.mp3","sounds/Danke Merkel No N.mp3","sounds/Crewlove.mp3","sounds/Crew Love.mp3","sounds/Ciao Und Hi.MP3","sounds/Chesus.mp3","sounds/Buggi Medley.mp3","sounds/Brille Und Dutt RMX.mp3","sounds/Body2Body Suplex.mp3","sounds/Block die Frequenz.mp3","sounds/Bettgestell.MP3","sounds/Beiss Den Gagball.mp3","sounds/Beef Oder Peace.mp3","sounds/Beachdepp.mp3","sounds/Banane.mp3", "sounds/Baby Im Bauch.mp3","sounds/Alles Ist Vorbei.mp3","sounds/Alle Auf Ihn Rauf.MP3","sounds/alk und gewalt.mp3","sounds/Again.mp3", "sounds/Afterhour.MP3" ,"sounds/Aerobic.mp3", "sounds/123 Ahhh.mp3", "sounds/100jahre.MP3", "sounds/29 Müll is Gold (RMX).mp3", "sounds/27 Radio Doofkappe.mp3", "sounds/26 Silbencrash.mp3" ,"sounds/25 Jogging.mp3", "sounds/22 Die Zeit.mp3", "sounds/16 Denk nich nach.mp3", "sounds/12 Krawall im All.mp3", "sounds/Der Trüffelo.mp3", "sounds/Ehrlicher Erwin.mp3", "sounds/Vegas.mp3", "sounds/01 Chantal.mp3", "sounds/01 r doppel digga das ist der sh.mp3","sounds/3 zu 0.mp3","sounds/07 scheiss dein Hirn aus.mp3",  ]; // List of songs

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

