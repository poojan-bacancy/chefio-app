import React, { useState } from 'react'
import { StyleSheet, View , TextInput } from 'react-native'

import Colors from '../constants/Colors'
 
const IconBasedInput = (props) => {
    
    // destructring props
    const { 
        iconComponent , // for using icon
        iconName , 
        placeholder , 
        value , 
        onChangeText , 
        children , // for hidden/show pass field
        secureTextEntry ,
        noIcon, //when noIcon is true then rendering input without icon
        style,
        index, //for giving key to multiple input
        reference, // for giving ref to the input
        autoFocus,
        onChange, 
        onFocus,
        searchBar,
        keyPressed,
        returnKeyType,
        onSubmitEditing
        } = props;
    
    // setting icon from parent component    
    const IconComponent = iconComponent

    // state for checking if input is focused or not
    const [isFocused,setIsFocused] = useState(false);

    // used for eye button in password field 
    const [touched,setTouched] = useState(false)

    //input style chnged if input is focused
    const inputContainerStyle = {
        ...styles.inputContainer,
        ...style,
        borderColor : isFocused ? Colors.primary : Colors.outline
    }

    //icon color is changed if input is focused 
    const iconColor = isFocused ? 'black' : Colors.secondaryText 

    return (
        <View style={inputContainerStyle} key={index} >
            {/* icon shouldn't be visible for otp input */}
            { !noIcon && <IconComponent name={iconName} size={25} style={styles.icon} color={iconColor} />}
            <TextInput 
                onKeyPress={keyPressed}
                style={{
                    ...styles.input , 
                    // rendering differnet styles based on if input is otp based or search based
                    textAlign :  ( !searchBar && noIcon) ? "center" : "left", 
                    fontSize : (!searchBar && noIcon) ? 25 : 14
                }}
                ref={reference}
                placeholder={placeholder} 
                value={value} 
                onChangeText={onChangeText} 
                secureTextEntry={secureTextEntry}
                onFocus={ () =>{ 
                    setTouched(true)
                    if(noIcon && searchBar) { onFocus() }
                    else{ setIsFocused(true) }
                }}
                onBlur={() => setIsFocused(false)}
                maxLength = { noIcon && !searchBar ? 1 : 40}
                keyboardType = { noIcon && !searchBar ? "numeric" : "default"}
                autoFocus={autoFocus}
                onChange={onChange}      
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}  
            />
            {/* for displaying show/hide button for password field */}
            {/* icon will be visible after focusing input button first time */}
            { touched || searchBar ? children : null } 
        </View>
    )
}

export default IconBasedInput

const styles = StyleSheet.create({
    inputContainer : {
        flexDirection : 'row',
        flex : 1,
        borderRadius : 32,
        backgroundColor : Colors.white,
        borderWidth : 1,
        alignItems : 'center',
        marginVertical : 10,
        overflow : 'hidden',
        marginHorizontal : 5,
    },
    icon : {
        marginHorizontal : 15
    },
    input : {
        flex : 1,
        fontFamily : 'Inter',
        textAlignVertical : 'center'
    }
})
