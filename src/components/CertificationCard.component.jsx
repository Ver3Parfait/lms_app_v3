import { StyleSheet, FlatList } from "react-native";
import { memo } from "react";
import { Card, Surface, Text } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

const CertificationCard = ({ data }) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = getStyles(theme);
  const renderItem = ({ item }) => (
    <Card
      key={item.id}
      style={styles.CourseCard}
      onPress={() =>
        navigation.navigate("Cours", { CertificationCoursesId: item.id })
      }
      elevation={1}
    >
      <Card.Cover  source={{ uri: item.imageUrl }} style={styles.CourseImage} />
      <Card.Content>
        <Text style={styles.CourseTitle}>{item.name}</Text>
        <Surface elevation={0} mode="flat"  style={styles.descriptionContainer}>
          <Text style={styles.CourseDescription}>{item.description}</Text>
          <Text style={styles.CourseDescription}>{item.duration} heures</Text>
          <Text style={styles.CourseDescription}>{item.coursesNumbers} cours</Text>
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

export default memo(CertificationCard)
const getStyles = (theme) => {
  return StyleSheet.create({
    descriptionContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    CourseCard: {
      marginBottom: 10,
      borderRadius: 10,
      padding:10,
      backgroundColor:theme.colors.background
    },
    CourseImage: {
      height: 200,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    CourseTitle: {
      color:theme.colors.primary,
      marginTop: 20,
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: 8,
      fontSize: 16,
    },
    CourseDescription: {
      textAlign: "center",
    },
  });
};
