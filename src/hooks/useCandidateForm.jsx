import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import swal from "sweetalert";
import {
    useGetCountryListQuery,
    useGetStatesByCountryQuery,
    useGetCitiesByStateQuery,
    useRegisterJobseekerMutation,
} from "@/redux/apiSlice"; // Replace with your actual API hooks path
import { updateForm } from "@/redux/candidateFormSlice";
import { candidateValidationSchema } from "@/utils/validators";
import { useGetFiltersData } from ".";

const useCandidateForm = () => {
    useGetFiltersData(["industryData"]);
    const dispatch = useDispatch();
    const candidateForm = useSelector((state) => state.candidateForm.Form);
    const { industryData } = useSelector((state) => state.filters) || [];
    const [RegisterReqcruiter] = useRegisterJobseekerMutation();

    const {
        register,
        control,
        handleSubmit,
        setValue,
        formState: { errors },
        watch,
    } = useForm({
        resolver: joiResolver(candidateValidationSchema),
        defaultValues: { ...candidateForm }, // Use Redux state as default values
    });

    const { data: CountryList } = useGetCountryListQuery();
    const { data: StatList } = useGetStatesByCountryQuery({
        country_id: watch("country_id") || candidateForm?.country_id,
    });
    const { data: CityList } = useGetCitiesByStateQuery({
        state_id: watch("state_id") || candidateForm?.state_id,
    });

    useEffect(() => {
        const subscription = watch((value) => {
            !value?.profilephoto || !value?.resume && dispatch(updateForm(value)); // Sync form changes with Redux state
        });
        return () => subscription.unsubscribe();
    }, [watch, dispatch]);

    const onSubmit = async (data) => {
        try {
            console.log("data?????", data);
            let formdata = new FormData();
            for (let key in data) {
                if (data[key] instanceof Array) {
                    data[key] = JSON.stringify(data[key]);
                }
                formdata.append(key, data[key]);
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

export default useCandidateForm;
