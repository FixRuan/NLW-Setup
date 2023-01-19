import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import { Loading } from "./src/components/Loading";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <StatusBar translucent={false} backgroundColor="#09090A" />

      <View style={styles.container}>
        <Text style={{ color: "#7C3AED", fontWeight: "bold", fontSize: 32 }}>
          Hello World
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090A",
    alignItems: "center",
    justifyContent: "center",
  },
});
