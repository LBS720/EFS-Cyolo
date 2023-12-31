import ImageDropZone from "./ImageDropZone/ImageDropZone";
import { imagesSelector } from "../../recoil/recoilSelectors";
import { useRecoilValue } from "recoil";
import ImagesContainer from "./imagesContainer/ImagesContainer";
import { Image } from "../../common/models/imageModel";
import axios from "axios";
import "./imageUploader.css";

interface ImageUploaderPorps {
  setIsUploadSuccessful: (value: boolean) => void;
  setUploadedImages: (value: Image[]) => void;
}

function ImageUploader({
  setIsUploadSuccessful,
  setUploadedImages,
}: ImageUploaderPorps) {
  const images = useRecoilValue(imagesSelector);

  const hasImage = () => {
    if (images.length === 0) {
      alert("Please select a file to upload.");
      return true;
    }
    return false;
  };

  const hasEmptyRetentionTime = () => {
    const hasEmptyRetentionTime = images.some(
      (image) => image.retentionTime === ""
    );
    if (hasEmptyRetentionTime) {
      alert("Please enter Retention Time for all images.");
      return true;
    }
    return false;
  };

  const uploadImages = async () => {
    if (hasImage() || hasEmptyRetentionTime()) {
      return null;
    }
    try {
      const formDataArray: any[] = [];

      images.forEach((image, index) => {
        const formData = new FormData();
        formData.append("id", image.id);
        formData.append("name", image.name);
        formData.append("image", image.file);
        formData.append("retentionTime", image.retentionTime);
        formDataArray.push(formData);

        axios.post("http://localhost:5006/v1/file", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      });
      await Promise.all(formDataArray);
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
