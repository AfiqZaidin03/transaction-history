import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";
import * as LocalAuthentication from "expo-local-authentication";

type LoginScreenProps = {
  navigation: NavigationProp<any>;
};

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  const handleLogin = () => {
    if (username === "User" && password === "p@ssw0rd") {
      navigation.navigate("TransactionHistory");
    } else {
      setError("Invalid username or password");
    }
  };

  const fallBackToDefaultLogin = () => {
    console.log("Fallback to default login");
  };

  interface AlertComponentProps {
    title: string;
    message: string;
    btnTxt: string;
    btnFunc: () => void;
  }

  const alertComponent = ({
    title,
    message,
    btnTxt,
    btnFunc,
  }: AlertComponentProps) => {
    return Alert.alert(title, message, [{ text: btnTxt, onPress: btnFunc }], {
      cancelable: false,
    });
  };

  const handleBiometricLogin = async () => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    if (!isBiometricAvailable) {
      return alertComponent({
        title: "Please enter your credentials",
        message: "Biometric authentication is not supported",
        btnTxt: "OK",
        btnFunc: () => fallBackToDefaultLogin(),
      });
    }

    let supportedBiometric;
    if (isBiometricAvailable) {
      supportedBiometric =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
    }

    const savedBiometric = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometric) {
      return alertComponent({
        title: "Please enter your credentials",
        message: "Biometric authentication is not enrolled",
        btnTxt: "OK",
        btnFunc: () => fallBackToDefaultLogin(),
      });
    }
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login to Transaction History app with biometric",
      cancelLabel: "Cancel",
      disableDeviceFallback: true,
    });

    if (biometricAuth.success) {
      navigation.navigate("TransactionHistory");
    }
  };

  useEffect(() => {
    async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
        <TouchableOpacity onPress={handleBiometricLogin}>
          <Entypo name="fingerprint" size={24} color="black" />
        </TouchableOpacity>
        <Text>
          {isBiometricSupported
            ? "Your device is compatible with Biometrics"
            : "Fingerprint is available on this device"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default LoginScreen;
