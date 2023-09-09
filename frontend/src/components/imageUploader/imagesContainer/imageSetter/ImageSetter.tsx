import { Image } from "../../../../../../common/models/imageModel";
import { imagesState } from "../../../../recoil/recoilAtoms";
import { useRecoilState } from "recoil";
import "./imageSetter.css";
import DatePicker from "../../../utils/datePickers/DatePicker";

interface ImageSetterProps {
  index: number;
  image: Image;
}

function ImageSetter({ index, image }: ImageSetterProps) {
  const [images, setImages] = useRecoilState(imagesState);

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
        <DatePicker></DatePicker>
      </div>
    </div>
  );
}

export default ImageSetter;
