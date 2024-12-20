import React from "react";
import { useFieldArray, Controller } from "react-hook-form";

function TestAray({ register, control, setValue, errors, watch }) {
    const { fields, append } = useFieldArray({
        control,
        name: "floors"
    });

    const handlePrimaryFloorChange = (newPrimaryIndex) => {
        fields.forEach((_, index) => {
            setValue(`floors.${index}.primary`, index === newPrimaryIndex);
        });
    };

    const floors = watch("floors");

    return (
        <div className="register-page mb-5">
            <h3 className="text-xl font-semibold mb-4">Field Array</h3>
            <p className="text-gray-600 mb-4">The following demo allows you to delete, append, and manage items</p>

            <ul className="space-y-4">
                {fields.map((item, index) => (
                    <li key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex-grow">
                            <input
                                {...register(`floors.${index}.test`)}
                                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter test value"
                            />
                            <p className="mt-1 text-sm text-gray-600">
                                Current value: {floors?.[index]?.test}
                            </p>
                        </div>

                        <Controller
                            name={`floors.${index}.primary`}
                            control={control}
                            defaultValue={item.primary || false}
                            render={({ field }) => (
                                <button
                                    type="button"
                                    onClick={() => handlePrimaryFloorChange(index)}
                                    className={`px-4 py-2 rounded ${field.value
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 text-gray-700'
                                        } hover:opacity-90 transition-opacity`}
                                >
                                    {field.value ? 'Primary' : 'Mark as Primary'}
                                </button>
                            )}
                        />
                    </li>
                ))}
            </ul>

            <div className="mt-4">
                <button
                    type="button"
                    onClick={() => append({ primary: false, test: '' })}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                    Add New Item
                </button>
            </div>
        </div>
    );
}

export default TestAray;