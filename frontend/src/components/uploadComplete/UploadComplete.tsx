import { Image } from "../../common/models/imageModel";
import React, { useState } from "react";
import "./uploadComplete.css";

interface UploadCompleteProps {
  uploadedImages: Image[];
}

function UploadComplete({ uploadedImages }: UploadCompleteProps) {
  const [copiedImageUrl, setCopiedImageUrl] = useState<string | null>(null);

  const copyImageUrl = (imageUrl: string) => {
    navigator.clipboard.writeText(imageUrl).then(() => {
      setCopiedImageUrl(imageUrl);
    });
  };

  return (
    <div className="upload-complete-container">
      <h2>Upload Complete !</h2>
      {uploadedImages.map((image) => (
        <div className="image-item" key={image.id}>
          <img key={image.id} src={image.url} alt={image.name} />
          <button
            className="copy-url-button"
            onClick={() => copyImageUrl("http://localhost:5006/v1/" + image.id)}
          >
            Copy Image URL
          </button>
          <span id="copied-alert">
            {copiedImageUrl === image.url && <p>Copied!</p>}
          </span>
        </div>
      ))}
    </div>
  );
}

export default UploadComplete;
