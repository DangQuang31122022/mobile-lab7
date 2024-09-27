import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import TaskManagementScreen1 from "./screens/takenote/Screen1";
import TaskList from "./screens/takenote/Screen2";
import TestAI from "./screens/takenote/testAI";
import AddJob from "./screens/takenote/Screen3";
import { useUserTakeNoteStore } from "./stores/useUserTakeNoteStore";
const takenoteHeader = () => {
  const { user } = useUserTakeNoteStore(); // Lấy thông tin người dùng từ store

  // Kiểm tra xem user có tồn tại không
  if (!user) return null;
  return (
    <View style={takenoteStyles.header}>
      {/* <TouchableOpacity>
        <Text style={takenoteStyles.backButton}>←</Text>
      </TouchableOpacity> */}
      <Image
        source={{ uri: "https://picsum.photos/700" }}
        style={takenoteStyles.profileImage}
      />
      <View>
        <Text style={takenoteStyles.greeting}>Hi {user.name}</Text>
        <Text style={takenoteStyles.subGreeting}>Have a great day ahead</Text>
      </View>
    </View>
  );
};

const RootStack = createNativeStackNavigator({
  screens: {
    TaskManagementScreen1: TaskManagementScreen1,
    TaskList: {
      screen: TaskList,
      options: {
        headerRight: takenoteHeader,
        headerTitle: "",
      },
    },
    AddJob: {
      screen: AddJob,
      options: {
        headerShown: false,
      },
    },
    TestAI: {
      screen: TestAI,
      options: {
        headerShown: false,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);
export default function App() {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
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

const takenoteStyles = StyleSheet.create({
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
});
