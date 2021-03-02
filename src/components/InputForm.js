import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Colors from '../constants/Colors'
import IconBasedInput from './IconBasedInput'
import Feather from 'react-native-vector-icons/Feather'

const InputForm = (props) => {
    
    //state for input form
    const [isPasswordVisible,setIsPasswordVisible] = useState(true)


    return (
        <View style={styles.inputForm}>
            {/* custom input containing icon  */}
           <IconBasedInput
                placeholder="Email or phone number"
                iconComponent = {Feather}
                iconName="mail"
                value={props.values.email}
                onChangeText={props.onChangeEmail}
           />
           {/* custom input containing icon  */}
           <IconBasedInput
                placeholder="Password"
                iconComponent = {Feather}
                iconName="lock"
                value={props.values.password}
                onChangeText={props.onChangePassword}
                secureTextEntry={isPasswordVisible}
           >
               {/* icon for showing and hiding password */}
               <TouchableOpacity onPress={() => setIsPasswordVisible(prevState => !prevState )}>
                    <Feather name={ isPasswordVisible ? "eye" : "eye-off"} size={25} style={styles.hideShowPassIcon} color={Colors.secondaryText} />
               </TouchableOpacity>

           </IconBasedInput>

            
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    inputForm : {
        alignItems : 'center',
        justifyContent : 'space-around',
        marginVertical : 10
    },
    emailInput : {
        width : '85%',
        borderRadius : 32,
        backgroundColor : Colors.white,
        borderWidth : 1,
        borderColor : Colors.outline,
        flexDirection : 'row',
        
        alignItems : 'center' 
    },
    icon : {
        marginHorizontal : 15
    },
    hideShowPassIcon : {
        marginRight : 10
    }

})
