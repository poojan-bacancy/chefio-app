import React, { useState } from 'react'
import { StyleSheet, Modal , View, TouchableOpacity, Image } from 'react-native'
import Colors from '../constants/Colors'
import Dimensions from '../constants/Dimensions'
import Entypo from 'react-native-vector-icons/Entypo'
import Text from '../components/Text' 

const ScanModal = (props) => {
    
    return (
        <View style={{ flex : 1 }} >
            <Modal
            animationType = "none"
            transparent={true}
            visible={props.visible}
        >
            <View  style={styles.modalScreen} >
                <View style={styles.modalBox}>

                    <View style={styles.topContainer}>
                        <TouchableOpacity onPress={props.closeModal}><Entypo name="cross" size={25}/></TouchableOpacity>
                        <Text style={styles.chooseOptionText}> Choose one option</Text>
                    </View>

                    <View style={styles.optionsContainer}>
                        <TouchableOpacity style={styles.option}>
                            <Image style={{marginTop : 15}} source={require('../../assets/images/food.png')} />
                            <Text style={styles.optionName}>Food</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option}>
                            <Image source={require('../../assets/images/ingredient.png')} />
                            <Text style={styles.optionName}>Ingredients</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            </Modal>
        </View>
    )
}

export default ScanModal

const styles = StyleSheet.create({
    modalScreen : {
        flex : 1,
        justifyContent : 'flex-end' , 
        alignItems : 'center' , 
        backgroundColor : '#000000aa'
    },
    modalBox : { 
        width : '100%',
        backgroundColor : Colors.white , 
        backfaceVisibility : 'visible',
        borderRadius : 25,
        paddingHorizontal : 10,
        paddingVertical : 30
    },
    topContainer  : {
        flexDirection : 'row',  
        marginHorizontal: 20,
        alignItems : 'center',
        marginBottom :  20
    },
    chooseOptionText : {
        fontSize :  17,
        lineHeight : 27,
        letterSpacing  : 0.5,
        fontWeight :  '700',
        marginLeft :  40,
        color  : Colors.mainText
    },
    optionsContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center'
    },
    option : {
        height : Dimensions.height * 200,
        margin : 10,
        borderRadius : 24,
        padding : 20,
        borderWidth : 1,
        alignItems : 'center',
        borderColor : Colors.secondaryText
    },
    optionName : {
        fontWeight : '700',
        fontSize : 15,
        lineHeight : 25,
        letterSpacing  : 0.5,
        marginVertical : 20
    }
})
