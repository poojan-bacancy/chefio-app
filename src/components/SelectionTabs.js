import React from 'react'
import { StyleSheet, View ,TouchableOpacity } from 'react-native'
import Text from './Text'
import Colors from '../constants/Colors'

const SelectionTabs = ({leftTabName,rightTabName,whoIsSelected,onLeftPress,onRightPress}) => {
    return (
        <View style={styles.leftRightTab}>
            <TouchableOpacity 
                style={{
                    ...styles.tab,
                    borderBottomColor : whoIsSelected === 'left' ? Colors.primary : Colors.outline
                    }} onPress={onLeftPress} 
            >
                <Text style={{
                    ...styles.textInTabs,
                    color : whoIsSelected === 'left' ? Colors.mainText : Colors.secondaryText
                }}>{leftTabName}</Text>
            </TouchableOpacity>
    
            <TouchableOpacity 
                style={{
                    ...styles.tab,
                    borderBottomColor : whoIsSelected === 'right' ? Colors.primary : Colors.outline
                }} 
                onPress={onRightPress} 
            >
                <Text style={{
                    ...styles.textInTabs,
                    color : whoIsSelected === 'right' ? Colors.mainText : Colors.secondaryText
                }}>{rightTabName}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SelectionTabs

const styles = StyleSheet.create({
    leftRightTab : {
        flexDirection : 'row',
        backgroundColor : Colors.white
    },
    tab : {
        flex : 1,
        padding : 10,
        justifyContent: 'center',
        alignItems : 'center',
        borderBottomWidth : 2
    },
    textInTabs : {
        fontWeight : '600',
        fontSize : 15,
        lineHeight : 18.5,

    }
})
