"use strict";

const videoOne = document.getElementById("video-1");
const videoTwo = document.getElementById("video-2");
const videoThree = document.getElementById("video-3");
const videoFour = document.getElementById("video-4");
const videoContainer = document.getElementById("video-spiller");
const playVideo = document.getElementById("current-video");
const playAudio = document.getElementById("current-audio");
const closeX = document.getElementById("luk");


function openVideoOne(){
    videoContainer.classList.remove("hidden");
    videoContainer.classList.add("show");
}

function openVideoTwo(){
    videoContainer.classList.remove("hidden");
    videoContainer.classList.add("show");
}

function openVideoThree(){
    videoContainer.classList.remove("hidden");
    videoContainer.classList.add("show");
}

function openVideoFour(){
    videoContainer.classList.remove("hidden");
    videoContainer.classList.add("show");
}

function closeVideo(){
    videoContainer.classList.remove("show");
    videoContainer.classList.add("hidden");
}


videoOne.addEventListener("touchstart", openVideoOne);
videoTwo.addEventListener("touchstart", openVideoTwo);
videoThree.addEventListener("touchstart", openVideoThree);
videoFour.addEventListener("touchstart", openVideoFour);

videoOne.addEventListener("click", openVideoOne);
videoTwo.addEventListener("click", openVideoTwo);
videoThree.addEventListener("click", openVideoThree);
videoFour.addEventListener("click", openVideoFour);

closeX.addEventListener("touchstart", closeVideo);
closeX.addEventListener("click", closeVideo);