import InitialData from '@/utils/initialData';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Form: InitialData.EmployerForm,
    Loading: false
};

const EmployerformSlice = createSlice({
    name: 'Employerform',
    initialState,
    reducers: {
        updateForm(state, action) {
            state.Form = { ...state.Form, ...action.payload };
        },
        resetForm(state) {
            state.Form = initialState.EmployerForm;
        },
        setLoading(state, { payload }) {
            state.Loading = payload
        },
    },
});

export const { updateForm, resetForm } = EmployerformSlice.actions;
export default EmployerformSlice.reducer;
