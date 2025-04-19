document.getElementById('yesBtn').addEventListener('click', () => {
  document.getElementById('intro').style.display = 'none';
  const videoSec = document.getElementById('videoSection');
  videoSec.style.display = 'block';
  const vid = document.getElementById('introVideo');
  vid.play();
  vid.onended = () => {
    videoSec.style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
  };
});