import { legacy_createStore as createStore } from 'redux';

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const num = document.querySelector('.num');

num.innerText = 0;

const countModifier = (count = 0, action) => {
  if (action.type === 'Add') {
    return count + 1;
  } else if (action.type === 'Subt') {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  num.innerText = countStore.getState();
};

const handleAdd = () => {
  countStore.dispatch({ type: 'Add' });
};

const handleSubt = () => {
  countStore.dispatch({ type: 'Subt' });
};

countStore.subscribe(onChange);

plus.addEventListener('click', handleAdd);

minus.addEventListener('click', handleSubt);
