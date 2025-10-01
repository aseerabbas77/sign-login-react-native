// App.js
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AuthContext from "./contexts/AuthContext";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import Home from "./screens/Home";

const Tab = createBottomTabNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Tab.Navigator>
          {!user ? (
            <>
              <Tab.Screen name="Signup" component={Signup} />
              <Tab.Screen name="Login" component={Login} />
            </>
          ) : (
            <Tab.Screen name="Home" component={Home} />
          )}
        </Tab.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
