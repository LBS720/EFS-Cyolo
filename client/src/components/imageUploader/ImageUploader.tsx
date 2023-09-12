import ImageDropZone from "./ImageDropZone/ImageDropZone";
import { imagesSelector } from "../../recoil/recoilSelectors";
import { useRecoilValue } from "recoil";
import ImagesContainer from "./imagesContainer/ImagesContainer";
import { Image } from "../../../../common/models/imageModel";
import { uploadFile } from "../../services/api";
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
    hasImage();
    hasEmptyRetentionTime();
    const response = uploadFile(images);
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