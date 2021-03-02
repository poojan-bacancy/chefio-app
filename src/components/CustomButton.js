import React from 'react'
import { StyleSheet,TouchableOpacity} from 'react-native'
import Colors from '../constants/Colors'

const CustomButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress} style={{ ...styles.button , ...props.style}}>
            {props.children}
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : Colors.primary,
        borderRadius : 25,
        padding : 5
    }
})
