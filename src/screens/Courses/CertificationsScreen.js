import { StyleSheet} from "react-native";
import { Surface, useTheme } from "react-native-paper";
import CertificationCardComponent from "../../components/CertificationCard.component";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CertificationsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets()
  const theme = useTheme();
  const styles = getStyles(theme);
  const data = [];

  for (let i = 0; i < 60; i++) {
    data.push({
      id: i + 1,
      name: "Mises à jour & Nouveaux Contenus en compagnie de Fabien Walle et Militello Lucas",
      description: "Militello Lucas",
      duration:'20 minutes',
      imageUrl:
        "https://mimir.ri7.fr/uploads/certification/banniere-1200x628-6331a44540fa9.jpg",
    });
  }

  return (
    <Surface style={[styles.container, {paddingTop:insets.top}]}>
      <CertificationCardComponent navigation={navigation} data={data}/>
    </Surface>

  );
};
const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
  });
}

export default CertificationsScreen;
