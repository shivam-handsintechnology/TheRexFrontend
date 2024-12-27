import React, { useState } from "react";

const CompanyPhotos = ({ register, control, setValue, errors }) => {
    const [selectedPhotos, setSelectedPhotos] = useState([]); // Stores the File objects
    const [previewPhotos, setPreviewPhotos] = useState([]); // Stores the preview URLs

    const formatFileSize = (bytes, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };

    const handleFileInput = (e) => {
        const files = Array.from(e.target.files);

        const newPreviews = [];
        const newFiles = [];

        files.forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                newPreviews.push({
                    id: Date.now() + Math.random(),
                    name: file.name,
                    type: file.type,
                    size: formatFileSize(file.size),
                    preview: reader.result,
                });

                if (newPreviews.length === files.length) {
                    // Update the previews once all are processed
                    setPreviewPhotos((prev) => [...prev, ...newPreviews]);
                }
            };

            newFiles.push(file);
            reader.readAsDataURL(file);
        });

        setSelectedPhotos((prev) => {
            const updatedFiles = [...prev, ...newFiles];
            setValue("photos", updatedFiles); // Update the form's value
            return updatedFiles;
        });
    };

    const removeSelectedPhoto = (id) => {
        setPreviewPhotos((prev) => prev.filter((photo) => photo.id !== id));
        setSelectedPhotos((prev) => {
            const updatedFiles = prev.filter((_, index) => previewPhotos[index]?.id !== id);
            setValue("photos", updatedFiles); // Update the form's value
            return updatedFiles;
        });
    };

    return (
        <div className="register-page mb-5">
            <h5 >Company Photos</h5>
            <div className="social-networks-container">
                {/* Hidden file input */}
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileInput}
                    id="fileInput"
                    className="d-none"
                />
                {/* Custom Button */}
                <button
                    type="button"
                    className="add-button mt-3"
                    onClick={() => document.getElementById("fileInput").click()}
                >
                    Browse
                </button>
            </div>
            <div className="row">
                {previewPhotos.map((photo) => (
                    <div key={photo.id} className="col-md-3 mb-3">
                        <div className="card">
                            <img
                                src={photo.preview}
                                alt={photo.name}
                                className="card-img-top"
                                style={{ height: "150px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <p className="card-text small">{photo.name}</p>
                                <button
                                    type="button"
                                    className="btn btn-danger btn-sm"
                                    onClick={() => removeSelectedPhoto(photo.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyPhotos;
