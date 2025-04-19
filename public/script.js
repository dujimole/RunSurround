function showHomepage() {
  document.getElementById('video-screen').classList.add('hidden');
  document.getElementById('homepage').classList.remove('hidden');
}
document.getElementById('start-btn').addEventListener('click', function() {
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('video-screen').classList.remove('hidden');
});
