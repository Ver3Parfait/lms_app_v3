import { List, Text, Surface, useTheme, IconButton } from "react-native-paper";
import { FlatList, StyleSheet } from "react-native";
import { memo } from "react";


const ListAccordion = ({ data }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const renderItem = ({ item }) => (
    <List.Accordion
      id={item.title}
      title={item.title}
      titleNumberOfLines={0}
      titleStyle={styles.title}
      left={() => (
        <Surface elevation={0} mode="flat" style={styles.indexContainer}>
          <Text style={styles.index}>{item.index}</Text>
        </Surface>
      )}
    >
      {item.courses.map((course) => (
        <Surface elevation={0} mode="flat" key={`${course.id}-${course.title}`} style={styles.surface}>
          <Surface elevation={0} mode="flat" style={styles.image}>
            <Text style={styles.index}>{course.index}</Text>
          </Surface>
          <Surface elevation={0} mode="flat" style={styles.infos}>
            <Text style={styles.title}>{course.title}</Text>
          </Surface>
        </Surface>
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

export default memo(ListAccordion)
const getStyles = (theme) => {
  return StyleSheet.create({
    listContent: {
      paddingVertical: 10,
    },
    title: {
      fontWeight: "bold",
      fontSize: 13.5,
      textAlign: "center",
      
    },
    indexContainer: {
      width: 40,
      height:40,
      alignItems: "center",
      justifyContent: "center",
      margin:10
    },
    index: {
      fontSize: 16,
      fontWeight: "bold",
      color:theme.colors.primary
    },
    surface: {
      flexDirection: "row",
      alignItems: "center",
    },
    image: {
      paddingTop:10,
      paddingBottom:10,
    },
    infos: {
      flex: 1,
    },
  });
};
