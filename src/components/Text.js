import React from 'react'
import { StyleSheet, Text } from 'react-native'

const CustomText = props => {
    return (
        <Text style={{ ...props.style , ...styles.text}}>
            {props.children}
        </Text>
    )
}

export default CustomText

const styles = StyleSheet.create({
    text : {
        fontFamily : 'Inter'
    }
})
