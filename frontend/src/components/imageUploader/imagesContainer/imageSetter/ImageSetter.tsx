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
  const retentionTimeOptions: string[] = [
    "Don't autodelete",
    "After 5 minutes",
    "After 10 minutes",
    "After 15 minutes",
    "After 30 minutes",
    "After 1 hour",
    "After 3 hours",
    "After 6 hours",
    "After 12 hours",
    "After 1 day",
    "After 2 day",
    "After 3 day",
    "After 4 day",
    "After 5 day",
    "After 6 day",
    "After 1 week",
    "After 2 week",
    "After 3 week",
    "After 1 month",
    "After 2 month",
    "After 3 month",
    "After 4 month",
    "After 5 month",
    "After 6 month",
  ];

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
