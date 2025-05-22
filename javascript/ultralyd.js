"use strict";

//Ved at lave en eventListener der fører til en function her, sikre vi os at vores billeder og HTML elementer er loaded 100% ved at bruge DOMContetntLoaded, så der ikke er fejl i vores mask effekt.
document.addEventListener('DOMContentLoaded', () => {
    //Her hiver vi fat i vores container og dummy-one som er den der skal ses når man holder musen nede med en mask effekt.
    const dummyOne = document.querySelector('.dummy-one');
    const container = document.getElementById('dummy-body');

    //Her laver vi en variable der kan detekte ved hjælp af en eventListener længere nede om brugeren er ved at dragge sin finger eller mus over skærmen.
    let isDragging = false;

    //Her laver vi den function der sætter hvor mask effekten kan ses med x og y position.
    const updateMaskPosition = (x, y) => {
        dummyOne.style.setProperty('--x', `${x}px`);
        dummyOne.style.setProperty('--y', `${y}px`);
    };

    //Her finder vi hvor musen/fingeren bliver holdt nede første gang som så bliver sendt til den function der skal sætte masken.
    const dragStart = (e) => {
        isDragging = true;
        dummyOne.classList.add("masked");

        if (e.type === "touchstart") {
            const touch = e.touches[0];
            const rect = container.getBoundingClientRect();
            updateMaskPosition(touch.clientX - rect.left, touch.clientY - rect.top);
        } else if (e.type === "mousedown") {
            const rect = container.getBoundingClientRect();
            updateMaskPosition(e.clientX - rect.left, e.clientY - rect.top);
        }
    };

    //Her opdatere vi så løbende mask positionen ved konstant at se hvor musen/fingeren er og sender det til mask positionen.
    const dragging = (e) => {
        if (!isDragging) return;

        if (e.type === "touchmove") {
            const touch = e.touches[0];
            const rect = container.getBoundingClientRect();
            updateMaskPosition(touch.clientX - rect.left, touch.clientY - rect.top);
            e.preventDefault();
        } else if (e.type === "mousemove") {
            const rect = container.getBoundingClientRect();
            updateMaskPosition(e.clientX - rect.left, e.clientY - rect.top);
        }
    };

    //Denne funktion sikre at vores kode opføre sig normalt når dragget stopper.
    const dragStop = () => {
        isDragging = false;
        dummyOne.classList.remove("masked");
    };

    //EventListeners gør vores kode responsiv og dynamisk.
    container.addEventListener("mousedown", dragStart);
    container.addEventListener("mousemove", dragging);
    container.addEventListener("mouseup", dragStop);
    container.addEventListener("mouseleave", dragStop);

    container.addEventListener("touchstart", dragStart, { passive: false });
    container.addEventListener("touchmove", dragging, { passive: false });
    container.addEventListener("touchend", dragStop);
});