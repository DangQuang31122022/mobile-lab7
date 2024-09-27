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
import { useUserTakeNoteStore } from "../../stores/useUserTakeNoteStore";
import { addTaskService } from "../../services/takeNoteService";
const AddJob = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const { user, addTask } = useUserTakeNoteStore(); // Lấy thông tin user và hàm addTask từ store
  const [job, setJob] = useState(""); // State để lưu công việc mới
  const [loading, setLoading] = useState(false); // State để hiển thị trạng thái loading

  const handleFinish = async () => {
    if (!job.trim()) {
      alert("Please enter a job.");
      return;
    }

    setLoading(true); // Bắt đầu loading khi xử lý thêm công việc

    try {
      // Tạo task mới
      const newTask = {
        title: job,
        completed: false,
      };

      // Gọi API thêm công việc mới lên server
      const addedTask = await addTaskService(newTask);

      // Cập nhật task vào store
      addTask(addedTask);

      // Điều hướng quay lại danh sách công việc sau khi hoàn thành
      navigation.navigate("TaskList");
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Failed to add task. Please try again.");
    } finally {
      setLoading(false); // Kết thúc loading
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {user && (
          <>
            <Avatar.Image size={50} source={{ uri: user.profileImage }} />
            <View style={styles.greeting}>
              <Text style={styles.greetingText}>{user.greeting}</Text>
              <Text style={styles.subText}>{user.subGreeting}</Text>
            </View>
          </>
        )}
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
        editable={!loading} // Không cho chỉnh sửa khi đang loading
      />

      <Button
        mode="contained"
        onPress={handleFinish}
        style={styles.finishButton}
        contentStyle={styles.buttonContent}
        icon="arrow-right"
        loading={loading} // Hiển thị icon loading nếu đang thêm task
        disabled={loading} // Vô hiệu hóa nút khi đang thêm task
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
