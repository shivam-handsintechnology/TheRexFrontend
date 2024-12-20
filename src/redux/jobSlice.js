import { createSlice } from "@reduxjs/toolkit";
import Initialdata from '@/utils/initialData'
const jobSlice = createSlice({
    name: "job",
    initialState: Initialdata.initialJobFilterData,
    reducers: {
        // actions\ 
        reset: (state) => {
            // Correctly update the state by copying initial data
            Object.assign(state, Initialdata.initialJobFilterData);
        },
        // Clear a specific filter array
        clearArrayFilter: (state, action) => {
            const { type } = action.payload;
            state[type] = [];
        },
        // Replace entire array filter
        setArrayFilter: (state, action) => {
            const { type, values } = action.payload;
            // Remove duplicates using Set
            state[type] = [...new Set(values)];
        },
        setFIlter: (state, action) => {
            state[action.payload.type] = action.payload.value
        }

    },

});
export const {
    reset, setFIlter,
    clearArrayFilter,
    setArrayFilter
} = jobSlice.actions;
export default jobSlice.reducer;
