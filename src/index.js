import { legacy_createStore as createStore } from 'redux';

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const num = document.querySelector('.num');

const ADD = 'Add';
const SUBT = 'Subt';

num.innerText = 0;

const countModifier = (count = 0, action) => {
  // if (action.type === 'Add') {
  //   return count + 1;
  // } else if (action.type === 'Subt') {
  //   return count - 1;
  // } else {
  //   return count;
  // }
  switch (action.type) {
    case ADD:
      return count + 1;

    case SUBT:
      return count - 1;

    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  num.innerText = countStore.getState();
};

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleSubt = () => {
  countStore.dispatch({ type: SUBT });
};

countStore.subscribe(onChange);

plus.addEventListener('click', handleAdd);

minus.addEventListener('click', handleSubt);
