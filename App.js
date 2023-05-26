import * as React from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { default as colorsLight } from "./colors_light.json";
import { default as colorsDark } from "./colors_dark.json";
import MainNavigator from "./src/navigators/MainNavigator";

export default function App() {
  const colorScheme = useColorScheme();
  const paperTheme =
    colorScheme === "dark"
      ? { ...DefaultTheme, ...colorsDark }
      : { ...DefaultTheme, ...colorsLight };
  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>

    </PaperProvider>
  );
}
