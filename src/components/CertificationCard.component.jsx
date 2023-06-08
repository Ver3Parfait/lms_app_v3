import { StyleSheet, FlatList } from "react-native";
import { memo } from "react";
import { Card, Surface, Text } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CertificationCard = ({ data }) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = getStyles(theme);

  const removeCertificationId = async () => {
    try {
      await AsyncStorage.removeItem("Certification_id");
    } catch (error) {
      console.log(error);
    }
  };

  const storeCertificationId = async (id) => {
    try {
      await AsyncStorage.setItem("Certification_id", id.toString());
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({ item }) => (
    <Card
      key={item.id}
      style={styles.CourseCard}
      onPress={() => {
        removeCertificationId(); 
        storeCertificationId(item.id); 
        navigation.navigate("Cours"); 
      }}
      elevation={1}
    >
      <Card.Cover
        source={{ uri: `${API_URL}/uploads/${item.mainPhoto}` }}
        style={styles.CourseImage}
      />
      <Card.Content>
        <Text style={styles.CourseTitle}>{item.name}</Text>
        <Surface elevation={0} mode="flat" style={styles.descriptionContainer}>
          <Text style={styles.CourseDescription}>{item.description}</Text>
          <Surface elevation={0} mode="flat" style={styles.row}>
            <Text style={styles.CourseDescription}>
              {item.totalHourDuration} heures
            </Text>
            <Text style={styles.CourseDescription}>
              {item.certificationCourses ? item.certificationCourses.length : 0} cours
            </Text>
          </Surface>
        </Surface>
      </Card.Content>
    </Card>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default memo(CertificationCard);

const getStyles = (theme) => {
  return StyleSheet.create({
    descriptionContainer: {
      flexDirection: "column",
      justifyContent: "space-around",
    },
    CourseCard: {
      marginBottom: 10,
      borderRadius: 10,
      padding: 10,
      backgroundColor: theme.colors.background,
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
    },
    row: {
      marginTop:20,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around'
    }
  });
};
