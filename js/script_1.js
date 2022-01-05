// change the pic:
var radio = document.getElementById('bgimage_on');
radio.addEventListener('click', function(radio){
    radio.target.classList.toggle('bgimage_off');
});

var element = document.getElementById("but01");
  element.addEventListener("click", playLooped );

var collection=[];// final collection of sounds to play
var loadedIndex=0;// horrible way of forcing a load of audio sounds

// remap audios to a buffered collection and play only one song
function init(audios) {
  for(var i=0;i<audios.length;i++) {
    var audio = new Audio(audios[i]);
    collection.push(audio);
    buffer(audio);
  }
}

// did I mention it's a horrible way to buffer?
function buffer(audio) {
  if(audio.readyState==4)return loaded();
  setTimeout(function(){buffer(audio)},100);
}

// check if we're ready to dj this
function loaded() {
  loadedIndex++;
  if(collection.length==loadedIndex)playLooped();
}

// play and loop after finished
function playLooped() {
var audio=Math.floor(Math.random() * (collection.length));
  audio=collection[audio];
  audio.play();
 setTimeout(playLooped,audio.duration*1000); 
}

// the songs to be played!
init([
'sounds/Ehrlicher Erwin.mp3',
'sounds/Vegas.mp3',
'sounds/Der Trüffelo.mp3'
]);