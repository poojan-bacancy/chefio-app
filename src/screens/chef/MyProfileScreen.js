import React , { useState } from 'react'
import { StyleSheet, SafeAreaView,TouchableOpacity , Image , View, ScrollView } from 'react-native'
import Text from '../../components/Text'
import Entypo from 'react-native-vector-icons/Entypo'
import Colors from '../../constants/Colors'
import SelectionTabs from '../../components/SelectionTabs'


const MyProfileScreen = () => {
    
    const [whoIsSelected,setWhoIsSelected] = useState('left')

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView>

               <View style={{ backgroundColor : Colors.white }}>
                    <View style={{ justifyContent : 'center' , alignItems : 'flex-end', margin : 20}}>
                        <TouchableOpacity>
                        <Entypo name="share" size={30} />   
                        </TouchableOpacity>
                    </View>

                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require('../../../assets/images/Avatar.png')} />
                    </View>

                    <Text style={styles.userName}>
                        Choirul Syafril
                    </Text>

                    
               </View>

               <View style={{ backgroundColor : Colors.white , marginTop : 10}}>
                    <SelectionTabs 
                        whoIsSelected={whoIsSelected}
                        leftTabName = "Recipes"
                        onLeftPress= {() => setWhoIsSelected('left')}
                        onRightPress = {() => setWhoIsSelected('right')}
                        rightTabName = "Liked"
                    />
               </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default MyProfileScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1
    },
    imageContainer : {
        justifyContent : 'center',
        alignItems : 'center',
        
    },
    image : {
        height : 100,
        width  : 100
    },
    userName : {
        fontWeight : '700',
        fontSize : 17,
        lineHeight : 27,
        textAlign : 'center',
        letterSpacing : 0.5,
        marginVertical : 20
    }
})
