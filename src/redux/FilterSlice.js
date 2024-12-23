import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  locationData: [],
  industryData: [],
  FunctionalAreas: [],
  CareerLevel: [],
  "searchedQuery": "",
  "location": [],
  "jobid": "",
  "category": [],
  "min_years": 0,
  "max_years": 10,
  "minSalary": "",
  "maxSalary": "",
  "jobtypes": [],
  "education": [],
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
  setFiltersData, setArrayFilter,
  resetFiltersData, setFIlter
} = filtersSlice.actions;

export default filtersSlice.reducer;

