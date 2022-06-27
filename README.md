# Vanilla Redux

## Redux

Redux는 state 관리하는 도구

### store

store는 state가 저장되는 공간

### reducer

reducer는 state를 바꿀 수 있는 유일한 함수

reducer에는 2개의 파라미터가 들어가는데 첫번째 파라미터는 state, 두번째 파라미터는 action이 들어간다.

### dispatch

state는 reducer에서 바꿀 수 있지만 이를 핸들링하기 위해서는

```
store.dispatch({key : value})
```

위의 코드처럼 dispatch에 키값 쌍을 넣어주면 reducer의 action 파라미터로 값이 넘어온다.

- 예시

```
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

console.log(countStore.getState()); // 출력된 값 : 1
```
