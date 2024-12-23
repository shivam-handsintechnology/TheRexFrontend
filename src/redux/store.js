import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; // defaults to localStorage for web
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice, { fetchJobUserDataAfterSetUserMiddleware, reset as resetAuth } from "./authSlice"; // Import fetchRole from authSlice
import FilterSlice, { resetFiltersData as resetFilter, setFiltersData } from "./FilterSlice";
import { jobPortalApi } from "./apiSlice";
import CandidateformSlice, { resetForm as resetCandidateForm } from "./candidateFormSlice"
import EmployerFormSlice, { resetForm as resetEmployerForm } from "./EmployerFormSlice"
// Persist config for auth slice
const authPersistConfig = {
    key: "auth",
    storage,
};
const CandidateformPersistConfig = {
    key: "Candidateform",
    storage,
    blacklist: ["Loading"]
};
const EmployerFormPersistConfig = {
    key: "EmployerForm",
    storage,
    blacklist: ["Loading"]
};

// Combine reducers, applying persist only to selected reducers
const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authSlice),
    filters: FilterSlice,
    candidateForm: persistReducer(CandidateformPersistConfig, CandidateformSlice),
    EmployerForm: persistReducer(EmployerFormPersistConfig, EmployerFormSlice),
    [jobPortalApi.reducerPath]: jobPortalApi.reducer,
});

// Configure the store with the combined reducer
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(fetchJobUserDataAfterSetUserMiddleware, jobPortalApi.middleware,),
});

// Create a persistor instance
export const persistor = persistStore(store);

// Function to clear all states
export const clearAllStates = () => {
    // Clear persisted storage
    persistor.purge();
    // Reset state for each slice
    store.dispatch(resetAuth());
    store.dispatch(resetFilter());
    store.dispatch(resetCandidateForm());
    store.dispatch(resetEmployerForm());
    // Reset the RTK Query cache
    store.dispatch(jobPortalApi.util.resetApiState());
};

export const handlefilter = (type, value) => {
    store.dispatch(setFiltersData({ type, value }));
};

// Set up RTK listeners
setupListeners(store.dispatch);





export default store;
