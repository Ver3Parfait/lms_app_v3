import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Surface, useTheme } from "react-native-paper";
import CertificationCardComponent from "../../components/CertificationCard.component";
import HeaderPageComponent from "../../components/HeaderPage.component";
import CertificationsServices from "../../api/services/certifications.services";

const CertificationsScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  const theme = useTheme();
  const styles = getStyles(theme);

  useEffect(() => {
    const fetchData = async () => {
      const response = await CertificationsServices.Certifications();
      setData(response.data);
    };

    fetchData();
  }, []);
  
  return (
    <Surface elevation={1} mode="flat" style={styles.container}>
      <HeaderPageComponent Invisble />
      <Surface style={styles.view}>
        <CertificationCardComponent data={data} />
      </Surface>
    </Surface>
  );
};
const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      height: "100%",
      flexDirection: "column",
    },
    view:{
      flex:1,
      padding:20
    }
  });
};

export default CertificationsScreen;
