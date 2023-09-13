import { useState } from "react";
import ImageUploader from "../components/imageUploader/ImageUploader";
import ParallaxPixelStars from "../components/utils/backgrounds/ParallaxPixelStars";
import "./efsPage.css";
import UploadComplete from "../components/uploadComplete/UploadComplete";
import { Image } from "../common/models/imageModel";
import BounceTitle from "../components/utils/titles/BounceTitle";

function EFSPage() {
  const [isUploadSuccessful, setIsUploadSuccessful] = useState<boolean>(false);
  const [uploadedImages, setUploadedImages] = useState<Image[]>([]);

  return (
    <div className="EFS-Page">
      <BounceTitle></BounceTitle>
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
