import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

const Container = styled.div`
  width: 230px;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #055646;
  color: whitesmoke;
  height: 100vh;
`

const Logo = styled.div`
  width: 150px;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid lightgray;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
`

const Link = styled(Typography)`
  cursor: pointer;
  padding: 1rem;
  padding-left: 2rem;
  margin-top: 5rem;
  font-weight: bold;
  font-size: 18px;
  background-color: #022a22;
  border-left: 5px solid whitesmoke;
  &:hover{
    background-color: #022a22;
    border-left: 5px solid whitesmoke;
  }
  &:focus{
    background-color: #022a22;
    border-left: 5px solid whitesmoke;
  }
`

const AdditionalAction = styled.div`
  position: fixed;
  width: 230px;
  bottom: 0px;
  margin-bottom: 2rem;
  border-top: 1px solid lightgray;
  padding-top: 15px;
`

const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.08);
  color: whitesmoke;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  padding: 10px 20px; 
  border: none;
`

function Sidebar() {
  return (
    <Container>
      <Logo>
        <img style={{width: 'inherit'}} alt="Imarticus" src="https://cdn.pegasus.imarticus.org/images/imarticus-new-logo.svg"/>
      </Logo>
      <Link >
        Course
      </Link>
      <AdditionalAction>
        <div style={{paddingLeft: '2rem'}}>
          <Typography variant={'subtitle2'} sx={{marginBottom: '1rem'}} gutterBottom>Facing issues?</Typography>
          <Button>Get Help</Button>
        </div>
      </AdditionalAction>
    </Container>
  )
}

export default Sidebar