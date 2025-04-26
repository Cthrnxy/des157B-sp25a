(function () {
  'use strict';

  const button = document.querySelector('button');
  const html = document.documentElement;
  const body = document.body;

  button.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    html.classList.toggle('dark-mode');
  });
  const playButton = document.getElementById('music');
const bgMusic = document.getElementById('fx');

playButton.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
  } else {
    bgMusic.pause();
    
  }
});

})();

