import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer';
import reducer from './reducer';
import { createStore }from 'redux';
import { Provider } from 'react-redux'; // 컴포넌트 안의 스토어를 복사해서, 칠드런 컴포넌트에 넣는다.

let store = createStore(reducer);

// console.log(store.getState()) // state에서 받는 값

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <Timer />
        </Provider>
    );
  }
}
