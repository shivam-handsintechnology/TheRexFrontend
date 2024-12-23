import React from 'react'
import { useFieldArray } from 'react-hook-form';

const SocialNetworks = ({ register, control, setValue, errors }) => {

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormProvider)
        name: "socialnetworks", // unique name for your Field Array
    });
    return (
        <div className="register-page mb-5">
            <h3>Social Networks</h3>
            <div className="social-networks-container">
                {fields.map((field, index) => (
                    <div key={field.id} className="social-networkss mb-4">
                        <div className="row">
                            <h3>Network {index + 1}</h3>
                            <div className="col-lg-5">
                                <label>Network Name</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img
                                            className="input-icon"
                                            src="/src/assets/register/companyname.svg"
                                            alt="Network icon"
                                        />
                                    </span>
                                    <select
                                        {...register(`socialnetworks.${index}.type`, {
                                            required: "Network type is required",
                                        })}
                                        onChange={(e) => {
                                            setValue(`socialnetworks.${index}.type`, e.target.value);
                                        }}
                                        className={`form-select ${errors.socialnetworks?.[index]?.type ? "is-invalid" : ""
                                            }`}
                                    >
                                        <option value="">Select Network</option>
                                        <option value="facebook">Facebook</option>
                                        <option value="linkedin">LinkedIn</option>
                                        <option value="twitter">Twitter</option>
                                        <option value="instagram">Instagram</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errors.socialnetworks?.[index]?.type && (
                                        <div className="invalid-feedback">
                                            {errors.socialnetworks[index].type.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <label>URL</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img
                                            className="input-icon"
                                            src="/src/assets/register/companyname.svg"
                                            alt="URL icon"
                                        />
                                    </span>
                                    <input
                                        {...register(`socialnetworks.${index}.url`, {
                                            required: "URL is required",
                                            pattern: {
                                                value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                                                message: "Enter a valid URL",
                                            },
                                        })}
                                        onChange={(e) => {
                                            setValue(`socialnetworks.${index}.url`, e.target.value);
                                        }}
                                        placeholder="Enter URL"
                                        className={`form-control ${errors.socialnetworks?.[index]?.url ? "is-invalid" : ""
                                            }`}
                                    />
                                    {errors.socialnetworks?.[index]?.url && (
                                        <div className="invalid-feedback">
                                            {errors.socialnetworks[index].url.message}
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
                            Remove Network
                        </button>

                    </div>
                ))}
                <button
                    type="button"
                    className="add-button  mt-3"
                    onClick={() => append({ type: "", url: "" })}
                >
                    Add Network
                </button>
            </div>
        </div>
    )
}

export default SocialNetworks
