const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const num = document.querySelector('.num');

let count = 0;

num.innerText = count;

const updateText = () => {
  num.innerText = count;
};

const add = () => {
  count = count + 1;
  updateText();
};

const subt = () => {
  count = count - 1;
  updateText();
};

plus.addEventListener('click', add);

minus.addEventListener('click', subt);
