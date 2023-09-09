import ImageDropZone from "./ImageDropZone/ImageDropZone";
import { imagesSelector } from "../../recoil/recoilSelectors";
import { useRecoilValue } from "recoil";
import ImagesContainer from "./imagesContainer/ImagesContainer";
import "./imageUploader.css";

function ImageUploader() {
  const images = useRecoilValue(imagesSelector);

  const uploadImage = async () => {
    const hasEmptyRetentionTime = images.some(
      (image) => image.retentionTime === ""
    );
    if (hasEmptyRetentionTime) {
      alert("What do you think you do? Please enter Retention Time!");
    }
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
