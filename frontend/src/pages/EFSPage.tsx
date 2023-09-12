import { useState } from "react";
import ImageUploader from "../components/imageUploader/ImageUploader";
import ParallaxPixelStars from "../components/utils/backgrounds/ParallaxPixelStars";
import "./efsPage.css";
import UploadComplete from "../components/uploadComplete/UploadComplete";
import { Image } from "../common/models/imageModel";

function EFSPage() {
  const [isUploadSuccessful, setIsUploadSuccessful] = useState<boolean>(false);
  const [uploadedImages, setUploadedImages] = useState<Image[]>([]);

  console.log(isUploadSuccessful);
  return (
    <div className="EFS-Page">
      <ParallaxPixelStars></ParallaxPixelStars>
      {isUploadSuccessful ? (
        <UploadComplete uploadedImages={uploadedImages}></UploadComplete>
      ) : (
        <ImageUploader
          setIsUploadSuccessful={setIsUploadSuccessful}
          setUploadedImages={setUploadedImages}
        ></ImageUploader>
      )}
    </div>
  );
}

export default EFSPage;
