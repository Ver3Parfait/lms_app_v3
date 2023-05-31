import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import YouTube from "react-native-youtube-iframe";
import { useNavigation } from "@react-navigation/native";
import * as ScreenOrientation from "expo-screen-orientation";

const FullScreenCourseScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    };

    lockOrientation();

    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  const handleExitFullScreen = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.VideoContainer}>
        <YouTube
          videoId="n0ked7UZF5c"
          play
          fullscreen={true}
          height={"100%"}
        />
      </View>
      <View style={styles.exitFullScreenButtonContainer}>
        <Button
          title="Exit Full Screen"
          onPress={handleExitFullScreen}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  VideoContainer: {
    flex: 1,
  },
  exitFullScreenButtonContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
});

export default FullScreenCourseScreen;
