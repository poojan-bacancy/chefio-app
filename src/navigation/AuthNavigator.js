import { createStackNavigator } from '@react-navigation/stack'
import React  from 'react'
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import PasswordRecoveryScreen from '../screens/auth/PasswordRecoveryScreen';
import SigninScreen from '../screens/auth/SigninScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import VerificationCodeScreen from '../screens/auth/VerificationCodeScreen';

//create navigator for auth screens
const AuthStack = createStackNavigator()

const AuthNavigator = () => {
    return(
        // All auth screens are not showing any header
        <AuthStack.Navigator screenOptions={{ headerShown : null }} > 
            <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />    
            <AuthStack.Screen name="Signin" component={SigninScreen} />
            <AuthStack.Screen name="Signup" component={SignupScreen} />
            <AuthStack.Screen name="Verification" component={VerificationCodeScreen} />
            <AuthStack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen} />
        </AuthStack.Navigator>
    );
}

export default AuthNavigator