import { legacy_createStore as createStore } from 'redux';

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const num = document.querySelector('.num');

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

countStore.dispatch({ type: 'Add' });

console.log(countStore.getState());
