let video = document.querySelector('#video-placeholder');
let play = document.querySelector('#play');
let pause = document.querySelector('#pause');

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player(video, {
    height: '305',
    width: '500',
    videoId: 'lbLug8M_5HQ',
});
}

function playVideo() {
    player.playVideo();
}

function pauseVideo() {
    player.pauseVideo();
}

play.addEventListener('click', playVideo);
pause.addEventListener('click', pauseVideo);
