(function () {
    'use strict';
  
    const button = document.querySelector('button');
    const html = document.documentElement;
    const body = document.body;
  
    button.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      html.classList.toggle('dark-mode');
    });
  })();
  
  