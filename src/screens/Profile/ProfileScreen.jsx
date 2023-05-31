import React, { useState } from "react";
import {  StyleSheet, ScrollView } from "react-native";
import { Avatar, Title, Caption, List, Surface } from "react-native-paper";
import { useTheme } from "react-native-paper";

export default function ProfileScreen({navigation}) {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionToggle = () => {
    setExpanded(!expanded);
  };

  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <Surface style={styles.container}>
      <Surface style={styles.userInfoSection}>
        <Surface style={styles.userInfo}>
          <Avatar.Image
            source={{
              uri: "https://i.pinimg.com/236x/6f/24/37/6f24371638c703bd61d3c67dc51762e1.jpg",
            }}
            size={80}
          />
          <Surface style={styles.userDetails}>
            <Title style={styles.title}>Militello Lucas</Title>
            <Caption style={styles.caption}>Apprenti</Caption>
          </Surface>
        </Surface>
      </Surface>

      <List.Section>
        <List.Accordion
          id="personal-info"
          title="Informations personnelles"
          left={(props) => (
            <List.Icon {...props} icon="account-circle-outline" />
          )}
          expanded={expanded}
          onPress={handleAccordionToggle}
        >
          <List.Item style={styles.items} title="Nom: Militello Lucas" />
          <List.Item title="Téléphone: 07 69 49 56 46" />
          <List.Item title="Email: militellolucas@icloud.com" />
          <List.Item title="Adresse: 123 rue du Paradis" />
          <List.Item title="Ville: Paris" />
        </List.Accordion>
      </List.Section>

      <Surface style={styles.section}>
        <Title style={styles.sectionTitle}>Cours</Title>
        <Surface style={styles.infoBoxWrapper}>
          <Surface style={styles.infoBox}>
            <Title style={styles.infoBoxTitle}>90</Title>
            <Caption style={styles.infoBoxCaption}>En cours</Caption>
          </Surface>
          <Surface style={[styles.infoBox, styles.infoBoxSeparator]}>
            <Title style={styles.infoBoxTitle}>150</Title>
            <Caption style={styles.infoBoxCaption}>Terminés</Caption>
          </Surface>
        </Surface>
      </Surface>
      <ScrollView>
        <List.Section>
          <List.AccordionGroup>
            <List.Accordion
              id="settings"
              title="Paramètres"
              left={(props) => <List.Icon {...props} icon="cog-outline" />}
            >
              <List.Item title="Home" onPress={() => navigation.navigate('HomeScreen')} />
              <List.Item title="Option 2" />
              <List.Item title="Option 3" />
              <List.Item title="Option 4" />
            </List.Accordion>
          </List.AccordionGroup>
        </List.Section>
      </ScrollView>
    </Surface>
  );
}

const getStyles = (theme) => {
  return StyleSheet.create({
    items: {
      backgroundColor: theme.colors.primary
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    userInfoSection: {
      paddingHorizontal: 30,
      paddingBottom: 25,
      borderBottomColor: "#e0e0e0",
      borderBottomWidth: 1,
    },
    userInfo: {
      flexDirection: "row",
      marginTop: 15,
    },
    userDetails: {
      marginLeft: 20,
      justifyContent: "center",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 5,
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: "500",
    },
    section: {
      paddingHorizontal: 30,
      paddingTop: 25,
      paddingBottom: 15,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    infoBoxWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: 100,
    },
    infoBox: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      borderTopWidth: 1,
      borderTopColor: "#e0e0e0",
    },
    infoBoxSeparator: {
      borderLeftWidth: 1,
      borderLeftColor: "#e0e0e0",
    },
    infoBoxTitle: {
      fontSize: 24,
      fontWeight: "bold",
    },
    infoBoxCaption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: "500",
    },
  });
  
}