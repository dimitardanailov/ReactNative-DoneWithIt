import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  Button,
} from "react-native";

export default function App() {
  const onPressEvent = () => {
    console.log("The component was pressed!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Button title="Click me" onPress={onPressEvent} />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
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
