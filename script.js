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

// INTRO ANIMATION
const spans = document.querySelectorAll('.intro_text span');
const delay = 500;

spans.forEach((span, index) => {
  setTimeout(() => {
    span.style.opacity = '1';
  }, (index + 1) * delay);

  span.style.animationDelay = `${index * delay}ms`;
});

