import axiosConfig from "./axiosConfig";

interface Donut {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  type: string;
}

// Lấy danh sách tất cả donuts
export const getAllDonuts = async (): Promise<Donut[]> => {
  try {
    const response = await axiosConfig.get<Donut[]>("/donuts");
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch donuts: ${error}`);
  }
};

// Lấy danh sách donuts theo type (filter)
export const getDonutsByType = async (type: string): Promise<Donut[]> => {
  try {
    const response = await axiosConfig.get<Donut[]>(`/donuts?type=${type}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch donuts by type: ${error}`);
  }
};

// Lấy chi tiết của một donut
export const getDonutById = async (id: number): Promise<Donut> => {
  try {
    const response = await axiosConfig.get<Donut>(`/donuts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch donut by id: ${error}`);
  }
};

// Tạo mới một donut
export const createDonut = async (donut: Donut): Promise<Donut> => {
  try {
    const response = await axiosConfig.post<Donut>("/donuts", donut);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to create donut: ${error}`);
  }
};

// Cập nhật thông tin một donut
export const updateDonut = async (
  id: number,
  donut: Partial<Donut>
): Promise<Donut> => {
  try {
    const response = await axiosConfig.put<Donut>(`/donuts/${id}`, donut);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to update donut: ${error}`);
  }
};

// Xóa một donut
export const deleteDonut = async (id: number): Promise<void> => {
  try {
    await axiosConfig.delete(`/donuts/${id}`);
  } catch (error) {
    throw new Error(`Failed to delete donut: ${error}`);
  }
};
