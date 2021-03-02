import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './AuthNavigator'
import React  from 'react'

// create navigator for both auth screens and chef screens
const AppNaviagtor = () => {
    return(
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
}

export default AppNaviagtor