const startButton = document.getElementById('startButton');
const introDiv = document.getElementById('intro');
const video = document.getElementById('introVideo');

startButton.addEventListener('click', () => {
  introDiv.style.display = 'none';
  video.style.display = 'block';
  video.play();
  video.onended = () => {
    window.location.href = 'homepage.html';
  };
});