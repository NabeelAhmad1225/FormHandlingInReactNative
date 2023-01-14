import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Add from "./src/Add";
import UploadScreen from "./src/UploadScreen";
import Form from "./src/components/Form";
import ProfileImage from "./src/components/ProfileImage";

export default function App() {
  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
