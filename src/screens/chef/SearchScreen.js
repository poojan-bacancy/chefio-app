import React , { useEffect, useRef, useState } from 'react'
import { StyleSheet, Keyboard, TouchableWithoutFeedback ,  KeyboardAvoidingView , View, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import IconBasedInput from '../../components/IconBasedInput'
import Colors from '../../constants/Colors'
import Dimensions from '../../constants/Dimensions'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Text from '../../components/Text'
import CustomButton from '../../components/CustomButton'
import Feather from 'react-native-vector-icons/Feather'
import AddFilterModal from '../../modals/AddFilterModal'

//component for rendering suggestion tile
const SuggestionTile = (props) => {
    return(
        <CustomButton style={styles.suggestionTile}>
            <Text style={styles.suggestionTileTitle}>{props.suggestionName}</Text>
        </CustomButton>
    );
}

const SearchScreen = ({navigation}) => {
    
    const inputRef = useRef()

    // use to auto focus search bar
    useEffect(() => {
        inputRef.current.focus()
    },[])

    // use to store search term
    const [searchTerm,setSearchTerm] = useState('')
    // use to open and close modal
    const [isModalOpen,setIsModalOpen] = useState(false)

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <KeyboardAvoidingView style={styles.screen} >
            
                <View style={styles.searchBarAndFilterButtonContainer}>
                    
                    {/* navigate back o home screen */}
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons
                            name="less-than"
                            size={30}
                            style= {{ marginHorizontal : 10 }}
                        />
                    </TouchableOpacity>
                    
                    <IconBasedInput
                        value={searchTerm}
                        onChangeText = {(term) => setSearchTerm(term)}
                        reference={inputRef}
                        searchBar={true}
                        iconComponent = {Feather}
                        iconName="search"
                        placeholder="Search"
                        iconName="search"
                        style={styles.input}
                        onFocus={() => navigation.navigate('Search')}
                    >
                        <TouchableOpacity onPress={() => setSearchTerm(null)} >
                            <Entypo name="circle-with-cross" size={20} style={styles.icon} />
                        </TouchableOpacity>
                    </IconBasedInput> 
                
                    {/* use to open modal */}
                    <TouchableOpacity onPress={() => setIsModalOpen(true)} >
                        <Octicons     
                            name="settings"
                            size={30}
                            style={{ marginLeft : 15, marginRight : 20 }}
                        />
                    </TouchableOpacity>
                
                </View>

                <View style={styles.pastSearchesContainer}>

                </View>

                {/* container for suggstions */}
                <View style={styles.suggestionsContainer}>
                    <Text style={styles.suggestionTitle}> Search suggestions </Text>
                    <View style={styles.suggestionsList}>
                        <SuggestionTile suggestionName="sushi" />
                        <SuggestionTile suggestionName="sandwich" />
                        <SuggestionTile suggestionName="seafood" />
                        <SuggestionTile suggestionName="fried rice" />
                    </View>
                </View>

                <AddFilterModal 
                    visible={isModalOpen}
                    closeModal={ () => setIsModalOpen(false)}
                    doneModal = { () => setIsModalOpen(false) }
                />
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1
    },
    searchBarAndFilterButtonContainer : { 
        backgroundColor : Colors.white , 
        flexDirection : 'row',
        alignItems : 'center',
        paddingVertical : 15
    },
    input : {
        flex : 1,
        backgroundColor : Colors.form,
        height : Dimensions.height * 55 
    },
    pastSearchesContainer : {
        marginVertical : 10,
        backgroundColor : Colors.white,
        padding : 10
    },
    suggestionsContainer : {
        marginVertical : 10,
        backgroundColor : Colors.white,
        padding : 20 
    },
    suggestionTitle : {
        fontWeight : '700',
        fontSize : 17,
        lineHeight : 27,
        letterSpacing : 0.5,
        marginVertical : 10
    }, 
    icon : {
        marginRight : 10
    },  
    suggestionsList : {
        flexDirection : 'row',
        flexWrap : 'wrap'
    },
    suggestionTile : {
        height : Dimensions.height * 55,
        margin : 10,
        backgroundColor : Colors.form,
        borderColor : Colors.outline,
        borderWidth : 1,
        padding : 12
    },
    suggestionTileTitle: {
        fontWeight : '500',
        fontSize : 15,
        lineHeight : 18.5,
        color : '#3E5481', 
        letterSpacing : 0.5,
    }
})
