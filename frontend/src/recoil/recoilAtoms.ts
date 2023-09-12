import { atom } from "recoil";
import { Image } from "../models/imageModel";

export const imagesState = atom<Image[]>({
  key: "imagesState",
  default: [],
});
