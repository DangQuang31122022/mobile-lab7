// App.tsx
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  StatusBar,
} from "react-native";
import {
  TextInput,
  Button,
  Avatar,
  Icon,
  IconButton,
} from "react-native-paper";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
const AddJob = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [job, setJob] = useState("");

  const handleFinish = () => {
    console.log("Job:", job);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image
          size={50}
          source={{ uri: "https://picsum.photos/700" }} // Replace with the actual image URL
        />
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>Hi Twinkle</Text>
          <Text style={styles.subText}>Have a great day ahead</Text>
        </View>
        <IconButton
          icon="arrow-left"
          size={25}
          style={{ marginLeft: "auto" }}
          onPress={() => navigation.goBack()}
        />
      </View>

      <Text style={styles.title}>ADD YOUR JOB</Text>

      <TextInput
        label="Input your job"
        value={job}
        mode="outlined"
        left={<TextInput.Icon icon="file-document-outline" />}
        onChangeText={(text) => setJob(text)}
        style={styles.input}
      />

      <Button
        mode="contained"
        onPress={handleFinish}
        style={styles.finishButton}
        contentStyle={styles.buttonContent}
        icon="arrow-right"
      >
        FINISH
      </Button>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/tk1.png")} // Replace with the actual image URL
          style={styles.noteImage}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    // alignItems: "center",
    alignContent: "center",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  greeting: {
    marginLeft: 15,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subText: {
    color: "gray",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  finishButton: {
    alignSelf: "center",
    backgroundColor: "#00bfff",
    width: "60%",
  },
  buttonContent: {
    paddingVertical: 5,
    flexDirection: "row-reverse",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 40,
    flex: 0.7,
  },
  noteImage: {
    width: "100%",
    height: 200,
    objectFit: "contain",
  },
});

export default AddJob;
