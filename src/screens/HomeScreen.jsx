import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Switch } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from "../store/slices/themeSlice";

const HomeScreen = () => {
  const dispatch = useDispatch()
  const ThemeValue = theme === "dark" 

  const {theme} = useSelector((state) => state.theme)
  const changeTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <View style={styles.home}>
      <Switch value={theme === "dark" } onChange={changeTheme} />
      <Text>{theme == "dark" ? "Enable Light Mode" : "Enable Dark Mode"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default HomeScreen

