import React, { useState , useRef, useEffect } from 'react'
import {useDispatch} from 'react-redux'
// import { sendEmailVerificationCode } from '../../store/actions/authActions'
import { 
    KeyboardAvoidingView, 
    Keyboard , 
    StyleSheet, 
    TouchableWithoutFeedback, 
    View,
    ScrollView, 
    TextInput
} from 'react-native'
import Text from '../../components/Text'
import CustomButton from '../../components/CustomButton'
import IconBasedInput from '../../components/IconBasedInput'
import Colors from '../../constants/Colors'
import Dimensions from '../../constants/Dimensions'
import moment from 'moment'
// momentDurationFormat(moment)

const VerificationCodeScreen = ({ route , navigation }) => {

    const [timer,setTimer] = useState(180);

    const { passRecovery } = route.params;

    const [pin0,setPin0] = useState();
    const [pin1,setPin1] = useState();
    const [pin2,setPin2] = useState();
    const [pin3,setPin3] = useState();

    const dispatch= useDispatch();

    const onSubmitHandler = () => {
        var otp = "";
        otp = otp.concat(pin0,pin1,pin2,pin3)
l    }
    

    //using refs for 4 input boxes
    const pin0Ref = useRef()
    const pin1Ref = useRef()
    const pin2Ref = useRef()
    const pin3Ref = useRef()

    //for focusing first input box when screen is loaded 
    useEffect(() => {

        pin0Ref.current.focus()
        
        let interval = setInterval(() => {
            setTimer(prevState => prevState === 1 ? clearInterval(interval) : prevState - 1)
         },1000)

        //  interval cleanup on component unmount
        return () => clearInterval(interval)

    },[])

    
    // setting pin value for particular index and focusing the next pin 
    const inputChangeHandler = (index,term) => {
    
        if(index < 3 && term){
            if(index === 0){
                setPin0(term)
                pin1Ref.current.focus()
            }
            else if(index === 1){
                setPin1(term)
                pin2Ref.current.focus()
            }
            else if(index === 2){
                setPin2(term)
                pin3Ref.current.focus()
            }
        }else{
            setPin3(term)
            pin3Ref.current.blur()
        }
        
    }

    // function to focus previour input when current input encouters keypress event for backspace key
    const backSpaceHandler = (index,event) => {
        
        if( event.nativeEvent.key === "Backspace" && index !== 0 ){
            if(index === 3) { pin2Ref.current.focus()}
            else if(index === 2) { pin1Ref.current.focus()}
            else if(index===1){ pin0Ref.current.focus()}  
        }else{
            pin0Ref.current.focus()
        }
        
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <KeyboardAvoidingView style={styles.screen} >
                <ScrollView>

                    <Text style={styles.checkEmailText}>Check your Email</Text>
                        
                    <Text style={styles.belowCheckEmailText}>We.ve sent the code to your email</Text>

                    {/* view for rendering 4 text inputs */}
                    <View style={styles.fourDigitInputContainer}>
                        {
                            Array(4).fill().map( (data,index) => {
                                return(
                                    <IconBasedInput 
                                        // giving refs based on number of input
                                        reference={
                                            index === 0 
                                            ? pin0Ref
                                            : index === 1
                                            ? pin1Ref :
                                            index === 2
                                            ? pin2Ref 
                                            : pin3Ref
                                        }
                                        keyPressed={backSpaceHandler.bind(this,index)} 
                                        onChangeText = {inputChangeHandler.bind(this,index)}
                                        key={index}
                                        index={index} 
                                        noIcon={true} 
                                        style={styles.input} 
                                    />
                                );
                            })
                        }
                    </View>
                    
                    <View style={styles.codeExpiresTextContainer}>
                        <Text style={styles.codeExpiresText}>code expires in </Text>
                        <Text style={{ color : Colors.secondary}}>
                            { timer 
                            ? moment.duration(timer, "seconds").format('mm:ss')
                            : '0'}
                        </Text>
                    </View>

                    <View style={styles.buttonsContainer}>

                        <CustomButton 
                            style={ styles.verifyButton } 
                            onPress={ onSubmitHandler } 
                        >
                            <Text style={styles.verifyButtonTitle}>{ passRecovery ? 'Next' : 'Verify'}</Text>
                        </CustomButton>

                        <CustomButton style={styles.sendAgainButton}>
                            <Text style={styles.sendAgainButtonTitle}>Send Again</Text>
                        </CustomButton>

                    </View>
                    

                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default VerificationCodeScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        backgroundColor : Colors.white
    },
    checkEmailText : {
        marginTop : Dimensions.height * 90,
        textAlign : 'center',
        fontWeight : '700',
        fontSize : 22,
        lineHeight : 32,
        letterSpacing : 0.5,
    },
    belowCheckEmailText  :{
        textAlign : 'center',
        fontWeight : '500',
        fontSize : 15,
        lineHeight : 25,
        marginVertical : Dimensions.height * 10, 
        letterSpacing : 0.5,
        color : Colors.secondaryText,
        paddingHorizontal : 40
    },
    fourDigitInputContainer : {
        flexDirection : 'row',
        marginHorizontal : 50
    },
    input :{
        borderRadius : 20
    },
    codeExpiresTextContainer :{ 
        marginTop : 30,
        marginBottom : 15,
        justifyContent : 'center',
        flexDirection : 'row',
        alignItems :"center"
    },
    codeExpiresText : {
        fontWeight : '500',
        fontSize : 15,
        lineHeight : 25,
        letterSpacing : 0.5,
    },
    buttonsContainer : {
        justifyContent : 'space-around',
        alignItems : 'center'
    },
    verifyButton : {
        width :'80%',
        height : Dimensions.height * 55,
        marginVertical : 10
    },
    verifyButtonTitle : {
        fontWeight : '700',
        fontSize : 15,
        lineHeight : 18.5,
        color : Colors.white, 
        letterSpacing : 0.5,
    },
    sendAgainButton : {
        width :'80%',
        height : Dimensions.height * 55,
        marginVertical : 10,
        backgroundColor : Colors.white,
        borderColor : Colors.outline,
        borderWidth : 1
    },
    sendAgainButtonTitle :{
        fontWeight : '700',
        fontSize : 15,
        lineHeight : 18.5,
        color : Colors.secondaryText, 
        letterSpacing : 0.5,
    }
})
