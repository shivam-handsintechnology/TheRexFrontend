// Industry Select component with error handling
const IndustrySelect = () => (
    <div className="col-lg-5">
        <label>Industry</label>
        <div className="mb-4 input-group">
            <span className="input-group-text">
                <img className="input-icon" src="/api/placeholder/24/24" alt="Industry icon" />
            </span>
            <Controller
                control={control}
                name="industry"
                defaultValue={[]}
                render={({ field: { onChange, value, ref } }) => (
                    <Select
                        inputRef={ref}
                        value={industryData.filter(c => value?.includes(c.value))}
                        onChange={selectedOptions => {
                            const selectedValues = selectedOptions?.map(option => option.value) || [];
                            onChange(selectedValues);
                        }}
                        options={industryData}
                        isMulti
                        className="select-container"
                        classNamePrefix="select"
                        isDisabled={!Array.isArray(industryData) || industryData.length === 0}
                        placeholder={
                            !Array.isArray(industryData) || industryData.length === 0
                                ? "Loading industries..."
                                : "Select industries"
                        }
                    />
                )}
            />
        </div>
        {errors.industry && (
            <div className="text-danger">
                {errors.industry.message}
            </div>
        )}
    </div>
);