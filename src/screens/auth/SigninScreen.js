import React , {useState} from 'react'
import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Text from '../../components/Text'
import Dimensions from '../../constants/Dimensions'
import Colors from '../../constants/Colors'
import InputForm from '../../components/InputForm'
import CustomButton from '../../components/CustomButton'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SigninScreen = (props) => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            
            {/* to avoid keyboard */}
            <KeyboardAvoidingView style={styles.screen}>
                
                <ScrollView>

                    <Text style={styles.welcomeText} >Welcome Back!</Text>
                    
                    <Text style={styles.belowWelcomeText} >Please enter your account here</Text>
                    
                    <InputForm 
                        values={{ email , password }} 
                        onChangeEmail={(term) => setEmail(term)} 
                        onChangePassword = {(term) => setPassword(term)}
                    />
                    
                    <TouchableOpacity style={styles.forgotPassContainer}>
                        <Text style={styles.forgotPassText}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <View style={styles.buttonsContainer}>

                        <CustomButton style={styles.loginButton}>
                            <Text style={styles.loginButtonTitle}>Login</Text>
                        </CustomButton>

                        <Text style={styles.continueWithText}>or continue with</Text>

                        <CustomButton style={styles.googleButton}>
                            <AntDesign name="google" size={20} color={Colors.white} />
                            <Text style={styles.googleButtonTitle}>Google</Text>
                        </CustomButton>

                        <View style={styles.signupTextContainer}>
                            <Text style={styles.notHaveAnAccText}>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Signup')} >
                                <Text style={styles.signupText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>

            </KeyboardAvoidingView>
        
        </TouchableWithoutFeedback>
    )
}

export default SigninScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        backgroundColor : Colors.white
    },
    welcomeText : {
        marginTop : Dimensions.height * 100,
        textAlign : 'center',
        fontWeight : '700',
        fontSize : 22,
        lineHeight : 32,
        letterSpacing : 0.5
    },
    belowWelcomeText  :{
        textAlign : 'center',
        fontWeight : '500',
        fontSize : 15,
        lineHeight : 25,
        marginVertical : Dimensions.height*10, 
        letterSpacing : 0.5,
        color : Colors.secondaryText,
        paddingHorizontal : 50
    },
    forgotPassContainer : {
        alignItems : 'flex-end',
        marginRight : '10%'
    },
    forgotPassText : {
        color : Colors.mainText,
        fontWeight : '500',
        fontSize : 15,
        lineHeight : 25,
        letterSpacing : 0.5
    },  
    buttonsContainer : {
        marginTop : Dimensions.height * 170,
        alignItems : 'center',
        justifyContent : 'space-around'
    },
    loginButton : {
        width : '80%',
        height : Dimensions.height*55
    },
    loginButtonTitle : {
        color : Colors.white,
        fontWeight : '700',
        fontSize : 15,
        lineHeight : 18.5,
        letterSpacing : 0.5
    },
    continueWithText : {
        marginVertical : 10,
        color : Colors.secondaryText,
        fontWeight : '500',
        fontSize : 15,
        lineHeight : 25,
        letterSpacing : 0.5
    },
    googleButton : {
        width : '80%',
        height : Dimensions.height*55,
        backgroundColor : Colors.secondary
    },
    googleButtonTitle : {
        marginLeft : 10,
        color : Colors.white,
        fontWeight : '700',
        fontSize : 15,
        lineHeight : 18.5,
        letterSpacing : 0.5
    },
    signupTextContainer : {
        flexDirection : 'row',
        marginTop : 10
    },
    notHaveAnAccText : {
        color : Colors.mainText,
        fontWeight : '500',
        fontSize : 15,
        lineHeight : 25,
        letterSpacing : 0.5
    },
    signupText : {
        color : Colors.primary,
        fontWeight : '700',
        fontSize : 15,
        lineHeight : 25,
        letterSpacing : 0.5
    }
})
