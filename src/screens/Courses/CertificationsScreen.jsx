import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import CertificationCard from "../../components/CertificationCard";

const CertificationsScreen = ({ navigation }) => {
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
    <View style={styles.container}>
      <CertificationCard navigation={navigation} data={data}/>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});

export default CertificationsScreen;
