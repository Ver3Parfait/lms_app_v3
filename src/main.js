import {
    MD3LightTheme as DefaultTheme,
    PaperProvider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { default as colorsLight } from "../colors_light.json";
import { default as colorsDark } from "../colors_dark.json";
import { useSelector } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/Logs/LoginScreen";
// import BottomTabNavigator from "./navigators/BottomTabNavigator";
// import MainNavigator from "./navigators/MainNavigator";

const Main = () => {
    const colorScheme = useColorScheme();
    const {theme} = useSelector((state) => state.theme)

    const paperTheme =
        colorScheme === theme
            ? { ...DefaultTheme, ...colorsDark }
            : { ...DefaultTheme, ...colorsLight };
    return (
        <PaperProvider theme={paperTheme}>
            <SafeAreaProvider>
            <NavigationContainer>
                <LoginScreen/>
                {/* <MainNavigator /> */}
            </NavigationContainer>
            </SafeAreaProvider>
        </PaperProvider>
    )
}

export default Main
