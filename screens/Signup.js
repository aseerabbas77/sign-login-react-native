// screens/Signup.js
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../styles/styles";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("http://192.168.10.5:3001/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.status === 200 && data.success) {
        alert("Signup Successful! Please login.");
        navigation.navigate("Login");
      } else if (response.status === 409) {
        alert("This user already exists. Please login.");
      } else {
        alert(data.message || "Signup failed, try again.");
      }
    } catch (err) {
      console.log(err);
      alert("Error: " + err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Signup</Text>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

export default Signup;
