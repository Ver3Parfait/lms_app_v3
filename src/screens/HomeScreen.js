import { useState } from "react";
import { StyleSheet } from "react-native";
import {
  Text,
  TextInput,
  Avatar,
  Button,
  Surface,
  TouchableRipple,
  useTheme,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CertificationCardComponent from "../components/CertificationCard.component";
import HeaderPageComponent from "../components/HeaderPage.component";

import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function HomeScreen({ navigation }) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const styles = getStyles(theme, insets);
  const [switchValue, setSwitchValue] = useState(1);
  const courses = [];

  for (let i = 0; i < 7; i++) {
    courses.push({
      id: i + 1,
      name: "Introduction à React Native",
      description: "Maonni Pascal",
      imageUrl:
        "https://mimir.ri7.fr/uploads/certification/banniere-1200x628-6331a44540fa9.jpg",
    });
  }
  const latestCourses = [];

  for (let i = 0; i < 7; i++) {
    latestCourses.push({
      id: i + 1,
      name: "Cours avancer de React Native Hardcore",
      description: "Fabien Walle",
      imageUrl:
        "https://images.ctfassets.net/aq13lwl6616q/2gqVi4hhjq9vgvdh63UoKZ/c763c6f7e98a80eb2800bbe5eb9d690d/react_native_zero_to_mastery.png",
    });
  }

  const handleSwitchChange = (value) => {
    setSwitchValue(value);
  };

  return (
    <Surface style={styles.container}>
      <HeaderPageComponent />
      <Surface style={styles.scrollSurface}>
        <Surface style={styles.header}>
          <Text style={styles.greeting}>
            Bonjour <Text style={styles.username}>Militello Lucas</Text>
          </Text>
          <TouchableRipple
            onPress={() => navigation.navigate("ProfileNavigator")}
          >
            <Avatar.Image
              source={{
                uri: "https://i.pinimg.com/236x/6f/24/37/6f24371638c703bd61d3c67dc51762e1.jpg",
              }}
              size={40}
              style={styles.avatar}
            />
          </TouchableRipple>
        </Surface>

        <Surface style={styles.searchContainer}>
          <TextInput
            mode="outlined"
            label="Rechercher"
            style={styles.searchInput}
            right={<TextInput.Icon name="search" />}
          />
        </Surface>

        <Surface style={styles.switchContainer}>
          <Surface style={styles.switchButtonGroup}>
            <Button
              mode={switchValue === 1 ? "contained" : "outlined"}
              onPress={() => handleSwitchChange(1)}
              style={styles.switchButton}
            >
              <Icon name={"star"} size={20} />
            </Button>
            <Button
              mode={switchValue === 2 ? "contained" : "outlined"}
              onPress={() => handleSwitchChange(2)}
              style={styles.switchButton}
            >
              <Icon name={"new-box"} size={20} />
            </Button>
          </Surface>
        </Surface>

        <Surface style={styles.sectionContainer}>
          {switchValue === 1 ? (
            <Text style={styles.sectionTitle}>Les plus consultée</Text>
          ) : (
            <Text style={styles.sectionTitle}>Les derniers cours</Text>
          )}
          <TouchableRipple
            onPress={() => navigation.navigate("CourseNavigator")}
          >
            <Text style={styles.sectionLink}>Tout voir</Text>
          </TouchableRipple>
        </Surface>

        <CertificationCardComponent
          data={switchValue === 1 ? courses : latestCourses}
        />
      </Surface>
    </Surface>
  );
}
HomeScreen.navigationOptions = {
  title: "Accueil", // Titre de l'écran
};
const getStyles = (theme, insets) => {
  return StyleSheet.create({
    container: {
      height: "100%",
      paddingTop: insets.top
    },
    scrollSurface: {
      height: "100%",
      padding: 20,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    greeting: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#000",
    },
    username: {
      marginLeft: 10,
    },
    avatar: {
      marginRight: 10,
    },
    searchContainer: {
      flexDirection: "row",
      marginBottom: 20,
      alignItems: "center",
    },
    searchInput: {
      flex: 1,
      marginRight: 10,
    },
    switchContainer: {
      marginBottom: 20,
    },
    switchButtonGroup: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    switchButton: {
      flex: 1,
      alignSelf: "center",
      marginRight: 10,
    },
    sectionContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
    },
    sectionLink: {
      color: "#0d47a1",
    },
    CourseCard: {
      marginBottom: 10,
      borderRadius: 10,
    },
    CourseImage: {
      height: 200,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    CourseTitle: {
      fontWeight: "bold",
      marginBottom: 8,
      fontSize: 16,
    },
    CourseDescription: {
      color: "#555",
    },
  });
};