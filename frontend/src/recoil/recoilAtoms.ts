import { atom } from "recoil";
import { Image } from "../../../common/models/imageModel";

export const imagesState = atom<Image[]>({
  key: "imagesState",
  default: [],
});
