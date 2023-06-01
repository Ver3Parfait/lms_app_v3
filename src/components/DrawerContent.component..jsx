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
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/slices/themeSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default  DrawerContent= (props) => {
  const themes = useTheme();
  const styles = getStyles(themes);
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const { theme } = useSelector((state) => state.theme);
  const changeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
      <Surface style={[styles.container, { paddingTop: insets.top }]}>
        <Drawer.Section style={styles.drawerContent}>
          <Surface style={styles.userInfoSection}>
            <Surface style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://i.pinimg.com/236x/6f/24/37/6f24371638c703bd61d3c67dc51762e1.jpg",
                }}
                size={50}
              />
              <Surface style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Militello Lucas</Title>
                <Caption style={styles.caption}>Apprenti</Caption>
              </Surface>
            </Surface>

            <Surface style={styles.row}>
              <Surface style={styles.section}>
                <Text style={[styles.paragraph, styles.caption]}>90</Text>
                <Caption style={styles.caption}>En cours</Caption>
              </Surface>
              <Surface style={styles.section}>
                <Text style={[styles.paragraph, styles.caption]}>150</Text>
                <Caption style={styles.caption}>Terminer</Caption>
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

          <Drawer.Section  showDivider={false} title="Préférences">
            <Drawer.Item
              label="Thème Sombre"
              right={() => (
                <Switch value={theme === "light"} onValueChange={changeTheme} />
              )}
            />
          </Drawer.Section>
        </Drawer.Section>

        <Drawer.Section  showDivider={false}>
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
}
const getStyles = (themes) => {
  return StyleSheet.create({
    container: {
      height:'100%',
      justifyContent:'space-between',
      backgroundColor: themes.colors.background
    },
    drawerContent: {
    },
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
borderBottomWidth:0
    },
  });
};