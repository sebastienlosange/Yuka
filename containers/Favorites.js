import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Text, View } from "react-native";

export default function Favorites() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Favorites</Text>

      <Button
        title="Go to Caméra"
        onPress={() => {
          navigation.navigate("Camera");
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
