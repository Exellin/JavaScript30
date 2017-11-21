const keyElements = document.querySelector('.keys').children;

for (const keyElement of keyElements) {
  keyElement.addEventListener('transitionend', removeClass);
}

window.addEventListener('keydown', playSound);

function playSound(e) {
  if (e.repeat) return;
  
  const keyElement = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!keyElement) return;
  keyElement.classList.add('playing');

  const sound = new Audio(`./sounds/${keyElement.dataset.sound}.wav`);
  sound.play();
}

function removeClass(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
