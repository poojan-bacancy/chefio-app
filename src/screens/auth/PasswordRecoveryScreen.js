import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { sendPasswordResetEmail } from '../../store/actions/authActions'
import { StyleSheet, TouchableWithoutFeedback,ScrollView, KeyboardAvoidingView, Keyboard, View } from 'react-native'
import Text from '../../components/Text'
import CustomButton from '../../components/CustomButton'
import IconBasedInput from '../../components/IconBasedInput'
import Colors from '../../constants/Colors'
import Dimensions from '../../constants/Dimensions'
import Feather from 'react-native-vector-icons/Feather'

const PasswordRecoveryScreen = ({navigation}) => {

    const [email,setEmail] = useState();
    const dispatch = useDispatch()

    const submitHandler = async () => {
        try{
            await dispatch(sendPasswordResetEmail(email))
            navigation.navigate('Verification',{
                passRecovery : true
            }) 
        }catch(err){
            console.log(err)
        }
        
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <KeyboardAvoidingView style={styles.screen} >
                <ScrollView>

                    <Text style={styles.passRecoveryText}>Password Recovery</Text>
                        
                    <Text style={styles.belowPassRecoveryText}>Enter your email to recover your password</Text>

                    <IconBasedInput 
                        value={email}
                        onChangeText={(term) => setEmail(term)}
                        style={styles.input}
                        placeholder="email"
                        iconComponent = {Feather}
                        iconName="mail"
                    />


                    <View style={styles.buttonContainer}>

                        <CustomButton style={styles.button} onPress={submitHandler} >
                            <Text style={styles.buttonTitle}>Sign in</Text>
                        </CustomButton>

                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default PasswordRecoveryScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        backgroundColor : Colors.white
    },
    passRecoveryText : {
        marginTop : Dimensions.height * 90,
        textAlign : 'center',
        fontWeight : '700',
        fontSize : 22,
        lineHeight : 32,
        letterSpacing : 0.5,
    },
    belowPassRecoveryText  :{
        textAlign : 'center',
        fontWeight : '500',
        fontSize : 15,
        lineHeight : 25,
        marginVertical : Dimensions.height * 10, 
        letterSpacing : 0.5,
        color : Colors.secondaryText,
    },
    input : {
        marginHorizontal : 20,
        marginVertical : 20
    },
    buttonContainer : {
        alignItems : 'center',
        marginVertical : 10 
    },
    button : {
        width :"80%",
        height: Dimensions.height * 55
    },
    buttonTitle: {
        color : Colors.white,
        fontWeight : '700',
        fontSize : 15,
        lineHeight : 18.5,
        letterSpacing : 0.5
    }
})
