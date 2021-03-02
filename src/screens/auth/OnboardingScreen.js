import React from 'react'
import {StyleSheet,Image, View } from 'react-native'
import Dimensions from '../../constants/Dimensions'
import CustomButton from '../../components/CustomButton'
import Text from '../../components/Text'
import Colors from '../../constants/Colors'

const OnboardingScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Image
                style={styles.onBoardingImage}
                source={require('../../../assets/images/Onboarding.png')}
            />
            <Text style={styles.tagLineHeaderText}>Start Cooking</Text>
            <Text style={styles.tagLineText}>
                Let’s join our community to cook better food!
            </Text>
            <View style={styles.buttonContainer}>
                <CustomButton style={styles.button} onPress = {() => props.navigation.navigate('Signin')} >
                    <Text style={styles.buttonTitle}> Get Started </Text>
                </CustomButton>
            </View>
        </View>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1,
    },
    onBoardingImage : {
        height : Dimensions.height * 500
    },
    tagLineText : {
        textAlign : 'center',
        fontWeight : '500',
        fontSize : 17,
        lineHeight : 22,
        marginVertical : Dimensions.height*15, 
        letterSpacing : 0.5,
        color : Colors.secondaryText,
        paddingHorizontal : 50
    },
    tagLineHeaderText : {
        textAlign : 'center',
        fontWeight : '700',
        fontSize : 22,
        lineHeight : 32,
        marginTop : 20, 
        letterSpacing : 0.5
    },
    buttonContainer : {
        alignItems : 'center',
        marginTop : Dimensions.height*55
    },
    buttonTitle : {
        color : Colors.white,
        fontWeight : '700',
        fontSize : 15,
        lineHeight : 18.5,
        letterSpacing : 0.5
    },
    button : {
        width : '80%',
        height : Dimensions.height*55
    }
})
