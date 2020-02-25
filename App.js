import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore} from "redux";
import Screen from './src/Screen'
import reducer from './src/reducer'

export default function App() {
  return (
      <Provider store={store}>
        <Screen />
      </Provider>
  );
}

const store = createStore(reducer);
