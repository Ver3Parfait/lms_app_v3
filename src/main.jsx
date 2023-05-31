import {
    MD3LightTheme as DefaultTheme,
    PaperProvider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { default as colorsLight } from "../colors_light.json";
import { default as colorsDark } from "../colors_dark.json";
import BottomTabNavigator from "./navigators/BottomTabNavigator";
import { useSelector } from "react-redux";
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
            <NavigationContainer>
                <BottomTabNavigator />
                {/* <MainNavigator /> */}
            </NavigationContainer>
        </PaperProvider>
    )
}

export default Main
