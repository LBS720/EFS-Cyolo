import { Image } from "../../../../../../common/models/imageModel";
import { imagesState } from "../../../../recoil/recoilAtoms";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useRecoilState } from "recoil";
import { useState } from "react";
import "./imageSetter.css";

interface ImageSetterProps {
  index: number;
  image: Image;
}

function ImageSetter({ index, image }: ImageSetterProps) {
  const [images, setImages] = useRecoilState(imagesState);
  const [selectedDate, setSelectedDate] = useState<Date>();

  const deleteImage = (imageIndex: number) => {
    setImages((prevImages: Image[]) =>
      prevImages.filter((_, index) => index !== imageIndex)
    );
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="image-setter">
      <div className="image" key={index}>
        <span className="delete" onClick={() => deleteImage(index)}>
          &times;
        </span>
        <img src={image.url} alt={image.name} />
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="Time"
          placeholderText="Select Date and Time"
        />
      </div>
    </div>
  );
}

export default ImageSetter;
