import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Text, View } from "react-native";

export default function Product() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Products</Text>

      <Button
        title="Go to Caméra"
        onPress={() => {
          navigation.navigate("Camera");
        }}
      />
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
        title="Go to Setting"
        onPress={() => {
          navigation.navigate("Setting");
        }}
      />
    </View>
  );
}
