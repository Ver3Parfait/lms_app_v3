import { StyleSheet } from "react-native";
import { useTheme, Text, Surface, IconButton } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute } from '@react-navigation/native';

export default HeaderPage = ({ Icon = "arrow-left-circle", Drawer = null, Invisble = false }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const styles = getStyles(theme, insets);

  const route = useRoute();
  const routeName = route.name;

  return (
    <Surface elevation={0} mode="flat" style={styles.container}>
      <Surface elevation={0} mode="flat" style={styles.leftContainer}>
        <IconButton
          icon={Invisble ? false : Icon} 
          color={theme.colors.primary}
          size={25}
          onPress={Drawer ? () => navigation.openDrawer() : () => navigation.goBack()}
        />
      </Surface>
      <Surface elevation={0} mode="flat" style={styles.middleContainer}>
        <Text style={styles.title}>{routeName}</Text>
      </Surface>
      <Surface elevation={0} mode="flat" style={styles.rightContainer} />
    </Surface>
  );
};

const getStyles = (theme, insets) => {
  return StyleSheet.create({
    container: {
      paddingTop: insets.top,
      flexDirection: 'row',
      width: "100%",
      backgroundColor: theme.colors.background,
      alignItems: 'center',
    },
    leftContainer: {
      flex: 1,
      paddingLeft: 10,
    },
    middleContainer: {
      flex: 2,
      alignItems: 'center',
    },
    rightContainer: {
      flex: 1,
      paddingRight: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
  });
};