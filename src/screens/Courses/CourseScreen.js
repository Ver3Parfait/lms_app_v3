import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Surface, useTheme } from "react-native-paper";
import Video, { getYoutubeMeta } from "react-native-youtube-iframe";
import ListAccordionComponent from "../../components/ListAccordion.component.";
import HeaderPageComponent from "../../components/HeaderPage.component";

export default function CourseScreen() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const videoId = "WkwBzoo47ww";
  const theme = useTheme();
  const styles = getStyles(theme);
  const data = [];
  
  useEffect(() => {
    getYoutubeMeta(videoId).then((meta) => {
      setThumbnailUrl(meta.thumbnail_url);
    });
  }, []);


  for (let i = 0; i < 8; i++) {
    const numCourses = Math.floor(Math.random() * 5) + 1; 
    const courses = [];
    for (let j = 0; j < numCourses; j++) {
      let courseType = ""
      const typeCourses = Math.floor(Math.random() * 3) + 1;
      if (typeCourses === 1) {
        courseType = "Page"
      }else if (typeCourses === 2){
        courseType = "Article"
      }else{
        courseType = "Quizz"
      }
      courses.push({
        title: `Css Les bases N° ${j + 1}`,
        index: courseType,
      });
    }

    data.push({
      id: i + 1,
      index: i + 1,
      title:
        "Mises à jour & Nouveaux Contenus en compagnie de Fabien Walle et Militello Lucas",
      icon: "download",
      courses: courses,
    });
  }

  return (
    <Surface elevation={1} mode="flat" style={styles.container}>
      <HeaderPageComponent />
      <Surface elevation={0} mode="flat" style={styles.VideoContainer}>
        {!videoLoaded && thumbnailUrl !== "" && (
          <TouchableOpacity onPress={() => setVideoLoaded(true)}>
            <Image source={{ uri: thumbnailUrl }} style={styles.image} />
          </TouchableOpacity>
        )}
        {videoLoaded && (
          <Video
            play={true}
            videoId={videoId}
            height={220}
            forceAndroidAutoplay={true}
          />
        )}
      </Surface>
      <Surface elevation={0} mode="flat" style={styles.CourseList}>
        <ListAccordionComponent data={data} />
      </Surface>
    </Surface>
  );
}

const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      height: "100%",
    },
    VideoContainer: {
      height: 220,
    },
    CourseList: {
      flex: 1,
    },
    image: {
      height: 225,
      width: "100%",
    },
  });
};
