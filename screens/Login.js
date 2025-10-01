// screens/Login.js
import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import AuthContext from "../contexts/AuthContext";
import styles from "../styles/styles";

const Login = ({ navigation }) => {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://192.168.10.5:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login Successful!");
        setUser({ email: email });
        navigation.navigate("Home");
      } else {
        alert(data.message || "Login Failed!");
      }
    } catch (err) {
      console.log(err);
      alert("Error: " + err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
