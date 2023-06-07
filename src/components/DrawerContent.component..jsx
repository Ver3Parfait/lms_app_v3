import {useEffect} from "react";
import { StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  Switch,
  Surface,
  useTheme,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/slices/themeSlice";
import { setInitialTheme } from "../store/slices/themeSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default DrawerContent = (props) => {
  const insets = useSafeAreaInsets()
  const themes = useTheme();
  const styles = getStyles(themes, insets);
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const changeTheme = () => {
    dispatch(toggleTheme()); 
  };

  useEffect(() => {
    const loadInitialTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem("theme");
        if (storedTheme !== null) {
          dispatch(setInitialTheme(storedTheme));
        }
      } catch (error) {
        console.log("Erreur lors du chargement du thème :", error);
      }
    };

    loadInitialTheme();
  }, [dispatch]);

  const saveTheme = async (selectedTheme) => {
    try {
      await AsyncStorage.setItem("theme", selectedTheme);
    } catch (error) {
      console.log("Erreur lors de l'enregistrement du thème :", error);
    }
  };

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(toggleTheme());
    saveTheme(newTheme);
  };


  return (
    <Surface
      elevation={1}
      mode="flat"
      style={styles.container}
    >
      <Drawer.Section style={styles.drawerContent}>
        <Surface elevation={0} mode="flat" style={styles.userInfoSection}>
          <Surface
            elevation={0}
            mode="flat"
            style={{ flexDirection: "row", marginTop: 15 }}
          >
            <Avatar.Image
              source={{
                uri: "https://i.pinimg.com/236x/6f/24/37/6f24371638c703bd61d3c67dc51762e1.jpg",
              }}
              size={50}
            />
            <Surface
              elevation={0}
              mode="flat"
              style={{ marginLeft: 15, flexDirection: "column" }}
            >
              <Title style={styles.title}>Militello Lucas</Title>
              <Caption style={styles.caption}>Apprenti</Caption>
            </Surface>
          </Surface>

          <Surface elevation={0} mode="flat" style={styles.row}>
            <Surface elevation={0} mode="flat" style={styles.section}>
              <Text style={[styles.paragraph, styles.caption]}>90</Text>
              <Caption style={styles.caption}>Favoris</Caption>
            </Surface>
            <Surface elevation={0} mode="flat" style={styles.section}>
              <Text style={[styles.paragraph, styles.caption]}>4</Text>
              <Caption style={styles.caption}>Formations</Caption>
            </Surface>
          </Surface>
        </Surface>

        <Drawer.Section style={styles.drawerSection}>
          <Drawer.Item
            icon="home-outline"
            label="Acceuil"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <Drawer.Item
            icon="account-outline"
            label="Compte"
            onPress={() => {
              props.navigation.navigate("ProfileScreen");
            }}
          />
          <Drawer.Item
            icon="heart-outline"
            label="Favoris"
            onPress={() => {
              props.navigation.navigate("HomeScreen");
            }}
          />
          <Drawer.Item
            icon="cog-outline"
            label="Paramètres"
            onPress={() => {
              props.navigation.navigate("ProfileScreen");
            }}
          />
        </Drawer.Section>

        <Drawer.Section showDivider={false} title="Préférences">
          <Drawer.Item
            label="Thème Sombre"
            right={() => (
              <Switch value={theme === "light"} onValueChange={handleThemeChange} />
            )}
          />
        </Drawer.Section>
      </Drawer.Section>

      <Drawer.Section showDivider={false}>
        <Drawer.Item
          icon="arrow-left"
          label="Déconnexion"
          onPress={() => {
            AsyncStorage.removeItem("token");
            props.navigation.navigate("LoginScreen");
          }}
        />
      </Drawer.Section>
    </Surface>
  );
};

const getStyles = (themes, insets) => {
  return StyleSheet.create({
    container: {
      height: "100%",
      paddingTop:insets.top ,
      justifyContent: "space-between",
      backgroundColor: themes.colors.background,
    },
    drawerContent: {},
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: "bold",
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around"
    },
    section: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: 15,
    },
    paragraph: {
      fontWeight: "bold",
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
      borderBottomWidth: 0,
    },
  });
};
