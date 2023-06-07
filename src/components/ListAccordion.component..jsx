import {
  List,
  Text,
  Surface,
  useTheme,
  IconButton,
  TouchableRipple,
} from "react-native-paper";
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
        <TouchableRipple
          onPress={() => console.log("poire")}
          key={`${course.id}-${course.title}`}
          style={styles.surface}
        >
          <Surface style={styles.row}>
            <Surface elevation={0} mode="flat" style={styles.image}>
              <Text style={styles.index}>{course.index}</Text>
            </Surface>
            <Surface elevation={0} mode="flat" style={styles.infos}>
              <Text style={styles.title}>{course.title}</Text>
            </Surface>
            <IconButton
              style={styles.iconButton}
              icon={"heart-outline"}
              color={theme.colors.primary}
              size={25}
              onPress={() => navigation.goBack()}
            />
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

export default memo(ListAccordion);

const getStyles = (theme) => {
  return StyleSheet.create({
    row: {
      alignItems: "center",
      flexDirection: "row",
      width: "100%",
    },
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
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
    },
    index: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.colors.primary,
    },
    surface: {
      flexDirection: "row",
      alignItems: "center",
    },
    image: {
      flex: 1,
      paddingTop: 10,
      paddingBottom: 10,
    },
    iconButton: {
      flex: 1,
    },
    infos: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
};
