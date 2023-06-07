import CertificationScreen from "../screens/Courses/CertificationsScreen";
import CertificationCoursesScreen from "../screens/Courses/CertificationCoursesScreen";
import CourseScreen from "../screens/Courses/CourseScreen";
import { createStackNavigator } from "@react-navigation/stack";

const CourseStack = createStackNavigator();

export default CoursesNavigator = () => {
  return (
    <CourseStack.Navigator
      initialRouteName="Formations"
      screenOptions={{ headerTitleAlign: "center", headerShown:false }}
    >
      <CourseStack.Screen
        name="Formations"
        component={CertificationScreen}
        options={{ title: "Formations" }}
      />
      <CourseStack.Screen
        name="Cours"
        component={CertificationCoursesScreen}
        options={{ title: "Détails de la formation" }}
      />
      <CourseStack.Screen
        name="Vidéo"
        component={CourseScreen}
        options={{ title: "Détail du cours" }}
      />
    </CourseStack.Navigator>
  );
};
