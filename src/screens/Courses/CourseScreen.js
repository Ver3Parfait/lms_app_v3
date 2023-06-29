import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import { List, Surface, useTheme } from "react-native-paper";
import Video, { getYoutubeMeta } from "react-native-youtube-iframe";
import HeaderPageComponent from "../../components/HeaderPage.component";
import CertificationsServices from "../../api/services/certifications.services";

const CourseScreen = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [CourseList, setCourseList] = useState([])

  const videoId = "WkwBzoo47ww";
  const theme = useTheme();
  const styles = getStyles(theme);

  const FetchLearningResources = async () => {
    try {
      let res = await CertificationsServices.Course()
      setCourseList(res.data)
    } catch (error) {
      console.log("Error fetching learning resources: ",error);
    }
  }

  useEffect(() => {
    getYoutubeMeta(videoId)
      .then((meta) => {
        setThumbnailUrl(meta.thumbnail_url)
      })
      .then(()=>FetchLearningResources())
  }, []);

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
        <List.Section>
        <List.Subheader style={styles.subheader}>{CourseList.name}</List.Subheader>
          <FlatList
            data={CourseList.learningResources}
            renderItem={({ item }) => (
              <List.Item
                title={item?.name}
                left={props => <List.Icon {...props} icon='react' />}
              />
            )}
          />
        </List.Section>
      </Surface>
    </Surface>
  );
}

export default CourseScreen

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
    subheader : {
      alignSelf:"center",
      fontWeight:"bold",
      fontSize:20,
      textTransform:"uppercase"
    }
  });
};
