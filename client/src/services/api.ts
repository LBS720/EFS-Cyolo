import { upload } from "@testing-library/user-event/dist/upload";
import axios from "axios";

const API_URL = "http://localhost:3000";

export const uploadFile = async (data: any) => {
  try {
    console.log("here");
    let response = await axios.post("http://localhost:3000/v1/file", data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("upload error ", error);
  }
};
