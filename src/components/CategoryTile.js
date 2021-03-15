import React from 'react'
import { StyleSheet, View } from 'react-native'
import Text from '../components/Text'
import Dimensions from '../constants/Dimensions'
import CustomButton from '../components/CustomButton'

const CategoryTile = (props) => {
    return(
        <CustomButton style={props.buttonStyle} onPress={props.onPress}>
            <Text style={props.buttonTitleStyle}>{props.categoryName}</Text>
        </CustomButton>
    );
}

export default CategoryTile

const styles = StyleSheet.create({

})
