import { useState } from "react";
import { Image, TouchableWithoutFeedback, View, Text, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthServices from "../../api/services/auth.services";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator, Icon, TextInput } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false)

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const renderIconPassword = (props) => (
    <TouchableWithoutFeedback onPress={onPasswordIconPress}>
      <Icon {...props} name={passwordVisible ? 'eye-off' : "eye"} />
    </TouchableWithoutFeedback>
  );

  const Login = async () => {
    setLoading(true)
    try {
      let LoginRequest = await AuthServices.Login({ username: email, password })
      await AsyncStorage.setItem("token", LoginRequest.data.token)
      let res = await AuthServices.Me();
      await AsyncStorage.setItem("id", res.data.id.toString());
      navigation.navigate("BottomTabNavigator")
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }

  return (
    <SafeAreaProvider>
      <View level='1' style={styles.container}>
        {
          loading ? (
            <>
              <ActivityIndicator animated={true} />
            </>
          ) : (
            <>
              <Image
                resizeMode='contain'
                style={styles.image}
                source={require('../../../assets/logoRI7.png')}
              />
              <Text
                category='h1'
                style={styles.text}
                status="primary"
              >
                Connexion
              </Text>
              <TextInput
                style={styles.input}
                placeholder="email"
                value={email}
                onChangeText={(e) => setEmail(e)}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TextInput
                secureTextEntry={!passwordVisible}
                right={renderIconPassword}
                style={styles.input}
                placeholder="password"
                value={password}
                onChangeText={(e) => setPassword(e)}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Button
                style={styles.signInButton}
                title="connexion"
                onPress={Login}
              >
                Connexion
              </Button>
            </>
          )}
      </View>
    </SafeAreaProvider>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 216,
    paddingHorizontal: 40,
  },
  text: {
    textTransform: "capitalize",
    marginVertical: 10,
    fontWeight: "400"
  },
  input: {
    color: "success",
    marginTop: 20
  },
  signInButton: {
    marginHorizontal: 16,
    marginTop: 30,
    width: "100%"
  },
  image: {
    width: 200,
    height: 100,
    marginBottom: 20
  }

});
