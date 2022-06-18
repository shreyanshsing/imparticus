import styled from '@emotion/styled'
import React from 'react'
import Header from 'src/Components/Header'
import Sidebar from 'src/Components/Sidebar'

const ContentDiv = styled.div`
    
`

function MyCoursePage() {
    const actions = ['Get Help', 'Profile']
    const Title = 
    <div style={{color: 'rgba(33, 42, 57, 0.5)', fontSize: '20px', fontWeight: '600'}}>
        Introduction to Machine Learning
    </div>
  return (
    <div>
        <div style={{marginLeft: '225px', marginTop:'-5px'}}>
            <Header fullWidth={false} title={Title} actions={actions} />
        </div>
        <Sidebar/>
        <ContentDiv>

        </ContentDiv>
    </div>
  )
}

export default MyCoursePage