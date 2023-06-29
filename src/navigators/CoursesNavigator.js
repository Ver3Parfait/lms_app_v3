import CertificationScreen from "../screens/Courses/CertificationsScreen";
import CertificationCoursesScreen from "../screens/Courses/CertificationCoursesScreen";
import CourseScreen from "../screens/Courses/CourseScreen";
import { createStackNavigator } from "@react-navigation/stack";

const CourseStack = createStackNavigator();

export default CoursesNavigator = () => {
  return (
    <CourseStack.Navigator
      initialRouteName="CertificationsScreen"
      screenOptions={{ headerShown:false }}
    >
      <CourseStack.Screen
        name="CertificationsScreen"
        component={CertificationScreen}
        options={{ title: "Formations" }}
      />
      <CourseStack.Screen
        name="CertificationCoursesScreen"
        component={CertificationCoursesScreen}
        options={{ title: "Détails de la formation" }}
      />
      <CourseStack.Screen
        name="CourseScreen"
        component={CourseScreen}
        options={{ title: "Détail du cours" }}
      />
    </CourseStack.Navigator>
  );
};
