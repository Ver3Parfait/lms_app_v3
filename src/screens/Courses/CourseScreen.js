import React from "react";
import { StyleSheet } from "react-native";
import { Surface, useTheme } from "react-native-paper";
import Video from "react-native-youtube-iframe";
import ListAccordionComponent from "../../components/ListAccordion.component.";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CourseScreen() {
  const theme = useTheme();
  const styles = getStyles(theme);
  const insets = useSafeAreaInsets()
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
    <Surface style={[styles.container, {paddingTop: insets.top}]}>
      <Surface style={styles.VideoContainer}>
        <Video
          videoId={"HRkr2r3Rf0A"}
          height={225}
        />
      </Surface>
        <Surface style={styles.CourseList}>
          <ListAccordionComponent data={data} />
        </Surface>
    </Surface>
  );
}
const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      height:"100%",
    },
    VideoContainer: {
      height:219,
      backgroundColor:'red'
    },
    CourseList: {
      flex:1
    },
  });
}

