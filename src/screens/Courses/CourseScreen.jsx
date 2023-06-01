import React from "react";
import { StyleSheet } from "react-native";
import { Surface, useTheme } from "react-native-paper";
import Video from "react-native-youtube-iframe";
import ListAccordion from "../../components/ListAccordion";

export default function CourseScreen() {
  const theme = useTheme();
  const styles = getStyles(theme);
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
    <Surface style={styles.container}>
      <Surface style={styles.VideoContainer}>
        <Video
          videoId={"HRkr2r3Rf0A"}
          height={225}
        />
      </Surface>
        <Surface style={styles.CourseList}>
          <ListAccordion data={data} />
        </Surface>
    </Surface>
  );
}
const getStyles = (theme) => {
  return StyleSheet.create({
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
}

