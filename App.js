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
} from "react-native";

export default function App() {
  const onPressEvent = () => {
    console.log("The image was pressed!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Open up App.js to start working on your app!</Text>
        <TouchableHighlight onPress={onPressEvent}>
          <Image
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300",
            }}
            width="200"
          />
        </TouchableHighlight>
        <TouchableOpacity>
          <Image
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300",
            }}
            width="200"
          />
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={onPressEvent}>
          <Image
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300",
            }}
            width="200"
          />
        </TouchableWithoutFeedback>
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
