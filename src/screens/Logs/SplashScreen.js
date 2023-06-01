import React, { useEffect } from 'react'
import { Image, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthServices from '../../api/services/auth.services';
import { Surface, useTheme } from 'react-native-paper';

const SplashScreen = ({ navigation }) => {
    const themes = useTheme();
    const styles = getStyles(themes);
    const VerifyUser = async () => {
        try {
            let token = await AsyncStorage.getItem('token')
            if (!token) {
                navigation.navigate('LoginScreen')
            } else {
                let res = await AuthServices.Me()
                if (res.status == 200) {
                    await AsyncStorage.removeItem('token')
                    let response = await AuthServices.RefreshToken()
                    await AsyncStorage.setItem('token', response.data.token)
                    await AsyncStorage.setItem("id", res.data.id.toString());
                    navigation.navigate('BottomTabNavigator')
                } else {
                    await AsyncStorage.removeItem('token')
                    navigation.navigate('LoginScreen')
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { VerifyUser() }, [])

    return (
        <Surface style={styles.container}>
            <Image
                resizeMode='contain'
                style={styles.image}
                source={require('../../../assets/logoRI7.png')}
            />
        </Surface>
    )
}


export default SplashScreen

const getStyles = (themes) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: themes.colors.background
        },
        image: {
            width: 200,
            height: 100,
        }
    })
}