const v = document.getElementById('video');
// v.muted = true;
// v.autoplay = true;
// v.loop = true;
// v.play().catch(() => {});

window.addEventListener('orientationchange', () => {
  document.body.style.transform = 'scale(1)';
  requestAnimationFrame(() => { document.body.style.transform = ''; });
});
