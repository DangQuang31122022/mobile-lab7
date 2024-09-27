import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { useUserTakeNoteStore } from "../../stores/useUserTakeNoteStore";
import { getTasks } from "../../services/takeNoteService";

const TaskManagementScreen1 = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const { user, setUser, setTasks } = useUserTakeNoteStore();
  const [name, setName] = useState(user?.name || "");

  // useEffect(() => {
  //   // Fetch user and tasks when component mounts
  //   const fetchTasks = async () => {
  //     try {
  //       const tasks = await getTasks();

  //       setTasks(tasks);
  //     } catch (error) {
  //       console.error("Failed to fetch tasks:", error);
  //     }
  //   };

  //   fetchTasks();
  // }, []);

  const handleGetStarted = () => {
    // Handle the Get Started button press
    console.log(`Name entered: ${name}`);
    setUser({
      id: "1", // Cố định cho user hiện tại, có thể thay đổi theo use case
      name,
      profileImage: "https://picsum.photos/700",
      greeting: `Hi ${name}`,
      subGreeting: "Have a great day ahead",
    });
    navigation.navigate("TaskList");
    // navigation.navigate("TestAI");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/tk1.png")}
        style={styles.noteImage}
      />

      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      <TextInput
        left={<TextInput.Icon icon="email" />}
        mode="outlined"
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>GET STARTED →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  noteImage: {
    width: "100%",
    height: 300,
    objectFit: "contain",
    marginBottom: 20,
  },
  quote: {
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6A5ACD",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#00BFFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
export default TaskManagementScreen1;
