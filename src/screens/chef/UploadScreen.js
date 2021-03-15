import React , { useEffect, useState } from 'react'
import { StyleSheet,Image,TouchableWithoutFeedback,KeyboardAvoidingView,Keyboard, TouchableOpacity, View, ScrollView } from 'react-native'
import Text from '../../components/Text'
import Colors from '../../constants/Colors'
import Feather from 'react-native-vector-icons/Feather'
import Dimensions from '../../constants/Dimensions'
import IconBasedInput from '../../components/IconBasedInput'
import Slider from '@react-native-community/slider';
import CustomButton from '../../components/CustomButton'
import UploadSuccessModal from '../../modals/UploadSuccessModal'


const UploadScreen = ({navigation}) => {

    //use to open modal when upload is successful
    const [isModalOpen,setIsModalOpen] = useState(false)

    const [firstPart,setFirstPart] = useState();

    const [image,setImage] = useState()
    const [name,setName] = useState()
    const [description,setDescription] = useState()
    const [duration,setDuration] = useState()
    const [ingredients,setIngredients] = useState()

    // whenver screen is focused then visible part should be first 
    useEffect(() => {
        const screenWillFocus = navigation.addListener('focus', () => {
            setFirstPart(true)
        })

        return screenWillFocus;
    },[navigation])

    if(!firstPart){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
                <KeyboardAvoidingView style={styles.screen} >
                    <ScrollView>

                        <View style={styles.topContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                <Text style={styles.cancelText}>Cancel</Text>
                            </TouchableOpacity>
                            <Text style={styles.pageNumShowingText}>2/2</Text>
                        </View>

                        <Text style={{...styles.formFieldText , marginTop : 30}}>Ingredients</Text>

                        <View style={styles.buttonsContainer}>
                            <CustomButton 
                                style={{...styles.nextButton , backgroundColor : Colors.outline}} 
                                onPress={() => setFirstPart(true)}
                            >
                                <Text style={{...styles.nextButtonTitle,color : Colors.secondaryText}}>Back</Text>
                            </CustomButton>
                            <CustomButton style={styles.nextButton} onPress={() => setIsModalOpen(true)}>
                                <Text style={styles.nextButtonTitle}>Next</Text>
                            </CustomButton>
                        </View>


                        <UploadSuccessModal
                            visible={isModalOpen}
                            closeModal={() => setisModalOpen(false)}
                            backToHome = {() =>{
                                setIsModalOpen(false);
                                navigation.replace('Home')
                            }}
                        />

                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <KeyboardAvoidingView style={styles.screen} >
                <ScrollView>
                    <View style={styles.topContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                        <Text style={styles.pageNumShowingText}>1/2</Text>
                    </View>

                    <TouchableOpacity style={styles.imageContainer}>
                        {!image
                        ? <View style={styles.noImagePresentContainer} >
                            <Feather name="image" style={{marginTop : 20}} size={70} color={Colors.secondaryText} />
                            <Text style={styles.addCoverPhotoText}>Add Cover Photo</Text>
                            <Text style={styles.belowAddToCoverPhoto} >(up to 12 Mb)</Text>
                        </View>
                        : <Image source={{ uri : image }} />}
                    </TouchableOpacity>

                    <Text style={styles.formFieldText}>Food Name</Text>
                    <IconBasedInput
                        placeholder="Enter food Name"
                        value={name}
                        noIcon={true}
                        onFocus={() => {}}
                        searchBar={true}
                        style={styles.input}
                        onChangeText={(term) => setName(term)}
                    />

                    <Text style={styles.formFieldText}>Description</Text>
                    <IconBasedInput
                        placeholder="Tell a little about your food"
                        value={description}
                        noIcon={true}
                        onFocus={() => {}}
                        searchBar={true}
                        style={{...styles.input , height : Dimensions.height * 100 , borderRadius : 5}}
                        onChangeText={(term) => setName(term)}
                    />

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

                    <CustomButton style={styles.nextButton} onPress={() => setFirstPart(false)}>
                        <Text style={styles.nextButtonTitle}>Next</Text>
                    </CustomButton>

                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default UploadScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1
    },
    topContainer : {
        marginTop : 15,
        marginHorizontal : 20,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    cancelText : {
        fontWeight : '700',
        fontSize : 17,
        lineHeight : 27,
        letterSpacing : 0.5,
        color : Colors.secondary
    },
    pageNumShowingText : {
        fontWeight : '700',
        fontSize : 17,
        lineHeight : 27,
        letterSpacing : 0.5,
        color : Colors.mainText
    },
    imageContainer : {
        margin : 25,
        borderRadius : 16,   
        height : Dimensions.height * 200,
        borderColor : Colors.secondaryText,
        borderWidth : 2,
        borderStyle : "dashed"
    },
    noImagePresentContainer : {
        alignItems : 'center'
    },
    addCoverPhotoText : {
        marginTop : 20,
        fontWeight : '700',
        fontSize : 15,
        lineHeight : 25,
        letterSpacing : 0.5,
        color : Colors.mainText
    },
    belowAddToCoverPhoto : {
        marginTop : 10,
        fontWeight : '500',
        fontSize : 12,
        lineHeight : 14.52,
        letterSpacing : 0.5,
        color : Colors.secondaryText
    },
    formFieldText : {
        marginHorizontal : 20,
        marginTop : 10,
        fontWeight : '700',
        fontSize : 17,
        lineHeight : 27,
        letterSpacing : 0.5,
        color : Colors.mainText
    },
    input : {
        flex : 0,
        marginHorizontal  :20,
        paddingHorizontal : 10,
        backgroundColor : Colors.form,
        borderColor : "black",
        borderWidth :  1,
        alignItems : 'flex-start'
    },
    cokkingDetailsContainer : { 
        flexDirection : 'row' , 
        alignItems : 'center' , 
        marginVertical : 10 , 
        marginLeft : 20
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
        marginBottom : 40,
        marginLeft : 10,
        height : Dimensions.height * 30,
        width : '95%',
        alignItems : 'center',
        justifyContent : 'center'   
    },
    sliderValueShowingContainer : { 
        marginTop : 10,
        flexDirection : 'row' , 
        justifyContent : 'space-between' , 
        alignItems : 'center' , 
        marginHorizontal : 30
    },
    sliderValueShowingText : {
        fontWeight : '700',
        fontSize : 15,
        lineHeight : 18.15
    },
    nextButton : {
        height : Dimensions.height * 50,
        marginHorizontal : 20,
        marginBottom : 20,
        flex : 1
    },
    nextButtonTitle : {
        fontWeight : '700',
        fontSize : 17,
        lineHeight : 27,
        letterSpacing : 0.5,
        color : Colors.white,
    },
    buttonsContainer: {
        flexDirection : 'row',
        flex : 1,
        marginVertical  : 20
    }
})
