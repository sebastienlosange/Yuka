import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Text, View } from "react-native";

export default function Splash() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Please Wait</Text>
    </View>
  );
}
