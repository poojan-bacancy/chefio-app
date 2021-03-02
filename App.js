import React from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import Colors from './src/constants/Colors'
import AppNaviagtor from './src/navigation/AppNavigator'

const App = () => {  
  return (
    <>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor= {Colors.primary}
      />
      <AppNaviagtor />
    </>
    
  )
}

export default App

const styles = StyleSheet.create({})
