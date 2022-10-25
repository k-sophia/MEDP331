/***********************************    Video   ***********************************/ 
var video = document.querySelector('video');

let playBTN = document.querySelector('#play');
let pauseBTN = document.querySelector('#pause');
let stopBTN = document.querySelector('#stop');

let muteBTN = document.querySelector('#mute');
let descreaseVolumeBTN = document.querySelector('#decrease-volume');
let increaseVolumeBTN = document.querySelector('#increase-volume');

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

function stopVideo() {
    video.load()
}

function muteVideo() {
    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true;
    }
}

function descreaseVolume(){
    video.volume = video.volume - 0.1;
    volumeBar.value = video.volume
}

function increaseVolume(){
    video.volume = video.volume + 0.1;
    volumeBar.value = video.volume
}

playBTN.addEventListener('click', playVideo);
pauseBTN.addEventListener('click', pauseVideo);
stopBTN.addEventListener('click', stopVideo);

muteBTN.addEventListener('click', muteVideo);
descreaseVolumeBTN.addEventListener('click', descreaseVolume);
increaseVolumeBTN.addEventListener('click', increaseVolume);


/***********************************    Modal   ***********************************/ 
let infoBTN = document.querySelector('#info');
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
infoBTN.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}