import { FlatList, StyleSheet } from "react-native";
import { Surface, useTheme, TouchableRipple, Image } from "react-native-paper";
import HeaderPageComponent from "../../components/HeaderPage.component";
import { useState, useEffect } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import CertificationsServices from "../../api/services/certifications.services";

export default CertificationCoursesScreen = ({ navigation }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [certificationCoursesList, setCertificationCoursesList] = useState()

  const FetchCertificationCourses = async () => {
    try {
      let res = await CertificationsServices.CertificationCourses()
      let data = res.data.map(item => item)
      setCertificationCoursesList(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    FetchCertificationCourses();
  }, [])

  return (
    <Surface elevation={1} mode="flat" style={styles.container}>
      <HeaderPageComponent />
      <FlatList
        data={certificationCoursesList}
        renderItem={
          <TouchableRipple
            key={item.id.toString()}
            onPress={async () => {
              await AsyncStorage.removeItem('Course_id')
              await AsyncStorage.setItem('Course_id', item.id.toString())
              navigation.navigate("CourseScreen")
            }
            }
          >
            <Surface elevation={0} mode="flat" style={styles.container}>
              <Surface elevation={0} mode="flat" style={styles.Infos}>
                <Surface elevation={0} mode="flat" style={styles.InfosRow}>
                  <Surface elevation={0} mode="flat" style={styles.TitleContainer}>
                    <Text style={styles.Title}>{item.name}</Text>
                  </Surface>
                </Surface>

                {/*
                bloc image 
                <Surface elevation={0} mode="flat" style={styles.ImageContainer}>
                <Image style={styles.Image} source={{ uri: item.imageUrl }} />
              </Surface>

              bloc barre de progression
                <Surface style={styles.progressContainer} elevation={0} mode="flat">
                  <ProgressBar
                    progress={item.progress}
                    color={theme.colors.primary}
                    style={styles.progressBar}
                  />
                </Surface> */}
              </Surface>
            </Surface>
          </TouchableRipple>
        } />

    </Surface>

  );
};
const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      height: "100%",
      flexDirection: "column",
    },
    listContent: {
      paddingVertical: 10,
    },
    container: {
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 10,
      display: "flex",
      flexDirection: "row",
    },
    Title: {
      fontWeight: "bold",
      fontSize: 13.5,
    },
    TitleContainer: {
      flex: 1,
      marginTop: 10,
    },
    ImageContainer: {
      height: "100%",
      alignItems: "center",
      borderRadius: 0,
      justifyContent: "flex-start",
    },
    Image: {
      width: 60,
      height: 60,
      alignItems: "center",
      margin: 10,
      borderRadius: 0,
      padding: 10,
    },
    Infos: {
      textAlign: "center",
      flex: 1,
      paddingRight: 10,
    },
    InfosRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    IconContainer: {
      width: 20,
      height: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    description: {
      marginTop: 10,
    },
    progressContainer: {
      marginTop: 20,
      marginBottom: 10,
      width: "100%",
      borderRadius: 10,
      flexDirection: "column",
    },
    progressBar: {
      borderRadius: 5,
    },
    percentageText: {
      marginTop: 10,
      marginLeft: 5,
      textAlign: "left",
      paddingRight: 10,
    },
    check: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });
}

