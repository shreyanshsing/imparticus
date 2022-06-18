import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllCourses } from "../../../API/fetchData";

export const fetchCourses = createAsyncThunk('fetch-courses', async() => {
    const result = await fetchAllCourses()

    return result.data
})

export const LandingPageReducer = createSlice({
    name: 'LandingPageReducer',
    initialState: {
        courses: [],
        loading: false,
        selectedCourse: {}
    },
    reducers: {
        setSelectedCourse: (state, action) => {
            state.selectedCourse = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchCourses.fulfilled, (state, action) => {
            state.loading = false
            state.courses = action.payload
        })
        builder.addCase(fetchCourses.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCourses.rejected, (state) => {
            state.loading = false
            state.courses = []
        })
    }
})

export default LandingPageReducer.reducer;

export const selectorLandingPage = (state: any) => state.LandingPageReducer

export const { setSelectedCourse } = LandingPageReducer.actions
