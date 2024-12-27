import React from 'react';
import { useFieldArray } from 'react-hook-form';

const CompanyPhotos = ({ register, control, setValue, errors }) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "photos", // unique name for your Field Array
    });

    const handleFileChange = (index, file) => {
        if (file) {
            setValue(`photos.${index}.file`, file);
        }
    };

    return (
        <div className="register-page mb-5">
            <h3>Company Photos</h3>
            <div className="photos-container">
                {fields.map((field, index) => (
                    <div key={field.id} className="photo-item mb-4">
                        <div className="row">
                            <h4>Photo {index + 1}</h4>
                            <div className="col-lg-10">
                                <label>Upload Photo</label>
                                <div className="mb-4 input-group">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        {...register(`photos.${index}.file`, {
                                            required: "Photo is required",
                                        })}
                                        onChange={(e) => handleFileChange(index, e.target.files[0])}
                                        className={`form-control ${errors.photos?.[index]?.file ? "is-invalid" : ""}`}
                                    />
                                    {errors.photos?.[index]?.file && (
                                        <div className="invalid-feedback">
                                            {errors.photos[index].file.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="remove-button btn btn-danger"
                            onClick={() => remove(index)}
                        >
                            Remove Photo
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="add-button btn btn-primary mt-3"
                    onClick={() => append({ file: null })}
                >
                    Add Photo
                </button>
            </div>
        </div>
    );
};

export default CompanyPhotos;
