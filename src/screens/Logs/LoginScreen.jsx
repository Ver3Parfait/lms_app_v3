import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthServices from "../../api/services/auth.services";
import { ActivityIndicator, TextInput, Text, useTheme, Surface } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false)

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

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
      <Surface style={styles.container}>
        {
          loading ? (
            <>
              <ActivityIndicator animated={true} size='large' />
            </>
          ) : (
            <>
              <Image
                resizeMode='contain'
                style={styles.image}
                source={require('../../../assets/logoRI7.png')}
              />
              <Text
                variant="displayMedium"
                style={styles.text}
              >
                connexion
              </Text>
              <TextInput
                style={styles.input}
                placeholder="email"
                value={email}
                onChangeText={(e) => setEmail(e)}
                autoCapitalize="none"
                autoCorrect={false}
                mode={"outlined"}
              />
              <TextInput
                secureTextEntry={!passwordVisible}
                right={
                  <TextInput.Icon
                    icon={passwordVisible ? 'eye-off' : "eye"}
                    onPress={onPasswordIconPress} />
                }
                mode={"outlined"}
                style={styles.input}
                placeholder="password"
                value={password}
                onChangeText={(e) => setPassword(e)}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TouchableOpacity
                onPress={Login}
                style={[styles.signInButton, { backgroundColor: colors.primary }]}>
                <Text
                  style={styles.signInText}>connexion</Text>
              </TouchableOpacity>

            </>
          )}
      </Surface>
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
    textTransform: "uppercase",
    marginVertical: 10,
    fontWeight: "400",
  },
  input: {
    marginTop: 20,
    width: '100%'
  },
  signInButton: {
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    width: "100%"
  },
  signInText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textTransform: "uppercase"
  },
  image: {
    width: 200,
    height: 100,
    marginBottom: 20
  }

});
