import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCourseByCode } from "../../../API/fetchData";

export const fetchCurrentCourse = createAsyncThunk(
    'fetch-current-course', async(courseCode: string | undefined) => {
        const result = await fetchCourseByCode(courseCode)

        return result.data;
    }
)

export const MyCoursePageReducer = createSlice({
    name: 'mycourse-page',
    initialState: {
        loading: false,
        course: {}
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCurrentCourse.fulfilled, (state, action) => {
            state.loading = false
            state.course = action.payload
        })
        builder.addCase(fetchCurrentCourse.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCurrentCourse.rejected, (state, action) => {
            state.loading = false
            state.course = {}
        })
    }
})

export default MyCoursePageReducer.reducer

export const selectorMyCourse = (state: any) => state.MyCourse