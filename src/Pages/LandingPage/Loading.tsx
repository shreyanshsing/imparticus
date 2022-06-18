import { Skeleton, Typography } from '@mui/material'
import React from 'react'
import Header from '../../Components/Header/index'
import { Button, Container, Heading, InfoDiv, MainSection, Overlay, Tagline } from './Styles/styles'
import store from '../../Config/redux/store'

export type AppDispatch = typeof store.dispatch;

function LoadingPage() {

    const Title = 
    <div style={{width: '300px'}}>
        <img decoding="async" alt="Eckovation logo" src="https://cdn.pegasus.imarticus.org/images/imarticus-new-logo-green.svg" />
    </div>

    const actions = [ 'I-ACE', 'Blog' ]
    return (
        <>
            <Container>  
                <Header fullWidth={true} title={Title} actions={actions} />
                <MainSection>
                    <Overlay>
                        <Heading variant='h3' gutterBottom><Skeleton variant="text" /></Heading>
                        <Tagline variant='subtitle1' gutterBottom><Skeleton variant="text" /></Tagline>
                        <Heading variant='body1' sx={{marginTop: '1rem'}} gutterBottom><strong>Created By:</strong> <strong style={{color: '#fed6a8'}}><Skeleton variant="text" /></strong></Heading>
                        <Heading variant='body1' gutterBottom><strong>Course Duration:</strong> <strong style={{color: '#fed6a8'}}><Skeleton variant="text" /></strong></Heading>
                        <InfoDiv>
                            <Typography variant='h2' sx={{color: '#fed6a8', marginRight: '5rem'}} gutterBottom>
                                Free
                            </Typography>
                            <div>
                                <Heading variant='body1' gutterBottom><strong>Ratings</strong></Heading>
                                <Skeleton variant="text" />
                                <Heading variant='body1' gutterBottom><Skeleton variant="text" /></Heading>
                            </div>
                        </InfoDiv>
                        <Button disabled>
                            Enroll Now
                        </Button>
                    </Overlay>
                </MainSection>
            </Container>
        </>
    )
}

export default LoadingPage