import { StyleSheet } from 'react-native'
import { useTheme, Text, Surface, IconButton } from 'react-native-paper'
import React from 'react'

export default HeaderPage = () => {
    const theme = useTheme();
    const styles = getStyles(theme)
  return (
    <Surface style={styles.container}>
        <IconButton
    icon="camera"
    iconColor={styles.icon}
    size={20}
    onPress={() => console.log('Pressed')}
  />
    </Surface>
  )
}

const getStyles = (theme) => {
    return StyleSheet.create({
        container: {
          backgroundColor:'red',
          height:50
        },
    })
}