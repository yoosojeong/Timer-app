// redux ducks

// Import
// Actions
const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

// Actions Creators (타이머 시작을 만듬)

function startTimer() {
    return {
        type: START_TIMER
    }
}

function restartTimer() {
    return {
        type: RESTART_TIMER
    }
}

function addSecond() {
    return {
        type: ADD_SECOND
    }
}

// Reducer

//액션을 보낼 때마다, 리덕스는 자동으로 리듀서를 실행 (디폴트)
const TIME_DURATION = 1500; //시간

const initialState = {
    isPlaying: false, //플레이 여부
    elapsedTime: 0, //카운터
    timeDuration: TIME_DURATION
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyREstartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        default:
            return state;
    }
}

// Reducer Functions

function applyStartTimer(state) {
    //overwrite
    return {
        ... state,
        isPlaying: true //새로운 변환
    }
}

function applyRestartTimer(state) {
    //overwrite
    return {
        ... state,
        isPlaying: false, //새로운 변환
        elapsedTime: 0
    }
}

function applyAddSecond(state) {
    if(state.elapsedTime < TIME_DURATION) {
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1 //1초 추가
        }
    }else {
          return {  
              ...state,
              isPlaying: false
        }  
    }
}

// Export Action Creators

//버튼을 이행하는 명령
const actionCreators = {
  startTimer,
  restartTimer,
  addSecond
};

// Export Reducer
export default reducer;