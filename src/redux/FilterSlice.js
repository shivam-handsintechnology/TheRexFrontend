import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  locationData: [],
  industryData: [],
  FunctionalAreas: [],
  CareerLevel: []
};
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    resetFiltersData: (state) => {
      // Correctly update the state by copying initial data
      Object.assign(state, initialState);
    },
    setFiltersData(state, action) {
      state[action.payload.type] = action.payload.value;
    }
  },
});

export const {
  setFiltersData,
  resetFiltersData,
} = filtersSlice.actions;

export default filtersSlice.reducer;

