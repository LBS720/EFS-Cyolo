import { selector } from "recoil";
import { imagesState } from "./recoilAtoms";
import { Image } from "../common/models/imageModel";

export const imagesSelector = selector<Image[]>({
  key: "imagesSelector",
  get: ({ get }) => {
    const images = get(imagesState);
    return images;
  },
});

export const getImageByName = selector({
  key: "getImageByName",
  get:
    ({ get }) =>
    (imageName: string) => {
      const images = get(imagesState);
      return images.find((image) => image.name === imageName) || null;
    },
});
