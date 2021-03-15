import React , { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Text from '../../components/Text'
import Colors from '../../constants/Colors'
import Dimensions from '../../constants/Dimensions'
import IconBasedInput from '../../components/IconBasedInput'
import Feather from 'react-native-vector-icons/Feather'
import SelectionTabs from '../../components/SelectionTabs'
import RecipeCard from '../../components/RecipeCard'
import CategoryTile from '../../components/CategoryTile'

const HomeScreen = ({navigation}) => {

    const [whoIsSelected,setWhoIsSelected] = useState('left');

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
        <SafeAreaView style={styles.screen}>
            
            <ScrollView>
            
                <View style={{ backgroundColor : Colors.white , marginBottom : 10 }}>
                    <IconBasedInput
                        searchBar={true}
                        noIcon={true}
                        placeholder="Search"
                        iconComponent = {Feather}
                        iconName="search"
                        style={styles.input}
                        onFocus={() => navigation.navigate('Search')}
                    >
                        <Feather name="search" style={styles.icon} size={30} />
                    </IconBasedInput> 
                
                    <Text style={styles.categoryText}>Category</Text>
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
                </View>

                <View style={{backgroundColor : Colors.white  }}>
                    <SelectionTabs 
                        whoIsSelected={whoIsSelected}
                        leftTabName = "left"
                        onLeftPress= {() => setWhoIsSelected('left')}
                        onRightPress = {() => setWhoIsSelected('right')}
                        rightTabName = "right"
                    />

                    <View style={{flexDirection : 'row'}}>
                    <RecipeCard 
                        goToRecipe={() => navigation.navigate('RecipeDetail')} 
                        goToUserProfile={() => navigation.navigate('Profile')} 
                    />
                    <RecipeCard 
                        goToRecipe={() => navigation.navigate('RecipeDetail')} 
                        goToUserProfile={() => navigation.navigate('Profile')} 
                    />
                    </View>
                </View>
                
            </ScrollView>   
            
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen: {
        flex  : 1
    },
    input : {
        flex : 0,
        flexDirection : 'row-reverse',
        marginTop : 20,
        marginHorizontal : 20,
        backgroundColor : Colors.form,
        height : Dimensions.height * 55 
    },
    icon :{
        marginHorizontal : 10
    },
    categoryText: {
        fontWeight : '700',
        fontSize : 17,
        lineHeight : 27,
        letterSpacing : 0.5,
        marginLeft : 25,
        marginVertical : 8 
    },
    categoriesList : {
        flexDirection : 'row',
        flexWrap : 'wrap',
        marginBottom : 10,
        marginLeft :  15
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
