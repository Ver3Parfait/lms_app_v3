import { StyleSheet } from "react-native";
import { Surface } from "react-native-paper";
import { CourseList } from "../../components/CourseList.component";

export default CertificationCoursesScreen = ({ navigation }) => {
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
    <Surface style={styles.container}>
      <CourseList navigation={navigation} data={data}/>
    </Surface>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});

