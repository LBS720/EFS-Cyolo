import { Image } from "../../../../../../common/models/imageModel";
import { imagesState } from "../../../../recoil/recoilAtoms";
import { useRecoilState } from "recoil";
import "./imageSetter.css";
import { ChangeEvent, useState } from "react";

interface ImageSetterProps {
  index: number;
  image: Image;
}

function ImageSetter({ index, image }: ImageSetterProps) {
  const [images, setImages] = useRecoilState(imagesState);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const today = new Date().toISOString().split('T')[0];

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const deleteImage = (imageIndex: number) => {
    setImages((prevImages: Image[]) =>
      prevImages.filter((_, index) => index !== imageIndex)
    );
  };

  return (
    <div className="image-setter">
      <div className="image" key={index}>
        <span className="delete" onClick={() => deleteImage(index)}>
          &times;
        </span>
        <img src={image.url} alt={image.name} />
      </div>
      <div></div>
      <div className="setting-retention-time-container">
        <span>Retetion Time:</span>
      <input
        className="retetion-date-picker"
        type="date"
        id="dateInput"
        name="dateInput"
        min={today}
        value={selectedDate}
        onChange={handleDateChange}
      />      
      </div>
    </div>
  );
}

export default ImageSetter;
