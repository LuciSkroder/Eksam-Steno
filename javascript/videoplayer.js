"use strict";

const videoOne = document.getElementById("video-1");
const videoTwo = document.getElementById("video-2");
const videoThree = document.getElementById("video-3");
const videoFour = document.getElementById("video-4");
const videoContainer = document.getElementById("video-spiller");
const playVideo = document.getElementById("current-video");
const playAudio = document.getElementById("current-audio");
const closeX = document.getElementById("luk");

function openVideo(){
    videoContainer.classList.remove("hidden");
    videoContainer.classList.add("show");
}

function closeVideo(){
    videoContainer.classList.remove("show");
    videoContainer.classList.add("hidden");
}


videoOne.addEventListener("touchstart", openVideo);
videoTwo.addEventListener("touchstart", openVideo);
videoThree.addEventListener("touchstart", openVideo);
videoFour.addEventListener("touchstart", openVideo);

videoOne.addEventListener("click", openVideo);
videoTwo.addEventListener("click", openVideo);
videoThree.addEventListener("click", openVideo);
videoFour.addEventListener("click", openVideo);

closeX.addEventListener("touchstart", closeVideo);
closeX.addEventListener("click", closeVideo);