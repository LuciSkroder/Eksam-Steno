"use strict";

//Her hiver vi fat i forskellige HTML elementer så vi kan bruge dem i vores JavaScript
const videoOne = document.getElementById("video-1");
const videoTwo = document.getElementById("video-2");
const videoThree = document.getElementById("video-3");
const videoFour = document.getElementById("video-4");
const videoContainer = document.getElementById("video-spiller");
const playVideo = document.getElementById("current-video");
const playAudio = document.getElementById("current-audio");
const closeX = document.getElementById("luk");


//Vi valgte at gå med en hurtig og simple løsning fremfor en mere dynamisk løsning da der i dette tilfælde kun er 4 videoer. Dette gør at vores kode er kortere og nemmere at forstå.
//Når vores eventListeners i bunden kalder på vores open video funktioner tilføjer vi show classen og fjerner hidden classen på vores video container så man kan se den. Derefter sætter vi vores img source til den tilsvarende gif og audio source til den til svarende lyd. Til sidst starter vi lyden så den spiller.
function openVideoOne(){
    videoContainer.classList.remove("hidden");
    videoContainer.classList.add("show");

    playVideo.src = "../gifs/endometrium.GIF"
    playAudio.src = "../lyd/endometrium.mp3"
    playAudio.play()
}

function openVideoTwo(){
    videoContainer.classList.remove("hidden");
    videoContainer.classList.add("show");

    playVideo.src = "../gifs/endometriose.GIF"
    playAudio.src = "../lyd/endometriose.mp3"
    playAudio.play()
}

function openVideoThree(){
    videoContainer.classList.remove("hidden");
    videoContainer.classList.add("show");

    playVideo.src = "../gifs/arvaev.GIF"
    playAudio.src = "../lyd/arvaev.mp3"
    playAudio.play()
}

function openVideoFour(){
    videoContainer.classList.remove("hidden");
    videoContainer.classList.add("show");

    playVideo.src = "../gifs/gradviditet.GIF"
    playAudio.src = "../lyd/gravid.mp3"
    playAudio.play()
}

//Når man trykker på luk gør vi det modsatte af før, fjerner show, og tilføjer hidden, og så sætter vi vores sources til at være tomme så de er klar til at blive fyldt med den næste video.
function closeVideo(){
    videoContainer.classList.remove("show");
    videoContainer.classList.add("hidden");

    playVideo.src = ""
    playAudio.src = ""
}

//EventListeners gør at vi laver vores kode dynamisk og interaktiv.
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