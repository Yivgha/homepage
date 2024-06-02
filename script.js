const modal = document.getElementById('myModal');
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

