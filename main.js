'use strict';

const face = document.querySelector('.js-face');
const happy = document.querySelector('.js-faceHidden');

function happyFace() {
  happy.classList.remove('hidden');
  face.classList.add('hidden');
}

face.addEventListener('click', happyFace);
