import { Image } from "../../../../common/models/imageModel";
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
      <h2>Upload Complete</h2>
      {uploadedImages.map((image) => (
        <div className="image-item">
          <img src={image.url} alt={image.name} />
          <button onClick={() => copyImageUrl(image.url)}>
            Copy Image URL
          </button>
          {copiedImageUrl === image.url && <p>Copied!</p>}
        </div>
      ))}
    </div>
  );
}

export default UploadComplete;
