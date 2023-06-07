import { StyleSheet } from "react-native";
import { Surface, useTheme } from "react-native-paper";
import CourseListComponent from '../../components/CourseList.component'
import HeaderPageComponent from "../../components/HeaderPage.component";

export default CertificationCoursesScreen = ({ navigation }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const data = [];

  for (let i = 0; i < 30; i++) {
    let coursesType = ""
    let imageUrl = ""
    let randomNumber = Math.floor(Math.random() * 5) + 1
    if (randomNumber === 1) {
      coursesType = "HTML"
      imageUrl = "https://cdn-icons-png.flaticon.com/512/732/732212.png"
    }else if (randomNumber === 2){
      coursesType = "CSS"
      imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
    }else if (randomNumber === 3){
      coursesType = "JavaScript"
      imageUrl = "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    }else if (randomNumber === 4){
      coursesType = "PHP"
      imageUrl = "https://courenligne.com/uploads/cours/62f0e7309be16/995e849805a9dc70074081bad5f1542f.png"
    }else{
      coursesType = "React"
      imageUrl = "https://ionicframework.com/docs/icons/logo-react-icon.png"
    }
    const progress = parseFloat((Math.random() * 1).toFixed(1)) ;
    data.push({
      id: i + 1,
      progress: progress,
      name: coursesType,
      description: "Militello Lucas",
      duration:'20 minutes',
      imageUrl
      // index: i + 1,
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
      height:"100%",
      flexDirection: "column",
    },
  });
}

