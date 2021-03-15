import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './AuthNavigator'
import React  from 'react'
import ChefNavigator from './ChefNavigator'
import { useSelector } from 'react-redux'
import StartupScreen from '../screens/StartupScreen'

// create navigator for both auth screens and chef screens
const AppNaviagtor = () => {

    const isAuth = useSelector(state => state.auth.token)
    const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin)

    return(
        <NavigationContainer>
            {isAuth && <ChefNavigator/>}
            {!isAuth && didTryAutoLogin && <AuthNavigator /> }
            {!isAuth && !didTryAutoLogin && <StartupScreen/>}
        </NavigationContainer>
    );
}

export default AppNaviagtor