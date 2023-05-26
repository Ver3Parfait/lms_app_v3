import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'


const DrawerContent = ({ navigation }) => {
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Button
          icon="logout"
          style={styles.button}
          onPress={() => {
            AsyncStorage.removeItem('token')
            navigation.navigate('LoginScreen')
          }}
          title='déconnexion'
        >Déconnexion</Button>
      </View>
    </SafeAreaView>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  button: {
    width: '100%',
    height: '100%'
  }
})