import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Initialdata from '@/utils/initialData'
import { fetchJobUserData } from "./reduxthink/fetchJobUserData";

const authSlice = createSlice({
    name: "auth",
    initialState: Initialdata.InitialJobUserData,
    reducers: {
        setToken: (state, action) => {
            // state.user = action.payload.user;
            state.token = action.payload;
        },
        setRole: (state, action) => {
            // state.user = action.payload.user;
            state.role = action.payload
        },
        setUserData: (state, action) => {
            state = { ...state, ...action.payload };
            return state;
        },
        reset: (state) => {
            // Correctly update the state by copying initial data
            Object.assign(state, Initialdata.InitialJobUserData);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchJobUserData.fulfilled, (state, action) => {
            console.log("action????", action.payload)
            state = { ...state, ...action.payload };
        })
    },
});

export const { setToken, reset } = authSlice.actions;
export const fetchJobUserDataAfterSetUserMiddleware = store => next => action => {
    const result = next(action);
    if (action.type === setToken.type && action.payload) {
        store.dispatch(fetchJobUserData());
    }
    return result;
};
// Subscribe to the store and conditionally dispatch fetchJobUserData based on the token



export default authSlice.reducer;