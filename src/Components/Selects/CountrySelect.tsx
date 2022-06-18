import { Autocomplete, Box, CircularProgress, TextField } from '@mui/material'
import React, { useCallback } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import store from '../../Config/redux/store';
import { fetchCountries, selectorSelect, setCurrentCountry } from './redux/Selects.slice';

export type AppDispatch = typeof store.dispatch;

function CountrySelect() {

    const { countries, loading } = useSelector(selectorSelect)
    const dispatch = useDispatch<AppDispatch>()

    const fetchCountry = useCallback(() => {
        dispatch(fetchCountries())
    }, [dispatch])

    useEffect(() => {
        countries.length === 0 && fetchCountry()
    }, [countries.length, fetchCountry])

  return (
    <React.Fragment>
        <Autocomplete
            id={`select-country`}
            sx={{ width: '100%'}}
            options={loading ? [] : countries}
            autoHighlight
            onChange={(event, newValue) => dispatch(setCurrentCountry(newValue))}
            getOptionLabel={(option : any) => `${option?.label} +${option?.phone}`}
            renderOption={(props, option: any) => 
                {
                    return loading ?
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        <CircularProgress />
                    </Box> :
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        {option?.label} ({option?.phone})
                    </Box>
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={'Country'}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                    required
                />
            )}
        />
    </React.Fragment>
  )
}

export default CountrySelect