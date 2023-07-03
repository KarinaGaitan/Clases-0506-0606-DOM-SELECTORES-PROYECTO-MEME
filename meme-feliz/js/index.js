'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const memesBuscador = document.getElementById('memesBuscador');
  const memesMemeContainer = document.getElementById('memesMemeContainer');

  memesBuscador.addEventListener('change', (e) => {
    memesMemeContainer.textContent = e.target.value;
    console.log(e.target.value);
  });
});

