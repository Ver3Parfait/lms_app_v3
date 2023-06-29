import { StyleSheet, FlatList } from "react-native";
import { Surface, useTheme, Card, Text } from "react-native-paper";
import HeaderPageComponent from "../../components/HeaderPage.component";
import CertificationsServices from "../../api/services/certifications.services";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CertificationsScreen = ({ navigation }) => {
  const [certificationsList, setCertificationsList] = useState()
  const theme = useTheme();
  const styles = getStyles(theme);

  const FetchCertifications = async () => {
    try {
      let res = await CertificationsServices.Certifications()
      let data = res.data.map(item => item)
      setCertificationsList(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    FetchCertifications();
  }, [])

  return (
    <Surface elevation={1} mode="flat" style={styles.container}>
      <HeaderPageComponent Invisble />
      <Surface style={styles.view}>
        <FlatList
          data={certificationsList}
          renderItem={({ item }) => (
            <Card
              key={item.id}
              style={styles.CourseCard}
              onPress={async () => {
                await AsyncStorage.removeItem('Certification_id')
                await AsyncStorage.setItem('Certification_id', item.id.toString())
                navigation.navigate('CertificationCoursesScreen')
              }
              }
              elevation={1}
            >
              <Card.Cover
                source={{ uri: `http://mimir.ri7.fr/uploads/${item.mainPhoto}` }}
                style={styles.CourseImage} />
              <Card.Content>
                <Text style={styles.CourseTitle}>{item.name}</Text>
                <Surface elevation={0} mode="flat" style={styles.descriptionContainer}>
                  <Text style={styles.CourseDescription}>{item.description}</Text>
                  <Text style={styles.CourseDescription}>{item.totalHourDuration} heures</Text>
                </Surface>
              </Card.Content>
            </Card>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </Surface>
    </Surface>
  );
};
const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      height: "100%",
      flexDirection: "column",
    },
    view: {
      flex: 1,
      padding: 20
    },
    descriptionContainer: {
      flexDirection: "column",
      justifyContent: "space-around",
    },
    CourseCard: {
      marginBottom: 10,
      borderRadius: 10,
      padding: 10,
      backgroundColor: theme.colors.background
    },
    CourseImage: {
      height: 200,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    CourseTitle: {
      color: theme.colors.primary,
      marginTop: 20,
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: 8,
      fontSize: 16,
    },
    CourseDescription: {
      textAlign: "center",
      marginBottom: 10
    },
  });
};

export default CertificationsScreen;
