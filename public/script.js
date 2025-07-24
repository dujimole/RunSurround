const btn = document.getElementById('startBtn');
const intro = document.getElementById('intro');
const video = document.getElementById('introVideo');
const main = document.getElementById('main');
const signupForm = document.getElementById('signupForm');

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log({ name, email, password });
  });
}

btn.addEventListener('click', () => {
  intro.style.display = 'none';
  video.style.display = 'block';
  video.play();
});

video.addEventListener('ended', () => {
  video.style.display = 'none';
  main.style.display = 'block';
});