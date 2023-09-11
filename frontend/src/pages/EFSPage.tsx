import { useState } from "react";
import ImageUploader from "../components/imageUploader/ImageUploader";
import ParallaxPixelStars from "../components/utils/backgrounds/ParallaxPixelStars";
import "./efsPage.css";
import UploadComplete from "../components/uploadComplete/UploadComplete";

function EFSPage() {
  const [isUploadSuccessful, setIsUploadSuccessful] = useState<boolean>(false);
  console.log(isUploadSuccessful);
  return (
    <div className="EFS-Page">
      <ParallaxPixelStars></ParallaxPixelStars>
      {isUploadSuccessful ? (
        <UploadComplete></UploadComplete>
      ) : (
        <ImageUploader
          setIsUploadSuccessful={setIsUploadSuccessful}
        ></ImageUploader>
      )}
    </div>
  );
}

export default EFSPage;
