import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Text, View } from "react-native";

export default function Camera() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Caméra</Text>

      <Button
        title="Go to Favorites"
        onPress={() => {
          navigation.navigate("Favorites");
        }}
      />
      <Button
        title="Go to Products"
        onPress={() => {
          navigation.navigate("Products");
        }}
      />
      <Button
        title="Go to Product"
        onPress={() => {
          navigation.navigate("Product");
        }}
      />
      <Button
        title="Go to Setting"
        onPress={() => {
          navigation.navigate("Setting");
        }}
      />
    </View>
  );
}
