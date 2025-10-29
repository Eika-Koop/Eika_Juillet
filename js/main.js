(function () {
  const overlay = document.getElementById('overlay');
  const enableBtn = document.getElementById('enable-audio');
  const audio = document.getElementById('siren');
  const tryAutoplay = async () => {
    try {
      await audio.play();
      overlay.setAttribute('aria-hidden', 'true');
    } catch (e) {}
  };
  if (new URLSearchParams(location.search).get('auto') === '1') {
    tryAutoplay();
  }
  enableBtn.addEventListener('click', async () => {
    try {
      audio.currentTime = 0;
      audio.volume = 1.0;
      await audio.play();
      overlay.setAttribute('aria-hidden', 'true');
      if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200, 100, 400]);
      }
    } catch (err) {
      alert('Tu navegador ha bloqueado el audio. Intenta pulsar de nuevo.');
    }
  });
})();