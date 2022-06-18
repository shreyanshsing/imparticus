import { Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EnrollModal from '../../Components/Modals/EnrollModal'
import Header from '../../Components/Header/index'
import { Button, Container, Heading, InfoDiv, MainSection, Overlay, Tagline } from './Styles/styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourses, selectorLandingPage, setSelectedCourse } from './redux/Landing.slice'
import store from '../../Config/redux/store'
import LoadingPage from './Loading'
import { getAverageRating, getRatingsCount } from '../../Helpers/localFuctions'

export type AppDispatch = typeof store.dispatch;

function LandingPage() {

    const { courses, loading } = useSelector(selectorLandingPage)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        courses.length === 0 && dispatch(fetchCourses())
    }, [courses.length, dispatch])

    const [ openEnrollModal, setOpenEnrollModal] = useState<boolean>(false)

    const Title = 
    <div style={{width: '300px'}}>
        <img decoding="async" alt="Eckovation logo" src="https://cdn.pegasus.imarticus.org/images/imarticus-new-logo-green.svg" />
    </div>

    const handleEnroll = (course : any) => {
        setOpenEnrollModal(true)
        dispatch(setSelectedCourse(course))
    }

    const actions = [ 'I-ACE', 'Blog' ]
    return (
        <>
            {
                openEnrollModal ? <EnrollModal open={openEnrollModal} setOpen={setOpenEnrollModal} /> : null 
            }
            {
                loading ? <LoadingPage/> : courses.length > 0 && courses.map( (course: any) => (
                    <Container>  
                    <Header fullWidth={true} title={Title} actions={actions} />
                    <MainSection>
                        <Overlay>
                            <Heading variant='h3' gutterBottom>{course?.course_name}</Heading>
                            <Tagline variant='subtitle1' gutterBottom>{course?.description}</Tagline>
                            <Heading variant='body1' sx={{marginTop: '1rem'}} gutterBottom><strong>Created By:</strong> <strong style={{color: '#fed6a8'}}>{course?.created_by}</strong></Heading>
                            <Heading variant='body1' gutterBottom><strong>Course Duration:</strong> <strong style={{color: '#fed6a8'}}>{course?.duration}</strong></Heading>
                            <InfoDiv>
                                <Typography variant='h2' sx={{color: '#fed6a8', marginRight: '5rem'}} gutterBottom>
                                    Free
                                </Typography>
                                <div>
                                    <Heading variant='body1' gutterBottom><strong>Ratings</strong></Heading>
                                    <Rating value={getAverageRating(course)} />
                                    <Heading variant='body1' gutterBottom>{getRatingsCount(course)} Ratings | {course?.enrollments} Enrollments</Heading>
                                </div>
                            </InfoDiv>
                            <Button onClick={() => handleEnroll(course)}>
                                Enroll Now
                            </Button>
                        </Overlay>
                    </MainSection>
                </Container>
                ))
            }
        </>
    )
}

export default LandingPage