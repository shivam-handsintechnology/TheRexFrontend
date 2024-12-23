import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Initialdata from '@/utils/initialData'
import { fetchJobUserData } from "./reduxthink/fetchJobUserData";

const authSlice = createSlice({
    name: "auth",
    initialState: Initialdata.InitialJobPortalUserData,
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
            Object.assign(state, Initialdata.InitialJobPortalUserData);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchJobUserData.fulfilled, (state, action) => {
            console.log("action????", action.payload)
            Object.assign(state, action.payload);
        })
    },
});

export const { setToken, reset } = authSlice.actions;
export const fetchJobUserDataAfterSetUserMiddleware = (store) => (next) => (action) => {
    if (action) {
        const result = next(action);

        // Ensure action type and payload validity
        if (action.type === setToken.type && action.payload) {
            // Dispatch fetchJobUserData safely
            if (typeof store.dispatch === "function") {
                store.dispatch(fetchJobUserData());
            } else {
                console.error("Dispatch is not a function. Check middleware integration.");
            }
        }

        return result;
    }
};

// Subscribe to the store and conditionally dispatch fetchJobUserData based on the token



export default authSlice.reducer;