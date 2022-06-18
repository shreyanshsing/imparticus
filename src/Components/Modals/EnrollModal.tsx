import { Dialog, DialogContent, DialogTitle, Grid, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CountrySelect from '../Selects/CountrySelect';
import { DialogActions } from '@mui/material';
import { Button } from './Styles/styles';
import { useSelector } from 'react-redux';
import { selectorSelect } from '../Selects/redux/Selects.slice';
import { postUserData } from '../../API/postData';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { selectorLandingPage } from '../../Pages/LandingPage/redux/Landing.slice';

function EnrollModal({open, setOpen}: {open: boolean, setOpen: any}) {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const navigation = useNavigate()

    const { enqueueSnackbar } = useSnackbar()

    const { currentCountry } = useSelector(selectorSelect)
    const { selectedCourse } = useSelector(selectorLandingPage)

    const isDisabled = () => {
        if(fname === '' || fname === undefined){
            return true
        } 
        if(lname === '' || lname === undefined){
            return true
        } 
        if(number === '' || number === undefined){
            return true
        } 
        if(email === '' || fname === undefined){
            return true
        } 

        return false
    }

    const handleEnroll = async() => {
        const data = { 
            fname: fname,
            lname: lname,
            email: email,
            number: number,
            countryCode: currentCountry?.phone,
            courseId: selectedCourse?.course_code
        }
        await postUserData(data)
        .then(res => {
            localStorage.setItem('user', res.data.insertedId)
            localStorage.setItem('course', selectedCourse?.course_code)
            enqueueSnackbar("Enrollment Sucessful", { variant: 'success' })
            setOpen(false)
            navigation('my-courses', { replace: true })
        })
        .catch(err => {
            enqueueSnackbar(`Enrollment Failed: ${err.response.data}`, { variant: 'error' })
        })
    }
  return (
    <Dialog open={open} maxWidth={'sm'}>
        <DialogTitle sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography variant='h6' sx={{fontWeight: 'bold'}}>Fill Details</Typography>
            <IconButton onClick={() => setOpen(false)}>
                <CloseRoundedIcon/>
            </IconButton>
        </DialogTitle>
        <DialogContent>
            <Grid container spacing={3} sx={{marginTop: '5px'}}>
                <Grid item xl={6}>
                    <TextField label={'First Name'} onChange={(e) => setFname(e.target.value)} fullWidth required/>
                </Grid>
                <Grid item xl={6}>
                    <TextField label={'Last Name'} onChange={(e) => setLname(e.target.value)} fullWidth/>
                </Grid>
                <Grid item xl={4}>
                    <CountrySelect />
                </Grid>
                <Grid item xl={8}>
                    <TextField 
                        type={'number'} 
                        label={'Phone Number'}
                        required
                        fullWidth
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </Grid>
                <Grid item xl={12}>
                    <TextField type={'email'} label={'Email'} onChange={(e) => setEmail(e.target.value)} required fullWidth/>
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions sx={{margin: '0px', padding: '0px'}}>
            <Button disabled={isDisabled()} onClick={handleEnroll}> Enroll Now </Button>
        </DialogActions>
    </Dialog>
  )
}

export default EnrollModal