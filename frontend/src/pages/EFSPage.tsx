import ImageUploader from "../components/imageUploader/ImageUploader";
import ParallaxPixelStars from "../components/utils/backgrounds/ParallaxPixelStars";
import "./efsPage.css";

function EFSPage() {
  return (
    <div className="EFS-Page">
      <ParallaxPixelStars></ParallaxPixelStars>
      <ImageUploader></ImageUploader>
    </div>
  );
}

export default EFSPage;
