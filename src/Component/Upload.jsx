import React, { useState } from "react";

const UploadImage = ({ input, label }) => {
  const [imagePreview, setImagePreview] = useState(null); // For previewing the image
  const [uploadedFile, setUploadedFile] = useState(null); // Local state for the actual file

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set image preview
        setUploadedFile(file); // Store the actual file (optional for backend uploads)
        input.onChange({
          name: file.name,
          size: file.size,
          type: file.type,
          preview: reader.result, // Store only immutable data in Redux Form
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setImagePreview(null); // Clear preview
    setUploadedFile(null); // Clear file
    input.onChange(null); // Reset Redux Form value
  };

  return (
    <div className="upload-image">
      <label>{label}</label>
      {imagePreview ? (
        <div className="image-preview-wrapper">
          <img
            src={imagePreview}
            alt="Preview"
            className="image-preview"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <div>
            <button
              type="button"
              className="btn btn-danger btn-sm mt-2 me-2"
              onClick={handleDeleteImage}
            >
              Delete Image
            </button>
            <label className="btn btn-secondary btn-sm mt-2">
              Replace Image
              <input
                type="file"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </label>
          </div>
        </div>
      ) : (
        <div>
          <label className="btn btn-primary btn-sm">
            Upload Image
            <input
              type="file"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
