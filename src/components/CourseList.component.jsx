import React from "react";
import {  Text, IconButton } from "react-native-paper";
import { TouchableOpacity, FlatList, StyleSheet, View } from "react-native";
import { Image } from "react-native";
import { useTheme } from "react-native-paper";
const CourseList = ({ data, navigation }) => {
  const theme = useTheme()
  const renderItem = ({ item }) => (
    <TouchableOpacity key={item.id.toString()} style={styles.container}
    onPress={() =>
      navigation.navigate("CourseScreen", { CourseId: item.id })
    }
    >
      {item.imageUrl ? (
        <Image style={styles.Image} source={{ uri: item.imageUrl }} />
      ) : (
        <View style={styles.Image}>
          <Text style={styles.Index}>{item.index}</Text>
        </View>
      )}
      <View style={styles.Infos}>
        <View style={styles.InfosRow}>
          <View style={styles.TitleContainer}>
            <Text style={styles.Title}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          {item.icon ? (
            <View style={styles.IconContainer}>
              <IconButton
                icon={item.icon}
                color="black"
                onPress={() => {
                }}
              />
            </View>
          ) : (
            <View style={styles.IconContainer}></View>
          )}
        </View>

        <View>{/* Futur ajout d'une barre de progression */}</View>
      </View>
    </TouchableOpacity>
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

export { CourseList };

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
    textAlign:'center',
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
