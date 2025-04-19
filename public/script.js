const yesBtn = document.getElementById('yesBtn');
const intro = document.getElementById('intro');
const videoSection = document.getElementById('videoSection');
const main = document.getElementById('main');
const video = document.getElementById('introVideo');

yesBtn.addEventListener('click', () => {
  intro.style.display = 'none';
  videoSection.style.display = 'block';
  video.play();
  video.onended = () => {
    videoSection.style.display = 'none';
    main.style.display = 'block';
  };
});
