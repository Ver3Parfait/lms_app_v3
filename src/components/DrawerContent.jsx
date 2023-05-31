import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Title, Caption, Drawer, Text, Switch } from "react-native-paper";
import { DrawerContentScrollView } from "@react-navigation/drawer";

export default function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: 'https://i.pinimg.com/236x/6f/24/37/6f24371638c703bd61d3c67dc51762e1.jpg'
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>Militello Lucas</Title>
                <Caption style={styles.caption}>Apprenti</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Text style={[styles.paragraph, styles.caption]}>90</Text>
                <Caption style={styles.caption}>En cours</Caption>
              </View>
              <View style={styles.section}>
                <Text style={[styles.paragraph, styles.caption]}>150</Text>
                <Caption style={styles.caption}>Terminer</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <Drawer.Item
              icon="home-outline"
              label="Acceuil"
              onPress={() => { props.navigation.navigate('Home')}} />
            <Drawer.Item
              icon="account-outline"
              label="Compte"
              onPress={() => {props.navigation.navigate('Home') }} />
            <Drawer.Item
              icon="heart-outline"
              label="Favoris"
              onPress={() => {props.navigation.navigate('Home') }} />
            <Drawer.Item
              icon="cog-outline"
              label="Paramètres"
              onPress={() => { props.navigation.navigate('Home')}} />
            <Drawer.Item
              icon="lifebuoy"
              label="Support"
              onPress={() => { props.navigation.navigate('Home')}} />
          </Drawer.Section>

          <Drawer.Section title="Préférences">
            <Drawer.Item
              label="Thème Sombre"
              right={() => (
                <Switch
                  value={isDarkTheme}
                  onValueChange={toggleTheme}
                />
              )}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Item
          icon="arrow-left"
          label="Déconnexion"
          onPress={() => { }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
});
