// // App.tsx
// import React, { useState } from "react";
// import {
//   SafeAreaView,
//   View,
//   Text,
//   FlatList,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { Icon } from "react-native-paper";

// interface Task {
//   id: string;
//   title: string;
//   completed: boolean;
// }

// const TestAI = () => {
//   const [tasks, setTasks] = useState<Task[]>([
//     { id: "1", title: "To check email", completed: true },
//     { id: "2", title: "UI task web page", completed: true },
//     { id: "3", title: "Learn javascript basic", completed: true },
//     { id: "4", title: "Learn HTML Advance", completed: true },
//     { id: "5", title: "Medical App UI", completed: true },
//     { id: "6", title: "Learn Java", completed: true },
//   ]);

//   const renderItem = ({ item }: { item: Task }) => (
//     <View style={styles.taskItem}>
//       <Icon source="checkbox-outline" size={20} color="green" />
//       <Text style={styles.taskText}>{item.title}</Text>
//       <TouchableOpacity>
//         <Icon source="pencil" size={20} color="red" />
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <Icon source="arrow-back-outline" size={24} color="black" />
//         </TouchableOpacity>
//         <View style={styles.profileContainer}>
//           <Image
//             source={{ uri: "https://example.com/user-image.png" }} // Replace with your image URL
//             style={styles.profileImage}
//           />
//           <View>
//             <Text style={styles.greetingText}>Hi Twinkle</Text>
//             <Text style={styles.subText}>Have a great day ahead</Text>
//           </View>
//         </View>
//       </View>

//       <TextInput style={styles.searchBar} placeholder="Search" />

//       <FlatList
//         data={tasks}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         style={styles.taskList}
//       />

//       <TouchableOpacity style={styles.addButton}>
//         <Icon source="add" size={24} color="white" />
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 16,
//   },
//   profileContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginLeft: 16,
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   greetingText: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   subText: {
//     fontSize: 14,
//     color: "gray",
//   },
//   searchBar: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 16,
//     margin: 16,
//   },
//   taskList: {
//     flex: 1,
//   },
//   taskItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f0f0f0",
//     padding: 16,
//     borderRadius: 8,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   taskText: {
//     flex: 1,
//     marginLeft: 16,
//     fontSize: 16,
//     color: "black",
//   },
//   addButton: {
//     position: "absolute",
//     bottom: 30,
//     right: 30,
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: "#00bfff",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default TestAI;

// import React from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// interface Task {
//   id: string;
//   title: string;
// }

// const tasks: Task[] = [
//   { id: "1", title: "To check email" },
//   { id: "2", title: "UI task web page" },
//   { id: "3", title: "Learn javascript basic" },
//   { id: "4", title: "Learn HTML Advance" },
//   { id: "5", title: "Medical App UI" },
//   { id: "6", title: "Learn Java" },
// ];

// const TestAI: React.FC = () => {
//   const renderTask = ({ item }: { item: Task }) => (
//     <View style={styles.taskItem}>
//       <View style={styles.checkBox}>
//         <Text style={styles.checkMark}>✓</Text>
//       </View>
//       <Text style={styles.taskTitle}>{item.title}</Text>
//       <TouchableOpacity style={styles.editButton}>
//         <Text style={styles.editIcon}>✎</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <Text style={styles.backButton}>←</Text>
//         </TouchableOpacity>
//         <View style={styles.profileContainer}>
//           <Image
//             source={{ uri: "https://example.com/profile-image.jpg" }}
//             style={styles.profileImage}
//           />
//           <View>
//             <Text style={styles.greeting}>Hi Twinkle</Text>
//             <Text style={styles.subGreeting}>Have agrate day a head</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.searchBar}>
//         <Text style={styles.searchIcon}>🔍</Text>
//         <Text style={styles.searchPlaceholder}>Search</Text>
//       </View>
//       <FlatList
//         data={tasks}
//         renderItem={renderTask}
//         keyExtractor={(item) => item.id}
//       />
//       <TouchableOpacity style={styles.addButton}>
//         <Text style={styles.addButtonText}>+</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 16,
//   },
//   backButton: {
//     fontSize: 24,
//     marginRight: 16,
//   },
//   profileContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   profileImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 12,
//   },
//   greeting: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   subGreeting: {
//     fontSize: 14,
//     color: "#666",
//   },
//   searchBar: {
//     flexDirection: "row",
//     alignItems: "center",
//     margin: 16,
//     padding: 8,
//     backgroundColor: "#f0f0f0",
//     borderRadius: 8,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchPlaceholder: {
//     color: "#999",
//   },
//   taskItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: "#eee",
//   },
//   checkBox: {
//     width: 24,
//     height: 24,
//     borderWidth: 1,
//     borderColor: "#4CAF50",
//     borderRadius: 4,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 12,
//   },
//   checkMark: {
//     color: "#4CAF50",
//   },
//   taskTitle: {
//     flex: 1,
//     fontSize: 16,
//   },
//   editButton: {
//     padding: 4,
//   },
//   editIcon: {
//     fontSize: 18,
//     color: "#999",
//   },
//   addButton: {
//     position: "absolute",
//     right: 16,
//     bottom: 16,
//     width: 56,
//     height: 56,
//     borderRadius: 28,
//     backgroundColor: "#2196F3",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   addButtonText: {
//     fontSize: 32,
//     color: "#fff",
//   },
// });

// export default TestAI;

import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Task {
  id: string;
  title: string;
}

const tasks: Task[] = [
  { id: "1", title: "To check email" },
  { id: "2", title: "UI task web page" },
  { id: "3", title: "Learn javascript basic" },
  { id: "4", title: "Learn HTML Advance" },
  { id: "5", title: "Medical App UI" },
  { id: "6", title: "Learn Java" },
];

export default function TestAI() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: "https://via.placeholder.com/40" }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.greeting}>Hi Twinkle</Text>
            <Text style={styles.subGreeting}>Have agrate day a head</Text>
          </View>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="gray"
        />
      </View>

      <ScrollView style={styles.taskList}>
        {tasks.map((task) => (
          <View key={task.id} style={styles.taskItem}>
            <View style={styles.taskLeft}>
              <Ionicons name="checkmark-circle" size={24} color="green" />
              <Text style={styles.taskTitle}>{task.title}</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="pencil" size={20} color="gray" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subGreeting: {
    fontSize: 14,
    color: "gray",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    margin: 16,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  taskList: {
    flex: 1,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  taskLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskTitle: {
    marginLeft: 12,
    fontSize: 16,
  },
  addButton: {
    position: "absolute",
    right: 24,
    bottom: 24,
    backgroundColor: "#00bcd4",
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
});
