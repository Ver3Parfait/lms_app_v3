import { List, Text, TouchableRipple, Surface } from "react-native-paper";
import { FlatList, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const ListAccordion = ({ data }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const renderItem = ({ item }) => (
    <List.Accordion
      id={item.title}
      title={item.title}
      left={(props) => <List.Icon {...props} icon={item.icon} />}
    >
      {item.courses.map((course) => (
        <TouchableRipple
          key={`${course.id}-${course.title}`}
          style={styles.container}
        >
          <Surface style={styles.surface}>
            <Surface style={styles.image}>
              <Text style={styles.index}>#</Text>
            </Surface>
            <Surface style={styles.infos}>
              <Surface style={styles.infosRow}>
                <Surface style={styles.titleContainer}>
                  <Text style={styles.title}>{course.title}</Text>
                </Surface>
                <Surface style={styles.iconContainer}></Surface>
              </Surface>
              <Surface>{/* Futur ajout d'une barre de progression */}</Surface>
            </Surface>
          </Surface>
        </TouchableRipple>
      ))}
    </List.Accordion>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.id}-${item.title}-${index}`}
      contentContainerStyle={styles.listContent}
    />
  );
};

export default ListAccordion;
const getStyles = (theme) => {
  return StyleSheet.create({
    listContent: {
      paddingVertical: 10,
    },
    container: {
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 10,
      flexDirection: "row",
      height: 80,
    },
    title: {
      fontWeight: "bold",
      fontSize: 13.5,
    },
    titleContainer: {
      flex: 1,
      flexWrap: "wrap",
    },
    surface: {
      flex: 1,
      elevation: 4,
      borderRadius: 4,
      flexDirection: "row",
    },
    image: {
      width: 60,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
      borderRadius: 0,
    },
    index: {
      fontSize: 16,
      fontWeight: "bold",
    },
    infos: {
      flex: 1,
      paddingRight: 10,
    },
    infosRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    iconContainer: {
      width: 20,
      height: 20,
      alignItems: "center",
      justifyContent: "center",
    },
  });
}
