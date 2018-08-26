import { connect } from 'react-redux'; // connect :  나의 컴포넌트를 스토어에 연결하는 것을 도와준다.
import { bindActionCreators } from 'redux'; // 무언가를 묶어준다.
import { actionCreators as tomatoActions } from "../../reducer";
import Timer from './presenter';

// index.js : 컨테이너 / 리덕스에 관련된 것을 다 넣는다.
// presenter.js : 데이터를 보여주기만 하면 된다. 리덕스 작업 x

// 스토어에서 state를 복사 -> 컨테이너의 props에 붙여넣기
function mapStateToProps(state) {
    const { isPlaying, elapsedTime, timeDuration } = state;
    return {
        isPlaying,
        elapsedTime,
        timeDuration
    };
}

// dispatch : 액션을 리듀서로 보내는 function
function mapDispatchToProps(dispatch) {
    return {
        startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
        addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Timer);
