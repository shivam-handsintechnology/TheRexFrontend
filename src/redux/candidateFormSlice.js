import InitialData from '@/utils/initialData';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Form: InitialData.candidateForm,
};

const CandidateformSlice = createSlice({
    name: 'candidateform',
    initialState,
    reducers: {
        updateForm(state, action) {
            state.Form = { ...state.Form, ...action.payload };
        },
        resetForm(state) {
            state.Form = initialState.candidateForm;
        },
    },
});

export const { updateForm, resetForm } = CandidateformSlice.actions;
export default CandidateformSlice.reducer;
