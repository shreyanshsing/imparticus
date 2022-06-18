import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCountry } from "../../../API/fetchData";

export const fetchCountries = createAsyncThunk('fetch-contries', async() => {
    const result = await fetchCountry()

    return result.data
})

interface state {
    loading: boolean
    countries: any
    currentCountry: any
}

const SelectReducer = createSlice({
    name: 'select-reducer',
    initialState: {
        loading: false,
        countries: [],
        currentCountry: {
            code: 'IN',
            label: 'India',
            phone: '91'
        }
    } as state,
    reducers: {
        setCurrentCountry: (state, action) => {
            state.currentCountry = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.fulfilled, (state, action) => {
            state.loading = false
            state.countries = action.payload
        })
        builder.addCase(fetchCountries.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCountries.rejected, (state) => {
            state.loading = false
            state.countries = []
        })
    }
})

export default SelectReducer.reducer

export const selectorSelect = (state: any) => state.SelectReducer

export const { setCurrentCountry } = SelectReducer.actions

