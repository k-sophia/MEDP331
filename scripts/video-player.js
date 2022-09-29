/***********************************    Video   ***********************************/ 
var video = document.querySelector('video');

let playBTN = document.querySelector('#play');
let pauseBTN = document.querySelector('#pause');
let stopBTN = document.querySelector('#stop');

var volumeBar = document.getElementById("volume-bar");
let muteBTN = document.querySelector('#mute');
let descreaseVolumeBTN = document.querySelector('#decrease-volume');
let increaseVolumeBTN = document.querySelector('#increase-volume');

let speedBTN = document.querySelector('#speed');
let fullScreenBTN = document.querySelector('#full-screen');

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

function stopVideo() {
    video.load()
}

function volumeChange(){
    video.volume = volumeBar.value;
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

function playbackRateChange() {
    if(video.playbackRate == 2.0) {
        video.playbackRate = 1.0;
    } else {
        video.playbackRate = 2.0;
    }
}

function fullScreenVideo() {
    if(video.requestFullscreen){
       video.requestFullscreen();
    }else if(video.mozRequestFullScreen){
        video.mozRequestFullScreen();// Firefox
    }else if(video.webkitRequestFullscreen){
        video.webkitRequestFullscreen();//Chrome & Safari
    }
}

playBTN.addEventListener('click', playVideo);
pauseBTN.addEventListener('click', pauseVideo);
stopBTN.addEventListener('click', stopVideo);

volumeBar.addEventListener('click', volumeChange);
muteBTN.addEventListener('click', muteVideo);
descreaseVolumeBTN.addEventListener('click', descreaseVolume);
increaseVolumeBTN.addEventListener('click', increaseVolume);

speedBTN.addEventListener('click', playbackRateChange);
fullScreenBTN.addEventListener('click', fullScreenVideo);

/***********************************    Hover   ***********************************/ 

/*********   First Row   *********/ 
// Play
function playHover() {
    playBTN.src = '../img/witch/witch-hat-hover.png';
}

function playOffHover() {
    playBTN.src = '../img/witch/witch-hat-off.png';
}

// Pause
function pauseHover() {
    pauseBTN.src = '../img/witch/witch-broom-hover.png';
}

function pauseOffHover() {
    pauseBTN.src = '../img/witch/witch-broom-off.png';
}

// Stop
function stopHover() {
    stopBTN.src = '../img/witch/witch-skull-hover.png';
}

function stopOffHover() {
    stopBTN.src = '../img/witch/witch-skull-off.png';
}

/*********   Second Row   *********/ 

// Mute
function muteHover() {
    muteBTN.src = '../img/witch/witch-mortar-hover.png';
}

function muteOffHover() {
    muteBTN.src = '../img/witch/witch-mortar-off.png';
}

// Decrease Volume
function decreaseVolumeHover() {
    descreaseVolumeBTN.src = '../img/witch/witch-small-potion-hover.png';
}

function decreaseVolumeOffHover() {
    descreaseVolumeBTN.src = '../img/witch/witch-small-potion-off.png';
}

// Increase Volume
function increaseVolumeHover() {
    increaseVolumeBTN.src = '../img/witch/witch-large-potion-hover.png';
}

function increaseVolumeOffHover() {
    increaseVolumeBTN.src = '../img/witch/witch-large-potion-off.png';
}

/*********   Third Row   *********/ 

// Speed
function speedHover() {
    speedBTN.src = '../img/witch/witch-bird-hover.png';
}

function speedOffHover() {
    speedBTN.src = '../img/witch/witch-bird-off.png';
}

// Full Screen
function fullScreenHover() {
    fullScreenBTN.src = '../img/witch/witch-magic-ball-hover.png';
}

function fullScreenOffHover() {
    fullScreenBTN.src = '../img/witch/witch-magic-ball-off.png';
}