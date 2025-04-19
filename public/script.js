const btn = document.getElementById('startBtn');
const intro = document.getElementById('intro');
const video = document.getElementById('introVideo');
const main = document.getElementById('main');

btn.addEventListener('click', () => {
  intro.style.display = 'none';
  video.style.display = 'block';
  video.play();
});

video.addEventListener('ended', () => {
  video.style.display = 'none';
  main.style.display = 'block';
});
