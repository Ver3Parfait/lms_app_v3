import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  List,
  TouchableRipple,
  Surface,
} from "react-native-paper";
import { useTheme } from "react-native-paper";
import HeaderPageComponent from "../../components/HeaderPage.component";

export default function ProfileScreen({ navigation }) {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <Surface elevation={1} mode="flat" style={styles.container}>
      <HeaderPageComponent Icon="microsoft-xbox-controller-menu" Drawer />
      <Surface elevation={1} mode="flat" style={styles.contentContainer}>
        <Surface elevation={0} mode="flat" style={styles.contentContainer}>
          <Surface elevation={0} mode="flat" style={styles.userInfoSection}>
            <Surface elevation={0} mode="flat" style={styles.userInfo}>
              <Avatar.Image
                source={{
                  uri: "https://i.pinimg.com/236x/6f/24/37/6f24371638c703bd61d3c67dc51762e1.jpg",
                }}
                size={80}
              />
              <Surface elevation={0} mode="flat" style={styles.userDetails}>
                <Title style={styles.title}>Militello Lucas</Title>
                <Caption style={styles.caption}>Apprenti</Caption>
              </Surface>
            </Surface>
          </Surface>

          <Surface elevation={1} style={styles.section}>
            <Title style={styles.sectionTitle}>Paramètres</Title>
            <List.Section>
              <TouchableRipple
                onPress={() => console.log("Modifier le profil")}
              >
                <List.Item
                  title="Modifier le profil"
                  left={(props) => <List.Icon {...props} icon="account-edit" />}
                />
              </TouchableRipple>
              <TouchableRipple onPress={() => console.log("Notifications")}>
                <List.Item
                  title="Notifications"
                  left={(props) => <List.Icon {...props} icon="bell-outline" />}
                />
              </TouchableRipple>
              <TouchableRipple onPress={() => console.log("Confidentialité")}>
                <List.Item
                  title="Confidentialité"
                  left={(props) => <List.Icon {...props} icon="lock-outline" />}
                />
              </TouchableRipple>
            </List.Section>
          </Surface>
        </Surface>
      </Surface>
    </Surface>
  );
}

const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      height: "100%",
      backgroundColor: theme.colors.background,
    },
    contentContainer: {
      height: "100%",
      padding: 20,
    },
    userInfoSection: {
      marginBottom: 25,
    },
    userInfo: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    userDetails: {
      marginLeft: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: "500",
    },
    section: {
      marginBottom: 20,
      backgroundColor: theme.colors.surface,
      borderRadius: 5,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      paddingHorizontal: 15,
      paddingTop: 15,
    },
  });
};
