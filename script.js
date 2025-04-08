(function () {
    'use strict';
  
    const button = document.querySelector('button');
    const body = document.body;
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
  
    button.addEventListener('click', function () {
      const isDark = body.classList.toggle('switch');
  
      header.classList.toggle('switch');
      button.classList.toggle('switch');
      sections.forEach(section => section.classList.toggle('switch'));
  
      button.textContent = isDark ? '🌞 Switch to Day' : '🌙 Switch to Night';
    });
  })();
  