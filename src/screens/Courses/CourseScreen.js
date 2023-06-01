import React from "react";
import { StyleSheet } from "react-native";
import { Surface, useTheme } from "react-native-paper";
import Video from "react-native-youtube-iframe";
import ListAccordionComponent from "../../components/ListAccordion.component.";
import HeaderPageComponent from "../../components/HeaderPage.component";

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
    <Surface elevation={1} mode="flat"  style={styles.container}>
      <HeaderPageComponent/>
      <Surface elevation={0} mode="flat"  style={styles.VideoContainer}>
        <Video
          videoId={"HRkr2r3Rf0A"}
          height={225}
        />
      </Surface>
        <Surface elevation={0} mode="flat"  style={styles.CourseList}>
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
    },
    CourseList: {
      flex:1
    },
  });
}

