"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const dummyOne = document.querySelector('.dummy-one');
    const container = document.getElementById('dummy-body');

    let isDragging = false;

    const updateMaskPosition = (x, y) => {
        dummyOne.style.setProperty('--x', `${x}px`);
        dummyOne.style.setProperty('--y', `${y}px`);
    };

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

    const dragStop = () => {
        isDragging = false;
        dummyOne.classList.remove("masked");
    };

    container.addEventListener("mousedown", dragStart);
    container.addEventListener("mousemove", dragging);
    container.addEventListener("mouseup", dragStop);
    container.addEventListener("mouseleave", dragStop);

    container.addEventListener("touchstart", dragStart, { passive: false });
    container.addEventListener("touchmove", dragging, { passive: false });
    container.addEventListener("touchend", dragStop);
});