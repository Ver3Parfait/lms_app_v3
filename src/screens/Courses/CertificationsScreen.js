import { StyleSheet} from "react-native";
import { Surface, useTheme } from "react-native-paper";
import CertificationCardComponent from "../../components/CertificationCard.component";
import HeaderPageComponent from "../../components/HeaderPage.component";

const CertificationsScreen = ({ navigation }) => {
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
    <Surface elevation={1} mode="flat"  style={styles.container}>
      <HeaderPageComponent/>
      <CertificationCardComponent navigation={navigation} data={data}/>
    </Surface>

  );
};
const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      height:"100%",
      flexDirection: "column",
    },
  });
}

export default CertificationsScreen;
