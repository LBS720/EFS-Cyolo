import { upload } from "@testing-library/user-event/dist/upload";
import axios from "axios";

const API_URL = "";

export const uploadFile = async (data: any) => {
  try {
    let response = await axios.post("{API_URL}/v1/file", data);
    return response.data;
  } catch (error) {
    console.error("upload error ", error);
  }
};
