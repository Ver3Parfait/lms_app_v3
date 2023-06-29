import { FlatList, StyleSheet } from "react-native";
import { Surface, useTheme, List, Text } from "react-native-paper";
import HeaderPageComponent from "../../components/HeaderPage.component";
import { useState, useEffect } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import CertificationsServices from "../../api/services/certifications.services";

const CertificationCoursesScreen = ({ navigation }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [certificationCoursesList, setCertificationCoursesList] = useState()
  const [expandedItems, setExpandedItems] = useState([]);

  const handleAccordionToggle = (item) => {
    const index = expandedItems.indexOf(item.id);
    if (index > -1) {
      setExpandedItems(prevState => prevState.filter(id => id !== item.id));
    } else {
      setExpandedItems(prevState => [...prevState, item.id]);
    }
  };

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
    <Surface elevation={0} mode="flat" style={styles.container}>
      <HeaderPageComponent />
      <FlatList
        data={certificationCoursesList}
        renderItem={({ item: item1 }) => (
          <Surface elevation={1} mode="flat" >
            <List.Section>
              <Surface elevation={2} mode="flat">
                <List.Accordion
                  titleNumberOfLines={0}
                  title={item1.name}
                  titleStyle={styles.AccordionContent}
                  left={props =>
                    <Surface style={styles.IconContainer} elevation={1} mode="flat">
                      <List.Icon {...props} style={styles.Icon} icon='react' />
                    </Surface>
                  }
                  expanded={expandedItems.includes(item1.id)}
                  onPress={() => handleAccordionToggle(item1)}>
                  <FlatList
                    data={item1.learningResources}
                    renderItem={({ item: item2 }) => (
                      <Surface elevation={0} mode="flat">
                        <List.Item
                          description={item2.name}
                          descriptionStyle={styles.ListContent}
                          onPress={async () => {
                            await AsyncStorage.removeItem('Course_id')
                            await AsyncStorage.setItem('Course_id', item1.id.toString())
                            navigation.navigate('CourseScreen')
                          }} />
                      </Surface>
                    )}
                    keyExtractor={item2 => item2.learningResourceIndex.toString()}
                  />
                </List.Accordion>
              </Surface>
            </List.Section>
          </Surface>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </Surface >
  );
};

export default CertificationCoursesScreen

const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      height: "100%",
      flexDirection: "column",
    },
    AccordionContent: {
      fontWeight: "bold"
    },
    Title: {
      fontWeight: "bold",
      fontSize: 13.5,
    },
    TitleContainer: {
      flex: 1,
      marginTop: 10,
    },
    IconContainer: {
      width: 30,
      height: 40,
      marginLeft: 10
    },
    Icon: {
      alignItems: "center",
      flex: 1
    },
    ListContent: {
      flex: 1,
      justifyContent: "center",
      marginBottom: 10,
      fontWeight:"700"
    }
  });
}

