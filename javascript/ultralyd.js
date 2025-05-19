"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const dommie1 = document.querySelector('.dommie1');
    const container = document.getElementById('dommie-body');
  
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      dommie1.classList.add('masked');
      dommie1.style.clipPath = `circle(100px at ${x}px ${y}px)`;
    });
  
    container.addEventListener('mouseleave', () => {
      dommie1.classList.remove('masked');
      dommie1.style.clipPath = `circle(0px at 0px 0px)`;
    });
  });