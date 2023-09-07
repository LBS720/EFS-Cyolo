import ImageDropZone from "./ImageDropZone/ImageDropZone";
import { imagesSelector } from "../../recoil/recoilSelectors";
import { useRecoilValue } from "recoil";
import ImagesContainer from "./imagesContainer/ImagesContainer";
import "./imageUploader.css";

function ImageUploader() {
  const images = useRecoilValue(imagesSelector);

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      images.forEach((image, index) => {
        formData.append(image.url, image.name);
      });

      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Upload successful");
      } else {
        console.error("Upload failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
