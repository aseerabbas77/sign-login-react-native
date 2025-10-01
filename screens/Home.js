// screens/Home.js
import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import AuthContext from "../contexts/AuthContext";
import styles from "../styles/styles";

const Home = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    alert("Logged out successfully!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Home</Text>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Hello, {user.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Home;
