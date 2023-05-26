import React, { useEffect } from 'react'
import { Image, View, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthServices from '../../api/services/auth.services';


const SplashScreen = ({ navigation }) => {

    const amILogged = async () => {
        try {
            let token = await AsyncStorage.getItem('token')
            if (token == null) {
                navigation.navigate('LoginScreen')
            } else if (token != "") {
                let res = await AuthServices.Me()
                if (res.status == 200) {
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

    useEffect(() => { amILogged() }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Image
                    resizeMode='contain'
                    style={styles.image}
                    source={require('../../../assets/logoRI7.png')}
                />
            </View >
        </SafeAreaView>
    )
}


export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'basic'
    },
    image: {
        width: 200,
        height: 100,
    }
})