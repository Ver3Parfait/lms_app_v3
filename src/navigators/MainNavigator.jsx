import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNavigator from './BottomTabNavigator'
import LoginScreen from '../screens/Logs/LoginScreen'
import SplashScreen from '../screens/Logs/SplashScreen'

const MainStack = createStackNavigator()

const MainNavigator = () => {
    return (
        <MainStack.Navigator
            initialRouteName='LoginScreen'
            screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <MainStack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ title: "Ecran de démarrage" }} />
            <MainStack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ title: "Se connecter" }}
            />
            <MainStack.Screen
                name="BottomTabNavigator"
                component={BottomTabNavigator}
                options={{ title: "Accueil" }}
            />
        </MainStack.Navigator>
    )
}

export default MainNavigator