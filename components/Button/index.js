import React from "react"; 
import PropTypes from "prop-types";
import { View, TouchableOpacity} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// opPress : 버튼을 누르면 활성화되는 기능 (아이폰은 버튼에서 땔 때 실행)
// opPress : 버튼을 누르면 활성화되는 기능 (누를 때) 실행)

// TouchableOpacity: 버튼을 눌렀을 때, 투명도

function Button({iconName, onPress}) {
    return(
        <TouchableOpacity onPressOut={onPress}>
            <FontAwesome name={iconName} size={80} color="white" />
        </TouchableOpacity>
    )
}

// 필수조건
// 아이콘 이름 - string, onpress
Button.propTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}

export default Button;



// isCounting(재생 사인): True(거꾸로 카운팅) | False(가만히 있기)
// counterDuration(카운트): 1500(25분) (60 * 25 => 1500초)
// elapsedTime(카운트를 시작하고 지난 시간): 0 (0 ~ 1500) 
