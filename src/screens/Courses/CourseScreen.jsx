import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Video from "react-native-youtube-iframe";
import ListAccordion from "../../components/ListAccordion";


export default function CourseScreen() {
  const data = [];

  for (let i = 0; i < 60; i++) {
    data.push({
      id: i + 1,
      title:
        "Mises à jour & Nouveaux Contenus en compagnie de Fabien Walle et Militello Lucas",
      icon: "download",
      courses: [{ title: "test" }],
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.VideoContainer}>
        <Video
          videoId={"HRkr2r3Rf0A"}
          height={225}
          play={true}
        />
      </View>
        <View style={styles.CourseList}>
          <ListAccordion data={data} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  VideoContainer: {
    flex: 1,
  },
  CourseList: {
    flex: 2,
  },
});

