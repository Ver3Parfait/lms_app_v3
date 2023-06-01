import { StyleSheet, FlatList } from "react-native";
import { Card, Surface, Text } from "react-native-paper";
import { useTheme } from "react-native-paper";

export default CertificationCard = ({ data, navigation }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const renderItem = ({ item }) => (
    <Card
      key={item.id}
      style={styles.CourseCard}
      onPress={() =>
        navigation.navigate("CertificationCoursesScreen", { CertificationCoursesId: item.id })
      }
    >
      <Card.Cover source={{ uri: item.imageUrl }} style={styles.CourseImage} />
      <Card.Content>
        <Text style={styles.CourseTitle}>{item.name}</Text>
        <Surface style={styles.descriptionContainer}>
          <Text style={styles.CourseDescription}>{item.description}</Text>
          {item.duration && <Text style={styles.CourseDescription}>{item.duration}</Text>}
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
const getStyles = (theme) => {
  return StyleSheet.create({
    descriptionContainer: {
      flexDirection:'row',
      justifyContent: "space-around",
    },
    container: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
      padding: 20,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    greeting: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#000",
    },
    username: {
      marginLeft: 10,
    },
    avatar: {
      marginRight: 10,
    },
    searchContainer: {
      flexDirection: "row",
      marginBottom: 20,
      alignItems: "center",
    },
    searchInput: {
      flex: 1,
      marginRight: 10,
    },
    switchContainer: {
      marginBottom: 20,
    },
    switchButtonGroup: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    switchButton: {
      flex: 1,
      alignSelf: "center",
      marginRight: 10,
    },
    sectionContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
    },
    sectionLink: {
      color: "#0d47a1",
    },
    CourseCard: {
      marginBottom: 10,
      borderRadius: 10,
    },
    CourseImage: {
      height: 200,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    CourseTitle: {
      marginTop: 20,
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: 8,
      fontSize: 16,
    },
    CourseDescription: {
      textAlign: "center",
      color: "#555",
    },
  });
}
