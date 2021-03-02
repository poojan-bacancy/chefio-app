import React, { Children, useState } from 'react'
import { StyleSheet, View , TextInput } from 'react-native'

import Colors from '../constants/Colors'
 
const IconBasedInput = (props) => {
    
    // destructring props
    const { 
        iconComponent , 
        iconName , 
        placeholder , 
        value , 
        onChangeText , 
        children , 
        secureTextEntry 
        } = props;
    
    // setting icon from parent component    
    const IconComponent = iconComponent

    // state for checking if input is focused or not
    const [isFocused,setIsFocused] = useState(false);

    //input style chnged if input is focused
    const inputContainerStyle = {
        ...styles.inputContainer,
        borderColor : isFocused ? Colors.primary : Colors.outline
    }

    //icon color is changed if inout is focused 
    const iconColor = isFocused ? 'black' : Colors.secondaryText 

    return (
        <View style={inputContainerStyle}>
            <IconComponent name={iconName} size={25} style={styles.icon} color={iconColor} />
            <TextInput 
                style={styles.input}
                placeholder={placeholder} 
                value={value} 
                onChangeText={onChangeText} 
                secureTextEntry={secureTextEntry}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {children}
        </View>
    )
}

export default IconBasedInput

const styles = StyleSheet.create({
    inputContainer : {
        width : '85%',
        borderRadius : 32,
        backgroundColor : Colors.white,
        borderWidth : 1,
        flexDirection : 'row',
        alignItems : 'center',
        marginVertical : 10
    },
    icon : {
        marginHorizontal : 15
    },
    input : {
        flex : 1
    }
})
