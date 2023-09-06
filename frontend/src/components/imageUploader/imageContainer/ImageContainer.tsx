import "./imageUploader.css";
import { Image } from "../../../../../common/models/imageModel";
import { imagesState } from "../../../recoil/recoilAtoms";

function ImageContainer() {
  const [images, setImages] = useRecoilState(imagesState);

  const deleteImage = (imageIndex: number) => {
    setImages((prevImages: Image[]) =>
      prevImages.filter((_, index) => index !== imageIndex)
    );
  };

  return (
    <div className="container">
      {images.map((image: Image, index: number) => (
        <div className="image" key={index}>
          <span className="delete" onClick={() => deleteImage(index)}>
            &times;
          </span>
          <img src={image.url} alt={image.name} />
        </div>
      ))}
    </div>
  );
}

export default ImageContainer;
function useRecoilState(imagesState: any): [any, any] {
  throw new Error("Function not implemented.");
}
