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

export default function HomeScreen({ navigation }) {
  const theme = useTheme();
  const styles = getStyles(theme);
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
    <Surface elevation={1} mode="flat"  style={styles.container}>
      <HeaderPageComponent Invisble/>
      <Surface elevation={0} mode="flat"  style={styles.scrollSurface}>
        <Surface elevation={0} mode="flat"  style={styles.header}>
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

        <Surface elevation={0} mode="flat"  style={styles.searchContainer}>
          <TextInput
            mode="outlined"
            label="Rechercher"
            style={styles.searchInput}
            right={<TextInput.Icon name="search" />}
          />
        </Surface>

        <Surface elevation={0} mode="flat"  style={styles.switchContainer}>
          <Surface elevation={0} mode="flat"  style={styles.switchButtonGroup}>
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

        <Surface elevation={0} mode="flat"  style={styles.sectionContainer}>
          {switchValue === 1 ? (
            <Text style={styles.sectionTitle}>Mes Favoris</Text>
          ) : (
            <Text style={styles.sectionTitle}>Continuer</Text>
          )}
          <TouchableRipple
            onPress={() => navigation.navigate("Formations")}
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

const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      height: "100%",
    },
    scrollSurface: {
      height:'90%',
      padding: 20,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    greeting: {
      fontSize: 25,
      fontWeight: "bold",
      color:theme.colors.primary,
    },
    username: {
      fontSize: 20,
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
      color: theme.colors.secondary,
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

  });
};
