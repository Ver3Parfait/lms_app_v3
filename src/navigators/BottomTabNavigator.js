import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";
import HomeScreen from "../screens/HomeScreen";
import ProfileNavigator from "./ProfileNavigator";
import CoursesNavigator from "./CoursesNavigator";

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator() {
  const theme = useTheme();
  theme.colors.secondaryContainer = theme.colors.surface;
  return (
    <Tab.Navigator
      activeColor={theme.colors.onBackground}
      inactiveColor={theme.colors.onBackground}
      barStyle={{ backgroundColor: theme.colors.background }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Accueil",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="CoursesNavigator"
        component={CoursesNavigator}
        options={{
          tabBarLabel: "Formations",
          tabBarIcon: ({ color, focused }) => (
            <Icon
            name={focused ? "school" : "school-outline"}
            size={24}
            color={color}
          />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarLabel: "Compte",   
          tabBarIcon: ({ color, focused }) => (
            <Icon
            name={focused ? "account" : "account-outline"}
            size={24}
            color={color}
          />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

