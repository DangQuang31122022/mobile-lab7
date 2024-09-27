import { create } from "zustand";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface User {
  id: string;
  name: string;
  profileImage: string;
  greeting: string;
  subGreeting: string;
}

interface UserTakeNoteState {
  user: User | null;
  tasks: Task[];
  setUser: (user: User) => void;
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  completeTask: (taskId: string) => void;
}

export const useUserTakeNoteStore = create<UserTakeNoteState>((set) => ({
  user: null,
  tasks: [],

  setUser: (user: User) => set(() => ({ user })),

  setTasks: (tasks: Task[]) => set(() => ({ tasks })),

  addTask: (task: Task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  completeTask: (taskId: string) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    })),
}));
