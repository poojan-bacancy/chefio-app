import React, { useState } from 'react'
import { StyleSheet, View , Image, TouchableOpacity } from 'react-native'
import Text from '../components/Text'
import Colors from '../constants/Colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CustomButton from '../components/CustomButton'

const RecipeCard = (props) => {
    const [isFav,setIsFav] = useState(false);
    return (
        <TouchableOpacity style={styles.recipeCard} onPress={props.goToRecipe}>
            <TouchableOpacity style={styles.userNameImageContainer} onPress={props.goToUserProfile} >
                <Image source={require('../../assets/images/userImage.png')} />
                <Text style={styles.userName}> Calum Lewis </Text>
            </TouchableOpacity>
            <View style={styles.recipeImage}>
                <Image source={require('../../assets/images/recipeImage.png')} />
            </View>
            <CustomButton style={styles.likeButton} onPress={() => setIsFav(prevState => !prevState)} >
                <FontAwesome name={ isFav ? "heart" : "heart-o"} color={Colors.white} size={15} />
            </CustomButton>
            <Text style={styles.recipeName}>Pancake</Text>
            <View style={styles.recipeDetailContainer}>
                <Text style={styles.recipeDetailText}> Food </Text>
                <Text style={styles.recipeDetailText}> {'>'} 60 mins</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RecipeCard

const styles = StyleSheet.create({
    recipeCard : {
        marginTop : 10,
        marginHorizontal : 5,
        padding : 5,
        borderRadius : 20
    },
    userNameImageContainer : {
        marginVertical : 10,
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center'
    },
    userName : {
        marginLeft : 10,
        fontWeight : '500',
        fontSize : 12,
        lineHeight : 14.52,
        letterSpacing : 0.5
    },
    recipeName : {
        marginLeft : 10,
        marginTop : 15,
        marginBottom : 5,
        fontWeight : '700',
        fontSize : 17,
        lineHeight : 27,
        letterSpacing : 0.5
    },
    recipeDetailContainer : {
        marginLeft : 10,
        marginVertical : 5,
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center',
    },
    recipeDetailText : {
        fontWeight : '500',
        fontSize : 12,
        lineHeight : 14.52,
        letterSpacing : 0.5,
        color : Colors.secondaryText
    },
    likeButton : {
        backgroundColor : 'rgba(255, 255, 255, 0.2)',
        position : 'absolute',
        borderRadius : 8,
        left : '82%',
        top :  '23%'
    }
})
