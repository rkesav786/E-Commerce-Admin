import React, { useState, useEffect } from "react";

const UploadImage = ({ input, label }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  // Add useEffect to handle initial values from redux-form
  useEffect(() => {
    if (input.value && input.value.preview) {
      setImagePreview(input.value.preview);
    }
  }, [input.value]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setUploadedFile(file);
        input.onChange({
          name: file.name,
          size: file.size,
          type: file.type,
          preview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setImagePreview(null);
    setUploadedFile(null);
    input.onChange(null);
  };

  return (
    <div className="upload-image">
      <label className="fs-6 fw-bold mb-1"> {label}</label>
      {imagePreview || (input.value && input.value.preview) ? (
        <div className="image-preview-wrapper">
          <img
            src={imagePreview || input.value.preview}
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
                accept="image/*"
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
              accept="image/*"
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
