import styled from '@emotion/styled'
import { Accordion, AccordionDetails, AccordionSummary, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from 'src/Components/Header'
import Sidebar from 'src/Components/Sidebar'
import store from 'src/Config/redux/store'
import { fetchCurrentCourse, selectorMyCourse } from './redux/MyCoursePage.slice'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';

const ContentDiv = styled(Paper)`
    margin-top: 5rem;
    background-color: #f2f6f9;
    padding: 2rem;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
`

export type AppDispatch = typeof store.dispatch;

function MyCoursePage() {
    const { courseCode }  =useParams()
    const dispatch = useDispatch<AppDispatch>()

    const { course } = useSelector(selectorMyCourse)

    console.log(course)

    useEffect(() => {
        dispatch(fetchCurrentCourse(courseCode))
    }, [courseCode, dispatch])

    const actions = ['Get Help', 'Profile']
    const Title = 
    <div style={{color: 'rgba(33, 42, 57, 0.5)', fontSize: '20px', fontWeight: '600'}}>
        {course?.course_name??'Loading'}
    </div>

  return (
    <div>
        <Sidebar/>
        <div style={{marginLeft: '225px', marginTop:'-5px'}}>
            <Header fullWidth={false} title={Title} actions={actions} />
            <ContentDiv>
                {
                    course && course?.chapters?.length > 0 && course.chapters.map((item : any) => (
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant='h6' gutterBottom> 
                                    {item?.title } <br/>
                                    <Typography variant='caption' gutterBottom>
                                        Lectures: {item?.lectures?.length} | Quizes: {item?.quizes.length??0}
                                    </Typography>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    {
                                        item?.lectures && item?.lectures?.length > 0 && item?.lectures.map((lec: any) => (
                                            <ListItem divider>
                                                <ListItemText primary={lec?.title}/>
                                                <ListItemSecondaryAction>
                                                    <IconButton>
                                                        <PlayCircleFilledWhiteOutlinedIcon/>
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </ContentDiv>
        </div>
    </div>
  )
}

export default MyCoursePage