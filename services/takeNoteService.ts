// Thay thế bằng URL của bạn

import axiosConfig from "./axiosConfig";

// Hàm lấy danh sách tất cả các task
export const getTasks = async () => {
  try {
    const response = await axiosConfig.get("/tasks");
    console.log("Tasks:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

// Hàm thêm một công việc mới
export const addTaskService = async (newTask: {
  title: string;
  completed: boolean;
}) => {
  try {
    const response = await axiosConfig.post(`/tasks`, newTask);
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

// Hàm cập nhật một công việc theo id
export const updateTask = async (
  taskId: string,
  updatedTask: { title: string; completed: boolean }
) => {
  try {
    const response = await axiosConfig.put(`/tasks/${taskId}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error(`Error updating task with id ${taskId}:`, error);
    throw error;
  }
};

// Hàm xóa một công việc theo id
export const deleteTask = async (taskId: string) => {
  try {
    const response = await axiosConfig.delete(`/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting task with id ${taskId}:`, error);
    throw error;
  }
};

// Hàm hoàn thành một công việc theo id
export const completeTaskService = async (taskItem: {
  id: string;
  title: string;
  completed: boolean;
}) => {
  try {
    const response = await axiosConfig.put(`/tasks/${taskItem.id}`, {
      ...taskItem,
      completed: !taskItem.completed,
    });
    return response.data;
  } catch (error) {
    console.error(`Error completing task with id ${taskItem.id}:`, error);
    throw error;
  }
};
