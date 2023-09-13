import { Image } from "../../../common/models/imageModel";
import { imagesState } from "../../../recoil/recoilAtoms";
import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import "./imageDropZone.css";
const { v4: uuidv4 } = require("uuid");

function ImageDropZone() {
  const [isDragging, setIsDragging] = useState(false);
  const [images, setImages] = useRecoilState(imagesState);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const selectFiles = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const setImageToUpload = (files: FileList) => {
    setImages((prevImages: Image[]) => [
      ...prevImages,
      ...Array.from(files)
        .filter((file) => file.type.startsWith("image/"))
        .filter((file) => !prevImages.some((e) => e.name === file.name))
        .map((file) => ({
          id: uuidv4(),
          name: file.name,
          file: file,
          url: URL.createObjectURL(file),
          retentionTime: "",
        })),
    ]);
  };

  const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    setImageToUpload(files);
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  };

  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    if (!files || files.length === 0) return;
    setImageToUpload(files);
  };

  return (
    <div
      className="drag-area"
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {isDragging ? (
        <span className="select">Drop image here</span>
      ) : (
        <>
          Drag & Drop image here or {""}
          <span className="select" role="button" onClick={selectFiles}>
            Browse
          </span>
        </>
      )}
      <input
        name="image"
        type="file"
        className="file"
        multiple
        onChange={onFileSelect}
        ref={imageInputRef}
      />
    </div>
  );
}

export default ImageDropZone;
