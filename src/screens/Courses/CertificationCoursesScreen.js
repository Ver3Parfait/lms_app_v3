import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Surface, useTheme } from "react-native-paper";
import CourseListComponent from '../../components/CourseList.component'
import HeaderPageComponent from "../../components/HeaderPage.component";
import CertificationsServices from "../../api/services/certifications.services";

export default CertificationCoursesScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  const theme = useTheme();
  const styles = getStyles(theme);

  useEffect(() => {
    const fetchData = async () => {
      const response = await CertificationsServices.CertificationCourses();
      setData(response.data);
    };

    fetchData();
  }, []);

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

