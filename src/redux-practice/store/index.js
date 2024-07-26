import { createStore } from 'redux'

// 관리할 초기 상태값 객체
const initialCountState = {
    counter: 10
};

// reducer: 상태 변경을 위한 순수 함수 (부수 효과: 비동기코드가 없는 함수)
// 카운터 상태 관리를 위한 리듀서 정의
/**
 *
 * @param state 상태 변경 이전의 상태
 * @param action 상태를 어떻게 변경할지에 대한 명세
 * @returns {*}
 */
const counterReducer = (state = initialCountState, action) => {
    console.log('prev state: ', state);
    console.log('action: ', action);

    return state;
};


// 단하나의 리덕스 스토어
// 스토어에는 리듀서를 제공할 수 있다.
const store = createStore(counterReducer);

// 리액트의 index.js에게store를 제공
export default store;