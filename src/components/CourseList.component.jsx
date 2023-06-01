import { Text, IconButton, TouchableRipple, Surface, useTheme,} from "react-native-paper";
import { FlatList, StyleSheet, Image } from "react-native";

export default CourseList = ({ data, navigation }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const renderItem = ({ item }) => (
    <TouchableRipple
      key={item.id.toString()}
      onPress={() => navigation.navigate("CourseScreen", { CourseId: item.id })}
    >
      <Surface style={styles.container} >
        {item.imageUrl ? (
          <Image style={styles.Image} source={{ uri: item.imageUrl }} />
        ) : (
          <Surface style={styles.Image}>
            <Text style={styles.Index}>{item.index}</Text>
          </Surface>
        )}
        <Surface style={styles.Infos}>
          <Surface style={styles.InfosRow}>
            <Surface style={styles.TitleContainer}>
              <Text style={styles.Title}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </Surface>
            {item.icon ? (
              <Surface style={styles.IconContainer}>
                <IconButton icon={item.icon} color="black" onPress={() => {}} />
              </Surface>
            ) : (
              <Surface style={styles.IconContainer}></Surface>
            )}
          </Surface>

          <Surface>{/* Futur ajout d'une barre de progression */}</Surface>
        </Surface>
      </Surface>
    </TouchableRipple>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContent}
    />
  );
};


const getStyles = (theme) => {
  return StyleSheet.create({
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
  });
}
