// MODAL AND MAP
const modal = document.getElementById('map-modal');
const openLink = document.getElementById('openModalBtn');
const closeBtn = document.getElementsByClassName('close-btn')[0];

openLink.onclick = function (event) {
  event.preventDefault();
  modal.style.display = 'block';
};

closeBtn.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// INTRO ANIMATION SCRIPT
const spans = document.querySelectorAll('.intro_text span');
const delay = 500;

spans.forEach((span, index) => {
  setTimeout(() => {
    span.style.opacity = '1';
  }, (index + 1) * delay);

  span.style.animationDelay = `${index * delay}ms`;
});

// AUDIO SCRIPTS
const playBookSound = document.getElementById('play-book');
const clickBookSound = document.getElementById('click-book');
const playGameSound = document.getElementById('play-game');
const clickGameSound = document.getElementById('click-game');
const clickElectroSound = document.getElementById('click-electro');
const playElectroSound = document.getElementById('play-electro');
const clickPianoSound = document.getElementById('click-piano');
const playPianoSound = document.getElementById('play-piano');

playBookSound.addEventListener('click', (e) => {
  e.preventDefault();
  pauseAllAudio();
  clickBookSound.play();
});

playGameSound.addEventListener('click', (e) => {
  e.preventDefault();
  pauseAllAudio();
  clickGameSound.play();
});

playElectroSound.addEventListener('click', (e) => {
  e.preventDefault();
  pauseAllAudio();
  clickElectroSound.play();
});

playPianoSound.addEventListener('click', (e) => {
  e.preventDefault();
  pauseAllAudio();
  clickPianoSound.play();
});

function pauseAllAudio() {
  clickBookSound.pause();
  clickGameSound.pause();
  clickElectroSound.pause();
  clickPianoSound.pause();
}

document.body.addEventListener('click', (e) => {
  const target = e.target;
  if (
    !isDescendantOrSelf(target, playBookSound) &&
    !isDescendantOrSelf(target, playGameSound) &&
    !isDescendantOrSelf(target, playElectroSound) &&
    !isDescendantOrSelf(target, playPianoSound)
  ) {
    pauseAllAudio();
  }
});

function isDescendantOrSelf(element, ancestor) {
  let node = element;
  while (node) {
    if (node === ancestor) {
      return true;
    }
    node = node.parentElement;
  }
  return false;
}
