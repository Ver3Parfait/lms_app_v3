import ProfileScreen from "../screens/Profile/ProfileScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

const ProfileNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerTitleAlign: "center" }}
      useLegacyImplementation={true}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default ProfileNavigator;