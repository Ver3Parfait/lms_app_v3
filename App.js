import * as React from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { useTheme } from "react-native-paper";
import { View, Text, useColorScheme } from "react-native";

import { default as colorsLight } from "./colors_light.json";
import { default as colorsDark } from "./colors_dark.json";

function PaymentScreen() {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello</Text>
    </View>
  );
}

export default function App() {
  const colorScheme = useColorScheme();
  const paperTheme =
    colorScheme === "dark"
      ? { ...DefaultTheme, ...colorsDark }
      : { ...DefaultTheme, ...colorsLight };
  return (
    <PaperProvider theme={paperTheme}>
      <PaymentScreen />
    </PaperProvider>
  );
}
