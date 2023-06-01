import { StyleSheet } from "react-native";
import { Surface, useTheme } from "react-native-paper";
import CourseListComponent from '../../components/CourseList.component'
import HeaderPageComponent from "../../components/HeaderPage.component";

export default CertificationCoursesScreen = ({ navigation }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const data = [];

  for (let i = 0; i < 60; i++) {
    data.push({
      id: i + 1,
      name: "Mises à jour & Nouveaux Contenus en compagnie de Fabien Walle et Militello Lucas",
      description: "Militello Lucas",
      duration:'20 minutes',
      // imageUrl:
      //   "https://mimir.ri7.fr/uploads/certification/banniere-1200x628-6331a44540fa9.jpg",
      index: i + 1,
    });
  }

  return (
    <Surface elevation={1} mode="flat"  style={styles.container}>
      <HeaderPageComponent/>
      <CourseListComponent navigation={navigation} data={data}/>
    </Surface>

  );
};
const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
  });
}

