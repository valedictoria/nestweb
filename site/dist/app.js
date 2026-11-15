const video = document.querySelector('#hero-video');
const toggle = document.querySelector('#video-toggle');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const connection = navigator.connection;
let loaded = false;
let failed = false;
function updateToggle() {
  toggle.textContent = video.paused ? 'Play background video ▷' : 'Pause background video Ⅱ';
  toggle.setAttribute('aria-label', video.paused ? 'Play background video' : 'Pause background video');
}
async function playVideo() {
  if (failed || motion.matches) return;
  if (!loaded) {
    const source = video.querySelector('source');
    source.src = source.dataset.src;
    video.load();
    loaded = true;
  }
  try { await video.play(); } catch { /* Keep poster and an explicit play option. */ }
  updateToggle();
}
toggle.hidden = motion.matches;
toggle.addEventListener('click', () => video.paused ? playVideo() : video.pause());
video.addEventListener('play', updateToggle);
video.addEventListener('pause', updateToggle);
video.addEventListener('error', () => { failed = true; toggle.hidden = true; });
video.querySelector('source').addEventListener('error', () => { failed = true; toggle.hidden = true; });
motion.addEventListener('change', () => {
  toggle.hidden = motion.matches || failed;
  if (motion.matches) video.pause();
});
if (!motion.matches && !connection?.saveData) playVideo();
