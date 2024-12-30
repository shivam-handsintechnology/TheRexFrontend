import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import swal from "sweetalert";
import {
    useGetCountryListQuery,
    useGetStatesByCountryQuery,
    useGetCitiesByStateQuery,
    useRegisterRecruiterMutation,
} from "@/redux/apiSlice"; // Replace with your actual API hooks path
import { updateForm } from "@/redux/EmployerFormSlice";
import { EmployerSchema } from "@/utils/validators";
import { useGetFiltersData } from "..";

const useEmployerForm = () => {
    useGetFiltersData(["industryData"]);
    const EmployerForm = useSelector((state) => state.EmployerForm.Form);
    const { industryData } = useSelector((state) => state.filters) || [];
    const [RegisterReqcruiter,] = useRegisterRecruiterMutation();

    const {
        register,
        control,
        handleSubmit,
        setValue,
        formState: { errors },
        watch,
    } = useForm({
        resolver: joiResolver(EmployerSchema),
        defaultValues: { ...EmployerForm }, // Use Redux state as default values
    });

    const { data: CountryList } = useGetCountryListQuery();
    const { data: StatList } = useGetStatesByCountryQuery({
        country_id: watch("country_id") || EmployerForm?.country_id,
    });
    const { data: CityList } = useGetCitiesByStateQuery({
        state_id: watch("state_id") || EmployerForm?.state_id,
    });


    console.log("logo", watch("photos"))
    const onSubmit = async (data) => {
        try {
            console.log("data?????", data);
            let formdata = new FormData();
            for (let key in data) {
                if (data[key] instanceof Array) {
                    if (key === "photos" || key === "videos") {
                        for (let i = 0; i < data[key].length; i++) {
                            formdata.append(key, data[key][i]);
                        }
                    } else {
                        data[key] = JSON.stringify(data[key]);
                        formdata.append(key, data[key]);
                    }
                } else {

                    formdata.append(key, data[key]);
                }

            }
            const response = await RegisterReqcruiter(formdata).unwrap();
            console.log({ response });
            swal({ text: response?.message || "Registered Successfully", icon: "success" });
        } catch (error) {
            console.log({ error });
            swal({ text: error?.data?.message || error?.message, icon: "warning" });
        }
    };

    return {
        register,
        control,
        handleSubmit,
        setValue,
        errors,
        watch,
        CountryList,
        StatList,
        CityList,
        industryData,
        onSubmit,
    };
};

export default useEmployerForm;
