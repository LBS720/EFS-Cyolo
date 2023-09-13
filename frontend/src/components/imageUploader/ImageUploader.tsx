import ImageDropZone from "./ImageDropZone/ImageDropZone";
import { imagesSelector } from "../../recoil/recoilSelectors";
import { useRecoilValue } from "recoil";
import ImagesContainer from "./imagesContainer/ImagesContainer";
import { Image } from "../../common/models/imageModel";
import axios from "axios";
import "./imageUploader.css";
import { formControlClasses } from "@mui/material";

interface ImageUploaderPorps {
  setIsUploadSuccessful: (value: boolean) => void;
  setUploadedImages: (value: Image[]) => void;
}

function ImageUploader({
  setIsUploadSuccessful,
  setUploadedImages,
}: ImageUploaderPorps) {
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

  const uploadImages = () => {
    hasImage();
    hasEmptyRetentionTime();

    console.log(images);

    const formData = new FormData();

    images.forEach((image, index) => {
      formData.append("id", image.id);
      formData.append("name", image.name);
      formData.append("image", image.file);
      formData.append("retentionTime", image.retentionTime);
    });

    try {
      axios.post(
        "http://localhost:5006/v1/file",
        { formData },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //need to check 201
      setUploadedImages(images);
      setIsUploadSuccessful(true);
    } catch (error) {
      console.error("Error uploading images:", error);
      setIsUploadSuccessful(false);
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
