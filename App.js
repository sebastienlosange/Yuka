// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>yupppp!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen } from "expo";
// import { BarCodeScanner } from "expo-barcode-scanner";
// import { AsyncStorage } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import Splash from "./containers/Splash";
// import Camera from "/containers/Camera";
// import Favorites from "/containers/Favorites";
// import Setting from "/containers/Setting";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  // setIsLoading = false;
  return (
    <NavigationContainer>
      {isLoading ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            options={{
              title: "Splash",
              headerStyle: { backgroundColor: "red" },
              headerTitleStyle: { color: "white" },
            }}
          >
            {() => <SplashScreen />}
          </Stack.Screen>
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={({ route, navigation }) => ({
            title: route.name,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                <Text>Camera</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Favorites")}
              >
                <Text>Favorites</Text>
              </TouchableOpacity>
            ),
            headerStyle: { backgroundColor: "papayawhip" },
          })}
        >
          <Stack.Screen name="Camera">
            {(props) => <CameraScreen {...props} />}
            <View>
              <text>hello</text>
            </View>
          </Stack.Screen>
          <Stack.Screen name="Products">
            {(props) => <ProductsScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Product">
            {(props) => <ProductScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Favorites">
            {(props) => <FavoritesScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Setting">
            {(props) => <SettingScreen {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
