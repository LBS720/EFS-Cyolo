import ImageDropZone from "./ImageDropZone/ImageDropZone";
import { imagesSelector } from "../../recoil/recoilSelectors";
import { useRecoilValue } from "recoil";
import ImagesContainer from "./imagesContainer/ImagesContainer";
import axios from "axios";
import "./imageUploader.css";

function ImageUploader() {
  const images = useRecoilValue(imagesSelector);

  const hasImage = () => {
    if (!images) {
      alert("Please select a file to upload.");
      return;
    }
  }

  const hasEmptyRetentionTime = () => {
      const hasEmptyRetentionTime = images.some(
        (image) => image.retentionTime === ""
      );
      if (hasEmptyRetentionTime) {
        alert("Please enter Retention Time for all images.");
        return;
      }
  }

  const uploadImages = async () => {
    hasImage();
    hasEmptyRetentionTime();

    try {
      const response = await axios.post(
        "http://localhost:5006/v1/file",
        { images }, 
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };
  


  return (
    <div className="image-uploader-container">
      <ImageDropZone></ImageDropZone>
      <ImagesContainer></ImagesContainer>
      <button className="upload-button" type="button" onClick={uploadImages}>
        Upload
      </button>
    </div>
  );
}

export default ImageUploader;
