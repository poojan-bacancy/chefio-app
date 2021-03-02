import React , { useState } from 'react'
import { KeyboardAvoidingView,Keyboard , ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import Text from '../../components/Text'
import Dimensions from '../../constants/Dimensions'
import Colors from '../../constants/Colors'
import InputForm from '../../components/InputForm'
import CustomButton from '../../components/CustomButton'
import Feather from 'react-native-vector-icons/Feather'

const SignupScreen = (props) => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    // state for checking if password is having 6 chars and password contains a number 
    const [isAtleastSixChar,setIsAtleastSixChar] = useState(false)
    const [doesContainNumber,setDoesContainNumber] = useState(false)

    //setting the style of password properties whenever password changes
    const passPropertySixCharIconStyle = {
        ...styles.passPropertyIcon,
        backgroundColor : isAtleastSixChar ?  "#E3FFF1" :  Colors.secondaryText,
        opacity : isAtleastSixChar ? 1 : 0.2
    }

    const passPropertySixCharTextStyle = {
        ...styles.passPropertyText,
        color : isAtleastSixChar ? Colors.mainText : Colors.secondaryText
    }

    const passPropertyContainsNumberIconStyle = {
        ...styles.passPropertyIcon,
        backgroundColor : doesContainNumber ? "#E3FFF1" : Colors.secondaryText,
        opacity : doesContainNumber ? 1 : 0.2
    }

    const passPropertyContainsNumberTextStyle = {
        ...styles.passPropertyText,
        color : doesContainNumber ? Colors.mainText : Colors.secondaryText
    }

    // function to highlight changes in password
    const passwordChangeHandler = (term) => {
        setPassword(term)
        if(term.length >= 6) {
            setIsAtleastSixChar(true)
        }
        else{
            setIsAtleastSixChar(false)
        }

        var regex = /\d/g;
        if(regex.test(term)){
            setDoesContainNumber(true)
        }else{
            setDoesContainNumber(false)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <KeyboardAvoidingView style={styles.screen}>
            
                <ScrollView>

                    <Text style={styles.welcomeText} >Welcome Back!</Text>
                        
                    <Text style={styles.belowWelcomeText} >Please enter your account here</Text>
                                
                    <InputForm 
                        values={{ email , password }} 
                        onChangeEmail={(term) => setEmail(term)} 
                        onChangePassword = {passwordChangeHandler}
                    />  

                    <Text style={styles.passPropertiesTitle}>Your Password must contain:</Text>
                    
                    {/* displays properties of password */}
                    <View style={styles.passProperty}>
                        <View style={passPropertySixCharIconStyle}>
                            <Feather name="check" size={15} color={isAtleastSixChar ? Colors.primary : Colors.mainText} />
                        </View> 
                        <Text style={passPropertySixCharTextStyle}>Atleast 6 characters</Text>
                    </View>

                    {/* displays properties of password */}
                    <View style={styles.passProperty}>
                        <View style={passPropertyContainsNumberIconStyle}>
                            <Feather name="check" size={15} color={doesContainNumber ? Colors.primary : Colors.mainText} />
                        </View> 
                        <Text style={passPropertyContainsNumberTextStyle} >Contains a number</Text>
                    </View>

                   <View style={styles.buttonContainer}>
                        <CustomButton style={styles.signupButton}>
                            <Text style={styles.signupButtonTitle}>Sign Up</Text>
                        </CustomButton>
                   </View>

                </ScrollView>

            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        backgroundColor : Colors.white
    },
    welcomeText : {
        marginTop : Dimensions.height * 90,
        textAlign : 'center',
        fontWeight : '700',
        fontSize : 22,
        lineHeight : 32,
        letterSpacing : 0.5,
    },
    belowWelcomeText  :{
        textAlign : 'center',
        fontWeight : '500',
        fontSize : 15,
        lineHeight : 25,
        marginVertical : Dimensions.height * 10, 
        letterSpacing : 0.5,
        color : Colors.secondaryText,
        paddingHorizontal : 50
    },
    signupButton : {
        width : '80%',
        height : Dimensions.height*55
    },
    signupButtonTitle : {
        color : Colors.white,
        fontWeight : '700',
        fontSize : 15,
        lineHeight : 18.5,
        letterSpacing : 0.5
    },
    buttonContainer : {
        marginVertical : 20,
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    passPropertyIcon : { 
        borderRadius : 50 ,
        borderColor : Colors.outline , 
        borderWidth : 1 , 
        padding : 2
    },
    passPropertiesTitle : {
        fontWeight : '500',
        fontSize : 17,
        lineHeight : 27,
        marginHorizontal : Dimensions.width * 25,
        marginVertical : Dimensions.height * 5, 
        letterSpacing : 0.5,
        color : "#3E5481",
    },
    passProperty : {
        marginHorizontal : Dimensions.width * 25,
        flexDirection : 'row',
        alignItems : 'center'
    },
    passPropertyText : {
        fontWeight : '500',
        fontSize : 15,
        lineHeight : 25,
        marginHorizontal : Dimensions.width * 10,
        marginVertical : Dimensions.height * 10, 
        letterSpacing : 0.5,
    }
})
