import "./imageUploader.css";
import ImageDropZone from "./ImageDropZone/ImageDropZone";
import { imagesSelector } from "../../recoil/recoilSelectors";
import { useRecoilValue } from "recoil";

function ImageUploader() {
  const images = useRecoilValue(imagesSelector);

  const uploadImage = () => {
    console.log(images);
  };

  return (
    <div className="image-uploader-container">
      <ImageDropZone></ImageDropZone>
      <button className="upload-button" type="button" onClick={uploadImage}>
        Upload
      </button>
    </div>
  );
}

export default ImageUploader;
