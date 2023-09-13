import React, { useCallback, useEffect, useState } from "react";
import { Image } from "../../../../common/models/imageModel";
import { imagesState } from "../../../../recoil/recoilAtoms";
import { useRecoilState } from "recoil";
import "./imageSetter.css";
import DatePicker from "../../../utils/datePickers/DatePicker";

interface ImageSetterProps {
  index: number;
  image: Image;
}

function ImageSetter({ index, image }: ImageSetterProps) {
  const [images, setImages] = useRecoilState<Image[]>(imagesState);
  const [datePicker, setDatePicker] = useState<string>(image.retentionTime); // Initialize DatePicker with the image's retention time

  useEffect(() => {
    const updatedImages = [...images];
    updatedImages[index] = {
      ...updatedImages[index],
      retentionTime: datePicker,
    };
    setImages(updatedImages);
  }, [datePicker, setImages, index]);

  const deleteImage = useCallback(
    (imageIndex: number) => {
      setImages((prevImages: Image[]) =>
        prevImages.filter((_, id) => id !== imageIndex)
      );
    },
    [setImages]
  );

  console.log(images);

  return (
    <div className="image-setter">
      <div className="image" key={`image-${index}`}>
        <span id="delete" onClick={() => deleteImage(index)}>
          &times;
        </span>
        <form action="/file" method="POST" encType="multipart/form-data">
          <img src={image.url} alt={image.name} />
        </form>
      </div>
      <div></div>
      <div className="setting-retention-time-container">
        <span id="retention-time-title">Retention Time:</span>
        <DatePicker onDateChange={setDatePicker}></DatePicker>
      </div>
    </div>
  );
}

export default ImageSetter;
