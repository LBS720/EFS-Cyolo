import { Image } from "../../../../../../common/models/imageModel";
import { imagesState } from "../../../../recoil/recoilAtoms";
import { useRecoilState } from "recoil";
import "./imageSetter.css";
import DatePicker from "../../../utils/datePickers/DatePicker";
import { useEffect, useState } from "react";

interface ImageSetterProps {
  index: number;
  image: Image;
}

function ImageSetter({ index, image }: ImageSetterProps) {
  const [images, setImages] = useRecoilState<Image[]>(imagesState);
  const [datePicker, setDatePicker] = useState<string>("");

  console.log(datePicker);
  console.log(images);

  useEffect(() => {
    const updatedImages = [...images];
    updatedImages[index] = {
      ...updatedImages[index],
      retentionTime: datePicker,
    };
    setImages(updatedImages);
    console.log(images);
  }, [datePicker, setDatePicker]);

  const deleteImage = (imageIndex: number) => {
    setImages((prevImages: Image[]) =>
      prevImages.filter((_, index) => index !== imageIndex)
    );
  };

  return (
    <div className="image-setter">
      <div className="image" key={index}>
        <span id="delete" onClick={() => deleteImage(index)}>
          &times;
        </span>
        <img src={image.url} alt={image.name} />
      </div>
      <div></div>
      <div className="setting-retention-time-container">
        <span id="retention-time-title">Retetion Time:</span>
        <DatePicker onDateChange={setDatePicker}></DatePicker>
      </div>
    </div>
  );
}

export default ImageSetter;
