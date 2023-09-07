import "./imageUploader.css";
import ImageDropZone from "./ImageDropZone/ImageDropZone";
import { imagesSelector } from "../../recoil/recoilSelectors";
import { useRecoilValue } from "recoil";
import ImagesContainer from "./imagesContainer/ImagesContainer";

function ImageUploader() {
  const images = useRecoilValue(imagesSelector);

  const uploadImage = () => {
    console.log(images);
  };

  return (
    <div className="image-uploader-container">
      <ImageDropZone></ImageDropZone>
      <ImagesContainer></ImagesContainer>
      <button className="upload-button" type="button" onClick={uploadImage}>
        Upload
      </button>
    </div>
  );
}

export default ImageUploader;
