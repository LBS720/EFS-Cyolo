import { Image } from "../../../../../common/models/imageModel";
import { imagesState } from "../../../recoil/recoilAtoms";
import { useRecoilState } from "recoil";
import "./imagesContainer.css";
import React from "react";
import ImageSetter from "./imageSetter/ImageSetter";

function ImagesContainer() {
  const [images, setImages] = useRecoilState(imagesState);

  return (
    <div className="images-container">
      {images.map((image: Image, index: number) => (
        <ImageSetter index={index} image={image}></ImageSetter>
      ))}
    </div>
  );
}

export default ImagesContainer;
