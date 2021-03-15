import React from 'react'
import { StyleSheet, View , Modal, Image } from 'react-native'
import CustomButton from '../components/CustomButton'
import Text from '../components/Text'
import Colors from '../constants/Colors' 
import Dimensions from '../constants/Dimensions'

const UploadSuccessModal = (props) => {
    return (
        <Modal
            animationType = "fade"
            transparent={true}
            visible={props.visible}
        >
            <View style={styles.modalScreen}>
                <View style={styles.modalBox}>

                    <Image 
                        source={require('../../assets/images/uploadSuccess.png')}
                    />

                    <Text style={styles.uploadSuccessText}>Upload Success</Text>

                    <Text style={styles.belowUploadSuccessText}>
                        Your recipe has been uploaded,
                        you can see it on your profile
                    </Text>

                    <CustomButton style={styles.button} onPress={props.backToHome}>
                        <Text style={styles.buttonTitle} > Back To Home </Text>
                    </CustomButton>

                </View>
            </View>
        </Modal>
    )
}

export default UploadSuccessModal

const styles = StyleSheet.create({
    modalScreen : {
        flex : 1 , 
        justifyContent : 'center' , 
        alignItems : 'center' , 
        backgroundColor : '#000000aa'
    },
    modalBox : { 
        backgroundColor : Colors.white , 
        alignItems : 'center',
        width : '85%' , 
        borderRadius : 25,
        paddingHorizontal : 30,
        paddingVertical : 45
    },
    uploadSuccessText : {
        marginTop : 20,
        fontSize : 22,
        lineHeight : 32,
        letterSpacing : 0.5,
        fontWeight : '700',
        color : Colors.mainText
    },
    belowUploadSuccessText : {
        marginTop : 10,
        fontSize : 15,
        lineHeight : 25,
        letterSpacing : 0.5,
        fontWeight : '500',
        color : Colors.mainText
    },
    button : {
        flex  :1,
        paddingVertical : 25,
        paddingHorizontal : 40,
        marginTop : 20,
        height : Dimensions.height * 50
    },
    buttonTitle : {
        fontSize : 15,
        lineHeight : 18.5,
        letterSpacing : 0.5,
        fontWeight : '700',
        color : Colors.white
    }
})
