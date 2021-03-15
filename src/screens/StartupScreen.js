import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { authenticate , setDidTryAl } from '../store/actions/authActions'
import { useDispatch } from 'react-redux'
import Colors from '../constants/Colors'

const StartupScreen = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        const tryLogin = async() => {
            const userData = await AsyncStorage.getItem('userData')
            if(!userData){
                dispatch(setDidTryAl());
                return;
            }
            const trandformedData = JSON.parse(userData);
            const { token , userId } = trandformedData;
            dispatch(authenticate(token,userId));
        };
        tryLogin();
    },[dispatch])

    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color={Colors.primary} />
        </View>
    )
}

export default StartupScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})
