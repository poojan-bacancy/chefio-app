
//this  modal will be opened when filter button is pressed in search screen

import React, { useState } from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import Text from '../components/Text'
import Colors from '../constants/Colors'
import Dimensions from '../constants/Dimensions'
import Slider from '@react-native-community/slider';
import CategoryTile from '../components/CategoryTile'

const AddFilterModal = (props) => {

    //use to store value of cooking duratinon
    const [duration,setDuration] = useState(10); 

    //categories to display
    const categories = ['All','Food','Drink']

    //use to store which categories are selected for filtering 
    const [selctedCategories,setSelectedCategories] = useState(['All'])

    // funtion to set the category in selctedCategory and to remove category if present in selctedCategory
    const categoryPressHandler= (category) => {
        //find index of category
        const index = selctedCategories.findIndex( item => item === category)
        //copy it in new category
        const newCategoryList = selctedCategories
        if(index >= 0){
            delete newCategoryList[index]
            setSelectedCategories([
                ...newCategoryList
            ])
        }
        else{
            const updatedList =  newCategoryList.concat(category)
            setSelectedCategories([ ...updatedList ])
        }
    }

    return (
        <Modal
            animationType = "fade"
            transparent={true}
            visible={props.visible}
        >
            <View style={styles.modalScreen}>
                <View style={styles.modalBox}>
                    
                    <Text style={styles.modalTitle}> Add a Filter </Text>
                    
                    <Text style={styles.categoryText}> Category </Text>
                    <View style={styles.categoriesList}>
                        {/* style changed for item that are stored in state variable selectedCategory*/}
                        {categories.map( 
                            cat => (
                            <CategoryTile 
                                key={cat}
                                onPress={categoryPressHandler.bind(this,cat)}
                                buttonStyle={{
                                    ...styles.buttonStyle,
                                    backgroundColor : selctedCategories.find(item => item === cat ) ? Colors.primary : Colors.outline
                                }}
                                buttonTitleStyle={{
                                    ...styles.buttonTitleStyle,
                                    color : selctedCategories.find(item => item === cat ) ? Colors.white : Colors.secondaryText
                                }}
                                categoryName={cat}
                            />) 
                        )}
                    </View>

                    <View style={styles.cokkingDetailsContainer}>
                        <Text style={styles.cookingDurationText}>Cooking Duration</Text>
                        <Text style={styles.cookingDurationTimingText}>(in minutes)</Text>
                    </View>
                    
                    <View style={styles.sliderValueShowingContainer}>
                        <Text style={{
                            ...styles.sliderValueShowingText,
                            color : duration >= 10 ? Colors.primary : Colors.secondaryText
                        }}>{'<'} 10</Text>
                        <Text style={{
                            ...styles.sliderValueShowingText,
                            color : duration >= 30 ? Colors.primary : Colors.secondaryText
                        }}>30</Text>
                        <Text style={{
                            ...styles.sliderValueShowingText,
                            color : duration >= 60 ? Colors.primary : Colors.secondaryText
                        }}>{'>'} 60</Text>
                    </View>

                    {/* slider for selecting cooking duration */}
                    <Slider
                        value={duration}
                        onValueChange={(term) => setDuration(term)}
                        style={styles.slider}
                        thumbTintColor={Colors.primary}
                        minimumValue={10}
                        maximumValue={60}
                        minimumTrackTintColor= {Colors.primary}
                        maximumTrackTintColor= {Colors.secondaryText}
                    />
                    
                    <View style={styles.buttonsContainer}>
                        <CustomButton style={styles.cancelButton} onPress={props.closeModal} >
                            <Text style={styles.cancelButtonTitle} >Cancel</Text>
                        </CustomButton>

                        <CustomButton style={styles.doneButton} onPress={props.doneModal} >
                            <Text style={styles.doneButtonTitle}>Done</Text>
                        </CustomButton>
                    </View>

                </View>
            </View>
        </Modal>
    )
}

export default AddFilterModal

const styles = StyleSheet.create({
    modalScreen : {
        flex : 1 , 
        justifyContent : 'flex-end' , 
        alignItems : 'center' , 
        backgroundColor : '#000000aa'
    },
    modalBox : { 
        backgroundColor : Colors.white , 
        width : '100%' , 
        borderTopLeftRadius : 30 , 
        borderTopRightRadius : 30,
        paddingHorizontal : 15,
        paddingBottom : 30
    },
    modalTitle : {
        fontWeight : '700',
        fontSize : 17,
        lineHeight : 27,
        textAlign : 'center',
        color : Colors.mainText,
        marginVertical : 25
    },
    categoryText : {
        fontWeight : '700',
        fontSize : 17,
        lineHeight : 27,
        color : Colors.mainText,
        marginLeft : 10
    },
    cokkingDetailsContainer : { 
        flexDirection : 'row' , 
        alignItems : 'center' , 
        marginVertical : 10 , 
        marginLeft : 15
    },
    buttonsContainer : {
        marginVertical : 20,
        flexDirection : 'row',
        flex : 1,
        alignItems : 'center',
        justifyContent :'space-around',
    },
    cancelButton : {
        flex : 1,
        marginHorizontal : 10,
        backgroundColor : Colors.outline,
        height : Dimensions.height * 50
    },
    cancelButtonTitle : {
        color : Colors.mainText,
        fontSize : 17,
        lineHeight : 27,
        fontWeight : '700',
        letterSpacing : 0.5
    },
    doneButton : {
        flex : 1,
        marginHorizontal : 10,
        height : Dimensions.height * 50
    },
    doneButtonTitle: {  
        color : Colors.white,
        fontSize : 17,
        lineHeight : 27,
        fontWeight : '700',
        letterSpacing : 0.5
    },
    cookingDurationText : {
        color : Colors.mainText,
        fontSize : 17,
        lineHeight : 27,
        fontWeight : '700',
        letterSpacing : 0.5,
        
    },
    cookingDurationTimingText : {
        color : Colors.secondaryText,
        fontSize : 17,
        lineHeight : 27,
        fontWeight : '500',
        letterSpacing : 0.5
    },
    slider : {
        marginBottom : 50,
        height : Dimensions.height * 30,
        width : '100%',
        alignItems : 'center',
        justifyContent : 'center'   
    },
    sliderValueShowingContainer : { 
        marginTop : 5,
        flexDirection : 'row' , 
        justifyContent : 'space-between' , 
        alignItems : 'center' , 
        marginHorizontal : 15
    },
    sliderValueShowingText : {
        fontWeight : '700',
        fontSize : 15,
        lineHeight : 18.15
    },
    categoriesList : {
        flexDirection : 'row',
        flexWrap : 'wrap',
        marginBottom : 10
    },
    buttonStyle : {
        height : Dimensions.height * 55,
        margin : 10,
        paddingHorizontal : 20
    },
    buttonTitleStyle: {
        fontWeight : '500',
        fontSize : 15,
        lineHeight : 18.5,
        letterSpacing : 0.5,
    }
})
