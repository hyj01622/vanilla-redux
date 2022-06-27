import { legacy_createStore as createStore } from 'redux';

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const num = document.querySelector('.num');

const countModifier = (state = 0) => {
  return state;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());
