import React from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import Colors from './src/constants/Colors'
import AppNaviagtor from './src/navigation/AppNavigator'
import { Provider } from 'react-redux'
import { createStore , combineReducers , applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import authReducer from './src/store/reducers/authReducers'

const rootreducers = combineReducers({
  auth : authReducer
});

const store = createStore(rootreducers,applyMiddleware(ReduxThunk));

const App = () => {  
  return (
    <Provider store={store}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor= {Colors.primary}
      />
      <AppNaviagtor />
    </Provider>
    
  )
}

export default App

const styles = StyleSheet.create({})
