import ImageDropZone from "./ImageDropZone/ImageDropZone";
import { imagesSelector } from "../../recoil/recoilSelectors";
import { useRecoilValue } from "recoil";
import ImagesContainer from "./imagesContainer/ImagesContainer";
import axios from "axios";
import "./imageUploader.css";

interface ImageUploaderPorps {
  setIsUploadSuccessful: (value: boolean) => void;
}

function ImageUploader({ setIsUploadSuccessful }: ImageUploaderPorps) {
  const images = useRecoilValue(imagesSelector);
  const hasImage = () =>
    images.length === 0 && alert("Please select a file to upload.");

  const hasEmptyRetentionTime = () => {
    const hasEmptyRetentionTime = images.some(
      (image) => image.retentionTime === ""
    );
    return (
      hasEmptyRetentionTime &&
      alert("Please enter Retention Time for all images.")
    );
  };

  const uploadImages = async () => {
    console.log("here");
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
      // Log the numeric status code
      console.log("Status Code:", response.status);

      // Log the status text
      console.log("Status Text:", response.statusText);
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
