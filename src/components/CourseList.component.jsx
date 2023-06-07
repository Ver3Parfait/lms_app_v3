import React from "react";
import {
  Text,
  IconButton,
  TouchableRipple,
  Surface,
  useTheme,
  ProgressBar,
} from "react-native-paper";
import { FlatList, StyleSheet, Image } from "react-native";
import { memo } from "react";

const CourseList = ({ data, navigation }) => {
  const theme = useTheme();
  const styles = getStyles(theme);


  const renderItem = ({ item }) => (
    <TouchableRipple
      key={item.id.toString()}
      onPress={() => navigation.navigate("Vidéo", { CourseId: item.id })}
    >
      <Surface elevation={0} mode="flat" style={styles.container}>
        {item.imageUrl ? (
          <Surface elevation={0} mode="flat" style={styles.ImageContainer}>
            <Image style={styles.Image} source={{ uri: item.imageUrl }} />
          </Surface>
        ) : (
          <Surface elevation={0} mode="flat" style={styles.ImageContainer}>
            <Text style={styles.Image}>{item.index}</Text>
          </Surface>
        )}
        <Surface elevation={0} mode="flat" style={styles.Infos}>
          <Surface elevation={0} mode="flat" style={styles.InfosRow}>
            <Surface elevation={0} mode="flat" style={styles.TitleContainer}>
              <Text style={styles.Title}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </Surface>
            {item.icon ? (
              <Surface elevation={0} mode="flat" style={styles.IconContainer}>
                <IconButton icon={item.icon} color="black" onPress={() => {}} />
              </Surface>
            ) : (
              <Surface
                elevation={0}
                mode="flat"
                style={styles.IconContainer}
              ></Surface>
            )}
          </Surface>

          <Surface style={styles.progressContainer} elevation={0} mode="flat">
            <ProgressBar
              progress={item.progress}
              color={theme.colors.primary}
              style={styles.progressBar}
            />
            {item.progress === 1 ? (
              <Surface elevation={0} mode="flat" style={styles.check}>
                <Text style={styles.percentageText}>{Math.round(item.progress * 100)}% terminé</Text>
                <IconButton
                  icon={"check-circle"}
                  color={theme.colors.secondary}
                />
              </Surface>
            ) : (
              <Surface elevation={0} mode="flat" style={styles.check}>
                <Text style={styles.percentageText}>{Math.round(item.progress * 100)}% terminé</Text>
              </Surface>
            )}
          </Surface>
        </Surface>
      </Surface>
    </TouchableRipple>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      contentContainerStyle={styles.listContent}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default memo(CourseList);

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
    },
    Title: {
      fontWeight: "bold",
      fontSize: 13.5,
    },
    TitleContainer: {
      flex: 1,
      marginTop: 10,
    },
    ImageContainer: {
      height: "100%",
      alignItems: "center",
      borderRadius: 0,
      justifyContent: "flex-start",
    },
    Image: {
      width: 60,
      height: 60,
      alignItems: "center",
      margin: 10,
      borderRadius: 0,
      padding: 10,
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
    description: {
      marginTop: 10,
    },
    progressContainer: {
      marginTop: 20,
      marginBottom: 10,
      width: "100%",
      borderRadius: 10,
      flexDirection: "column",
    },
    progressBar: {
      borderRadius: 5,
    },
    percentageText: {
      marginTop: 10,
      marginLeft: 5,
      textAlign: "left",
      paddingRight: 10,
    },
    check: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });
};
