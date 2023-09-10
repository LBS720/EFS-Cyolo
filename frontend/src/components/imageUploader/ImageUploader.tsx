import ImageDropZone from "./ImageDropZone/ImageDropZone";
import { imagesSelector } from "../../recoil/recoilSelectors";
import { useRecoilValue } from "recoil";
import ImagesContainer from "./imagesContainer/ImagesContainer";
import axios from "axios";
import "./imageUploader.css";

function ImageUploader() {
  const images = useRecoilValue(imagesSelector);

  const uploadImages = async () => {
    const hasEmptyRetentionTime = images.some(
      (image) => image.retentionTime === ""
    );
    if (hasEmptyRetentionTime) {
      alert("Please enter Retention Time for all images.");
      return;
    }

    if (!images) {
      alert("Please select a file to upload.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5006/v1/file",
        { images }, // Serialize the array of images as JSON
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Images uploaded successfully");
      // Handle the response as needed (e.g., show the URLs)
      console.log("Response:", response.data);
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
