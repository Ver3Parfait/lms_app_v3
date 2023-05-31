import { List, Text } from "react-native-paper";
import { TouchableOpacity, FlatList, StyleSheet, View } from "react-native";

const ListAccordion = ({ data }) => {
  const renderItem = ({ item }) => (
    <List.Accordion
      id={item.title}
      title={item.title}
      left={(props) => <List.Icon {...props} icon={item.icon} />}
    >
      {item.courses.map((course) => (
        <TouchableOpacity
          key={`${course.id}-${course.title}`}
          style={styles.container}
        >
          <View style={styles.Image}>
            <Text style={styles.Index}>#</Text>
          </View>
          <View style={styles.Infos}>
            <View style={styles.InfosRow}>
              <View style={styles.TitleContainer}>
                <Text style={styles.Title}>{course.title}</Text>
              </View>
              <View style={styles.IconContainer}></View>
            </View>
            <View>{/* Futur ajout d'une barre de progression */}</View>
          </View>
        </TouchableOpacity>
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

const styles = StyleSheet.create({
  listContent: {
    paddingVertical: 10,
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    display: "flex",
    flexDirection: "row",
    height: 80,
  },
  Title: {
    fontWeight: "bold",
    fontSize: 13.5,
  },
  TitleContainer: {
    flex: 1,
    flexWrap: 'wrap', 
  },
  Image: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 0,
  },
  Index: {
    fontSize: 16,
    fontWeight: "bold",
  },
  Infos: {
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
});
