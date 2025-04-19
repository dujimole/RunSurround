const startBtn = document.getElementById('start-btn');
const intro = document.getElementById('intro');
const videoSection = document.getElementById('video');
const home = document.getElementById('home');
const introVideo = document.getElementById('intro-video');

startBtn.addEventListener('click', () => {
  intro.classList.add('hidden');
  videoSection.classList.remove('hidden');
  introVideo.play();
});

introVideo.addEventListener('ended', () => {
  videoSection.classList.add('hidden');
  home.classList.remove('hidden');
});
