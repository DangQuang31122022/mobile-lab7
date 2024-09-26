import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Icon, TextInput } from "react-native-paper";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

const tasks = [
  { id: "1", title: "To check email", completed: true },
  { id: "2", title: "UI task web page", completed: true },
  { id: "3", title: "Learn javascript basic", completed: true },
  { id: "4", title: "Learn HTML Advance", completed: true },
  { id: "5", title: "Medical App UI", completed: true },
  { id: "6", title: "Learn Java", completed: true },
];

const TaskList = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: "https://placehold.co/100x100" }}
          style={styles.profileImage}
        />
        <Text style={styles.greeting}>Hi Twinkle</Text>
        <Text style={styles.subGreeting}>Have a great day ahead</Text>
      </View> */}
      <TextInput
        mode="outlined"
        left={<TextInput.Icon icon="magnify" />}
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#888"
        outlineStyle={{ borderRadius: 30, borderColor: "#ccc", borderWidth: 1 }}
      />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Icon source="check-circle" size={24} color="green" />
              <Text style={styles.taskText}>{item.title}</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.editButton}>✏️</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate("AddJob");
        }}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    fontSize: 24,
    marginRight: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subGreeting: {
    fontSize: 14,
    color: "#888",
  },
  searchInput: {
    height: 40,
    marginBottom: 20,
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
    marginBottom: 10,
    elevation: 5,
  },
  taskText: {
    fontSize: 16,
  },
  editButton: {
    color: "red",
  },
  addButton: {
    backgroundColor: "#00BFFF",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  addButtonText: {
    fontSize: 30,
    color: "#fff",
  },
});

export default TaskList;
